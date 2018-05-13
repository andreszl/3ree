import r from 'rethinkdb'
import config from 'config'

function connect() {
   return r.connect(config.get('rethinkdb'))
}

export function getEvents() {
  return connect()
  .then(conn => {
    return r
    .table('pulses')
    .orderBy(r.desc('created')).run(conn)
    .then(cursor => cursor.toArray());
  })
}