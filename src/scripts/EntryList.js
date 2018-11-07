import journalEntryComponent from "./Entry"
import database from "./EntryCollection"


export default () => {
    return database.getEntries()
    .then ((entries) => entries.map( entry => journalEntryComponent(entry)))
}

