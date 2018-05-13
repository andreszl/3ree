
import * as service from './services/event'

export function getEvents(req,res){
  service.getEvents()
  .then((events) => res.json(events))
  .catch(err => {
    res.json({error:err})
  })
}
