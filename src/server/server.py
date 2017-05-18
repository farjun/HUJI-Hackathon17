from flask import Flask, request, jsonify, render_template
import json
import sqlite3

db = sqlite3.connect('mysite/simitu.db')
app = Flask(__name__)


@app.route('/')
def render():
    return render_template('fb2.html')


@app.route('/api/getuser')
def get_user():
    uid = request.args['id']
    curs = db.cursor()
    curs.execute("SELECT * FROM USERS WHERE ID=?", (uid,))
    q = curs.fetchall()

    return json.dumps({"uid": q[0],
                       "name": q[1],
                       "age:": q[2],
                       "profile": q[3],
                       "cover": [4],
                       "event": q[5],
                       "likes": q[6],
                       "favorites": q[7],
                       "interests": q[8].split()})


@app.route('/api/adduser', methods=['POST'])
def add_user():
    curs = db.cursor()
    j = request.json
    print(j)
    uid = j['uid']
    name = j['name']
    age = j['age']
    profile_photo = j['profile']
    cover_photo = j['cover']
    interest = ""
    for i in j['interests']:
        interest += str(i) + ";"

    try:
        curs.execute("INSERT INTO USERS VALUES (?,?,?,?,?,0,0,'',?)",
                     (uid, name, age, profile_photo, cover_photo,
                      interest[1:],))
        db.commit()
    except Exception as e:
        print(e)
        return 'BAD'

    return 'OK'


@app.route('/api/addrequest')
def add_request():
    event_id = request.args["eid"]
    user_id = request.args["uid"]
    print("add: " + event_id + " " + user_id)
    c = db.cursor()

    c.execute("INSERT INTO notifications VALUES (?, ?, ?)",
              (None, event_id, 'request', user_id,))
    db.commit()

    return "OK"


@app.route('/api/getnotification')
def get_notifications():
    user_id = request.args["userID"]

    c = db.cursor()
    c.execute("SELECT type, otherUserID  FROM notifications WHERE userID=?",
              (user_id,))

    return json.dumps(c.fetchall())


@app.route('/api/approveuser')
def approve_user():
    user_to_approve = request.args["approveid"]
    user_id = request.args["uid"]
    approve = request.args["approve"]

    c = db.cursor()
    c.execute(
        "DELETE FROM notifications WHERE type='request' AND otherUserID=" + user_to_approve + \
        " AND userID=" + user_id)
    db.commit()

    # if approve=true : insert into ATTENDEES
    if approve:
        c.execute("INSERT INTO ATTENDEES VALUES (?, ?)",
                  (user_id, user_to_approve,))
        db.commit()

    return "OK"


if __name__ == '__main__':
    app.run()
    db.close()
