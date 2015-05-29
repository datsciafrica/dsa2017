# gpschool

Base site for a GP school or workshop.

Fork this repo under gpschool to create a new school or workshop.

Once you have fored the repo, perform the following actions:

1. Edit `_config.yaml` with the details of your new school (including location, organisers, title etc).

2. Edit `lectures.csv` in `_data/` with the days and timings of the lectures, those that are listed in `_config.yaml` will be automatically displayed.

3. After (or during the event) place slides in `assets` and add the links (and other links such as code or youtube) to `_data/lectures.csv`.

4. Copy from gpschool.github.io any further files of interest such as accommodation or getting there, or create such files from scratch. Each file should start with:
```
---
layout: page
title: Title
main: Y
---
```
  The `main: Y` ensures that the page will appear on the top level index. Omit it if you don't want that page to do so. 

