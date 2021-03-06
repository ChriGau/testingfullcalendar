
  $('#calendar').fullCalendar({
    defaultView: 'agendaWeek',
    hiddenDays: [0], //hide Sundays
    businessHours: {
      // days of week. an array of zero-based day of week integers (0=Sunday)
      dow: [ 1, 2, 3, 4 , 5, 6], // Monday - Saturday
      start: '07:00', // TODO : hide non business hours
      end: '22:00', // an end time (6pm in this example)
                  },
    // alow things to get dropped on the calendar
    events: [
        // events go here

        {
          title: 'vendeur',
          description: "3",
          start: '2017-08-28 10:00',
          end: '2017-08-28 14:00',
          editable: true,
          overlap: false,
          color: "#ff40e5",
          borderColor: "#ffbd00",
          textcolor: "#ff0000",
        },
        {
          title: 'mécano',
          description: "2",
          start: '2017-08-28 07:00',
          end: '2017-08-28 15:00',
          editable: true,
          overlap: false,
          color: "#ff0000",
        },
                  {
          title: 'magasinier',
          description: "1",
          start: '2017-08-28 09:00',
          end: '2017-08-28 12:00',
          editable: true,
          overlap: false,
          color: "#0000FF",
          image: "https://unsplash.it/200/300"
        }
    ],
eventRender: function(event, element) {
            element.find('.fc-title').append("<br/>" + event.description + "<br/>" + "<img src='https://unsplash.it/200/300' style= 'width:40px;height:40px;border-radius:40px;'>" + "<br/>"+ "<br/>"+ "<img src='https://unsplash.it/400/300' style= 'width:40px;height:40px;border-radius:40px;'>" + "<br/>");
        },
});

