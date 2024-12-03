function createTimeDrivenTriggers() {
  // Create a time-driven trigger that runs every 10 minutes to check for uploaded files
  ScriptApp.newTrigger('onEdit')
           .timeBased()
           .everyMinutes(15) // You can adjust the frequency
           .create();
}
