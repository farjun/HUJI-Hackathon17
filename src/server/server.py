from flask import Flask, request, jsonify, render_template, send_from_directory
import json
import sqlite3

db = sqlite3.connect('mysite/simitu.db')
app = Flask(__name__, static_url_path='')


@app.route('/')
def render():
    return render_template('index.html')

@app.route('/resources/<path:path>')
def resources(path):
    return send_from_directory('app/resources', path)

@app.route('/components/<path:path>')
def components(path):
    return send_from_directory('app/components', path)

@app.route('/app/<path:path>')
def app_js(path):
    return send_from_directory('app/', path)

@app.route('/test')
def test():
    return render_template('test.html')


@app.route('/api/getuser')
def get_user():
    uid = request.args['id']
    print("Getting user: " + str(uid))
    curs = db.cursor()
    try:
        curs.execute("SELECT * FROM USERS WHERE ID=?", (uid,))
    except Exception as e:
        print (e)
        return 'BAD', 500

    q = [{"uid": q[0],
          "name": q[1],
          "age:": q[2],
          "profile": q[3],
          "cover": [4],
          "likes": q[5],
          "favorites": q[6],
          "interests": q[7].split(';'),
          "event1ID": q[8],
          "event2ID": q[9],
          "event3ID": q[10]} for q in curs.fetchall()]

    print(q)

    return json.dumps(q)

@app.route('/api/getevent')
def get_event():
    eid = request.args['eid']
    curs = db.cursor()

    try:
        curs.execute("SELECT * FROM EVENTS WHERE ID=?", (eid,))
        q = curs.fetchone()
        ev = {"eid": q[0],
              "uid": q[1],
              "name": q[2],
              "description": q[3],
              "location": q[4],
              "event_pic": q[5].split(';'),
              "age_restriction": q[6],
              "attendees_restriction": q[7]}
        curs.execute("SELECT * FROM USERS where ID=?", (ev['uid'],))
        q = curs.fetchone()
        u = {"uid": q[0],
             "name": q[1],
             "age:": q[2],
             "profile": q[3],
             "cover": [4],
             "event": q[5],
             "likes": q[6],
             "favorites": q[7],
             "interests": q[8].split(';')}
    except Exception as e:
        print(e)
        return 'BAD', 500

    return json.dumps({"user": u, "event": ev})

@app.route('/api/removeevent')
def remove_event():
    eid = request.args['eid']

    curs = db.cursor()
    try:
        curs.execute("DELETE From EVENTS WHERE ID=?", (eid,))
        db.commit()
    except Exception as e:
        print(e)
        return 'BAD', 500

    return 'OK', 200


@app.route('/api/adduser', methods=['POST'])
def add_user():
    curs = db.cursor()
    j = request.json
    uid = j['uid']
    name = j['name']
    age = j['age']
    profile_photo = j['profile']
    cover_photo = j['cover']
    interest = ";".join(j['interests'])

    try:
        curs.execute("INSERT INTO USERS VALUES (?,?,?,?,?,?,?,?,?,?,?)",
                     (uid, name, age, profile_photo, cover_photo, 0, 0,
                      interest, 0, 0, 0))
        db.commit()
    except Exception as e:
        print(e)
        return 'BAD', 500

    return 'OK', 200


@app.route('/api/addevent', methods=['POST'])
def add_event():
    j = request.json
    uid = j['uid']
    name = j['name']
    desc = j['desc']
    loc = j['location']
    ep = ';'.join(j['photos'])
    agr = j['agerestriction']
    atr = j['attendeerestriction']

    value = (None, uid, name, desc, loc, ep,agr, atr,)

    curs = db.cursor()
    try:
        curs.execute("INSERT INTO EVENTS VALUES (?,?,?,?,?,?,?,?)", value)
        db.commit()
    except Exception as e:
        print(e)
        return 'BAD', 500

    return 'OK', 200



@app.route('/api/getevents')
def get_events():
    curs = db.cursor()
    curs.execute("SELECT * FROM EVENTS")

    return json.dumps([{"eid": q[0],
                        "uid": q[1],
                        "name": q[2],
                        "description": q[3],
                        "location": q[4],
                        "event_pic": q[5].split(';'),
                        "age_restriction": q[6],
                        "attendees_restriction": q[7]} for q in curs.fetchall()])


@app.route('/api/addrequest')
def add_request():
    event_id = request.args["eid"]
    user_id = request.args["uid"]
    print("add: " + event_id + " " + user_id)
    c = db.cursor()

    c.execute("INSERT INTO notifications VALUES (?, ?, ?, ?)",
              (None, event_id, 'request', user_id,))
    db.commit()

    return "OK", 200


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
