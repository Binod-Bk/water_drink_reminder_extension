chrome.alarms.create("drinkWater", { delayInMinutes: 60 });

chrome.alarms.onAlarm.addListener(function(alarm) {
  if (alarm.name === "drinkWater") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "water.png",
      title: "Drink Water Reminder",
      message: "It's time to drink some water!"
    });
  }
});
