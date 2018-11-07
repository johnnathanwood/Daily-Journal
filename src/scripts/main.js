import Entry from "./EntryForm"
import getEntries from "./EntryList"
import render from "./render"


getEntries()
    .then(entryList => render(entryList))
