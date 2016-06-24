var $day1table = $('#table1');
var $day2table = $('#table2');
var $day3table = $('#table3');

    $(function () {
        var day1data = [
            {
                "date": "DAY 1 <br> 27th June 2016",
                "time": "8:00 - 8:30",
                "activity": "Arrival and Registration",
                "facilitator": "AIR Lab"
            },
            {
                "date": "",
                "time": "8:30 - 9:00",
                "activity": "Opening remarks",
                "facilitator": "Dean, School of Computing & IT, Makerere University <br> Prof. Neil Lawrence"
            },
            {
                "date": "",
                "time": "",
                "activity": '<h5 class="text-center">SESSION 1 (Machine Learning & Data Science)</h5>',
                "facilitator": ""
            },
            {
                "date": "",
                "time": "9:00 - 10:00",
                "activity": '<p class="text-warning">Lecture 1 : Introduction to Data Science and Machine Learning</p>',
                "facilitator": 'Neil Lawrence <br> <b>Materials:</b> <a href="#">Slides</a>, <a href="#">Other References</p></a>'
            },
            {
                "date": "",
                "time": "10:00 - 10:30",
                "activity": "Break",
                "facilitator": ""
            },
            {
                "date": "",
                "time": "10:30 - 12:00",
                "activity": "Lecture 1 Practice Session",
                "facilitator": 'All facilitators <br> <b>Materials:</b> <a href="#">Code</a>, <a href="#">Dataset</p></a>'
            },
            {
                "date": "",
                "time": "",
                "activity": '<h5 class="text-center">SESSION 2 (Machine Learning)</h5>',
                "facilitator": ""
            },
            {
                "date": "",
                "time": "12:00 - 13:00",
                "activity": "Lecture 2 : Introduction to Classification",
                "facilitator": "Mike Smith <br> <b>Materials:</b> <a href='https://lionfish0.github.io/Classification_talk/'>Slides</a>"
            },
            {
                "date": "",
                "time": "13:00 - 14:00",
                "activity": "Lunch",
                "facilitator": ""
            },
            {
                "date": "",
                "time": "14:00 - 15:20",
                "activity": "Lecture 2 Practice Session : Classification",
                "facilitator": "All facilitators <br> <b>Materials:</b> <a href='https://github.com/lionfish0/Classification_talk/blob/master/ipython/Classification.ipynb'>Code</a>"
            },
            {
                "date": "",
                "time": "15:20 - 15:30",
                "activity": "Break",
                "facilitator": ""
            },
            {
                "date": "",
                "time": "",
                "activity": '<h5 class="text-center">SESSION 3 (Data Science)</h5>',
                "facilitator": ""
            },
            {
                "date": "",
                "time": "15:30 - 16:30",
                "activity": "Lecture 3",
                "facilitator": "Ricardo Andrade/Andreas Damianou"
            },
            {
                "date": "",
                "time": "16:30 - 18:00",
                "activity": "Lecture 3 Practice Session",
                "facilitator": "All facilitators"
            }
        ];
        $day1table.bootstrapTable({data: day1data});
    });


$(function () {
        var day2data = [
            {
                "date": "DAY 2 <br> 28th June 2016",
                "time": "",
                "activity": '<h5 class="text-center">SESSION 4 (Data Science)</h5>',
                "facilitator": ""
            },
            {
                "date": "",
                "time": "9:00 - 10:00",
                "activity": '<p class="text-warning">Lecture 4 : Data wrangling with Pandas</p>',
                "facilitator": 'Martin Mubangizi <br> <b>Materials:</b> <a href="#">Notebook</a>, <a href="#">Other References</p></a>'
            },
            {
                "date": "",
                "time": "10:00 - 10:30",
                "activity": "Break",
                "facilitator": ""
            },
            {
                "date": "",
                "time": "10:30 - 12:00",
                "activity": "Lecture 4 Practice Session",
                "facilitator": 'All facilitators <br> <b>Materials:</b> <a href="#">Code</a>, <a href="#">Dataset</p></a>'
            },
            {
                "date": "",
                "time": "",
                "activity": '<h5 class="text-center">SESSION 5 (Machine Learning)</h5>',
                "facilitator": ""
            },
            {
                "date": "",
                "time": "12:00 - 13:00",
                "activity": "Introduction to Classification",
                "facilitator": "John Quinn"
            },
            {
                "date": "",
                "time": "13:00 - 14:00",
                "activity": "Lunch",
                "facilitator": ""
            },
            {
                "date": "",
                "time": "14:00 - 15:20",
                "activity": "Classification Practice Session: Malaria detection",
                "facilitator": "All facilitators"
            },
            {
                "date": "",
                "time": "15:20 - 15:30",
                "activity": "Break",
                "facilitator": ""
            },
            {
                "date": "",
                "time": "",
                "activity": '<h5 class="text-center">SESSION 6 (Data Science)</h5>',
                "facilitator": ""
            },
            {
                "date": "",
                "time": "15:30 - 16:30",
                "activity": "Lecture 6",
                "facilitator": "Ernest Mwebaze"
            },
            {
                "date": "",
                "time": "16:30 - 18:00",
                "activity": "Lecture 6 Practice Session",
                "facilitator": "All facilitators"
            }
        ];
        $day2table.bootstrapTable({data: day2data});
    });

$(function () {
        var day3data = [
            {
                "date": "DAY 3 <br> 29th June 2016",
                "time": "",
                "activity": '<h5 class="text-center">SESSION 7 (Data Science)</h5>',
                "facilitator": ""
            },
            {
                "date": "",
                "time": "9:00 - 10:00",
                "activity": '<p class="text-warning">Lecture 7 </p>',
                "facilitator": 'Moustapha Cisse<br> <b>Materials:</b> <a href="#">Slides</a>, <a href="#">Other References</p></a>'
            },
            {
                "date": "",
                "time": "10:00 - 10:30",
                "activity": "Break",
                "facilitator": ""
            },
            {
                "date": "",
                "time": "10:30 - 12:00",
                "activity": "Lecture 7 Practice Session",
                "facilitator": 'All facilitators <br> <b>Materials:</b> <a href="#">Code</a>, <a href="#">Dataset</p></a>'
            },
            {
                "date": "",
                "time": "",
                "activity": '<h5 class="text-center">SESSION 8 (Machine Learning)</h5>',
                "facilitator": ""
            },
            {
                "date": "",
                "time": "12:00 - 13:00",
                "activity": "Model Selection",
                "facilitator": "Ciira Maina"
            },
            {
                "date": "",
                "time": "13:00 - 14:00",
                "activity": "Lunch",
                "facilitator": ""
            },
            {
                "date": "",
                "time": "14:00 - 15:20",
                "activity": "Lecture 8 Practice Session",
                "facilitator": "All facilitators"
            },
            {
                "date": "",
                "time": "15:20 - 15:30",
                "activity": "Break",
                "facilitator": ""
            },
            {
                "date": "",
                "time": "",
                "activity": '<h5 class="text-center">SESSION 9 (Data Science)</h5>',
                "facilitator": ""
            },
            {
                "date": "",
                "time": "15:30 - 16:30",
                "activity": "Lecture 9",
                "facilitator": "IBM Research Nairobi"
            },
            {
                "date": "",
                "time": "16:30 - 18:00",
                "activity": "Lecture 9 Practice Session",
                "facilitator": "All facilitators"
            },
            {
                "date": "END",
                "time": "18:00 - 19:30",
                "activity": '<h4 class="text-center text-danger">Cocktail</h4>',
                "facilitator": "Prof. Barman"
            }
        ];
        $day3table.bootstrapTable({data: day3data});
    });


