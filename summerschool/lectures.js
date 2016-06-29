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
                "facilitator": 'Neil Lawrence <br> <b>Materials:</b> <a href="http://inverseprobability.com/mlai2015/">Reference materials</p></a>'
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
                "facilitator": "All facilitators"
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
                "time": "15:30 - 16:00",
                "activity": "Lecture 3A: Working with spatial data",
                "facilitator": "Ricardo Andrade"
            },
            {
                "date": "",
                "time": "16:00 - 16:30",
                "activity": "Lecture 3B: From raw data to meaningful features",
                "facilitator": "Andreas Damianou <br> <b>Materials:</b> <a href='http://adamian.github.io/talks/Kampala_DSA_Features_lecture.pdf'>Slides</a>, <a href='http://adamian.github.io/talks/Kampala_DSA_features.ipynb'>Lab</a>"
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
                "activity": '<p class="text-warning">Lecture 4 : Cleaning and mapping data with Pandas & GeoPandas </p>',
                "facilitator": "Martin Mubangizi"
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
                "facilitator": 'All facilitators <br> <b>Materials:</b> <a href="/downloads/Martin-DSA2016Presentation1.ipynb">Notebook</a>, <a href="/downloads/data-martin.zip">Data</p></a>'
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
                "activity": 'Lecture 5: Classification Continued<br><a href="slides-classification-part2">Slides</a>',
                "facilitator": 'John Quinn'
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
                "activity": 'Classification Practice Session: Malaria detection.',
                "facilitator": 'All facilitators<br><b>Materials:</b> <a href="downloads/Malaria classification example.ipynb">Code</a>, <a href="downloads/malaria-classification-example.npz">Dataset</p></a>'
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
                "activity": '<p class="text-warning">Lecture 6: Data Exploration and Visualization</p>'
                "facilitator": "Ernest Mwebaze"
            },
            {
                "date": "",
                "time": "16:30 - 18:00",
                "activity": "Lecture 6 Practice Session",
                "facilitator": 'All facilitators <br> <b>Materials:</b> <a href="downloads/Data Exploration materials.zip">Notebook & Code</a>'
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
                "activity": '<p class="text-warning">Lecture 7: Text Mining  </p>',
                "facilitator": "Fred Kiwanuka"
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
                "facilitator": 'All facilitators <br> <b>Materials:</b> <a href="downloads/Fred-UgElections.ipynb">Code</a>, <a href="downloads/data-Fred.zip">Dataset</p></a>'
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
                "facilitator": 'All facilitators <br> <b>Materials:</b> <a href="downloads/Ciira-model_selection.ipynb">Notebook</a>'
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


