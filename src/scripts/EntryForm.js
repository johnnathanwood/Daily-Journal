import database from "./EntryCollection"

class Entry {
    constructor(props) {
        this.date = props.date
        this.concept = props.concept
        this.journal = props.journal
        this.mood = props.mood
    }

get journalInfo() {
    return {date: this.date, concept: this.concept, journal: this.journal, mood: this.mood}
}

save(){
    return database.saveEntry(this.journalInfo)
    }
}

export default Entry