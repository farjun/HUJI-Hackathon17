from flask import Flask, request, jsonify
import json
import sqlite3

db = sqlite3.connect('simitu.db')
app = Flask(__name__)


@app.route('/')
def default():
    return 'Welcome to simitu'


@app.route('/adduser', methods=['POST'])
def add_user():
    curs = db.cursor()
    j = request.json
    id = j['id']
    name = j['name']
    age = j['age']
    profile_photo = j['profile']
    cover_photo = j['cover']
    interest = ""
    for i in j['interests']:
        interest += str(i) + ";"

    try:
        curs.execute("INSERT INTO USERS VALUES (?,?,?,?,?,0,0,'',?)",
                     (id, name, age, profile_photo, cover_photo, interest[1:],))
        db.commit()
    except Exception as e:
        return e

    return 'OK'


def add_request():
    event_id = request.args["eventID"]
    user_id = request.args["userID"]

    c = db.cursor()
    try:
        c.execute("INSERT INTO notifications VALUES (userID=?,"
                  "otherUserID=?)", (user_id, event_id,))
        c.execute("INSERT INTO notifications (userID,type, otherUserID) \
          VALUES (" + event_id + ", 'request' ," + user_id + ",)")
        db.commit()
    except:
        return "BAD"

    return "OK"


def get_notifications():

  user_id =request.args["userID"]
  try:
    c = db.cursor()
    c.execute("SELECT (type, otherUserID)  FROM notifications WHERE userID='%s'" % user_id)
  except:
    return "BAD"

  return json.dump(c.fetchall())


def approve_user():

  user_to_approve = request.args["userToApprove"]
  user_id = request.args["userID"]
  approve  = request.args["approve"]
  try:
    c = db.cursor()
    c.execute("DELETE FROM notifications WHERE type='request' and otherUserID="+user_to_approve+ \
              " and userID="+user_id)
    db.commit()
  except:
    return "BAD"

  #if approve=true : insert into ATTENDEES
  if approve:
    try:
      c.execute("INSERT INTO ATTENDEES (eventID, userID ) \
        VALUES (" + user_id + "," + user_to_approve + " )")
      db.commit()
    except:
      return "BAD"

  return "OK"

if __name__ == '__main__':
    app.run('0.0.0.0', 5000)
