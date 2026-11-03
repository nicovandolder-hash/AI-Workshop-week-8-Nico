from datetime import date, timedelta

from app.dates import days_left


def test_deadline_today_is_zero():
    assert days_left(date.today()) == 0


def test_deadline_tomorrow_is_one():
    assert days_left(date.today() + timedelta(days=1)) == 1


def test_deadline_yesterday_is_minus_one():
    assert days_left(date.today() - timedelta(days=1)) == -1


def test_deadline_in_a_week_is_seven():
    assert days_left(date.today() + timedelta(days=7)) == 7
