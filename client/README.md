# Qualsafe technical test

### Notes ###

Written in React

1) Install docker
2) Install npm/node
3) npm run build
4) npm run docker_run

Optionally:

5) npm start - for development build

Qualsafes website was broken due to configuration. You need prod running to get the development environment working.

### Sample API Output ###

```json
courses({
  "courses": [
    {
      "id": "1",
      "start": "2013-01-01",
      "end": "2013-01-31",
      "qualification": "FAW",
      "students": [
        {
          "id": "1",
          "name": "Rich Newman-Flint"
        },
        {
          "id": "3",
          "name": "Bob Smith"
        }
      ]
    },
    {
      "id": "2",
      "start": "2013-02-01",
      "end": "2013-02-29",
      "qualification": "PAED",
      "students": [
        {
          "id": "4",
          "name": "Chris Youlden"
        },
        {
          "id": "2",
          "name": "Dave Thompson"
        }
      ]
    },
    {
      "id": "3",
      "start": "2013-03-04",
      "end": "2013-03-05",
      "qualification": "EFAW",
      "students": [
        {
          "id": "5",
          "name": "Robin Siddle"
        },
        {
          "id": "8",
          "name": "Gwen Smith"
        }
      ]
    },
    {
      "id": "4",
      "start": "2013-04-05",
      "end": "2013-06-29",
      "qualification": "EFAW",
      "students": [
        {
          "id": "6",
          "name": "Stephen Smithstone"
        },
        {
          "id": "7",
          "name": "Jack Wills"
        }
      ]
    }
  ]
});
```

### Technical Test ###

This task aims to test your client side web skills. You need to create a web page that lists unpaid courses and the
students enrolled on each.

The list of unpaid courses is available via a web service, in JSONP format, at:
http://www.qualsafe.com/getCourses.php?action=getUnpaid

The course list should include the following data:
• Course ID • Start Date • End Date • Qualification Type

Each course in the list should be expandable/collapsible to show/hide the students enrolled on the course. Student
details to be shown are:
• Student ID • Name

Here is an example of what the page might look like:
![Examole of what the page should look like](example_screenshot.png)