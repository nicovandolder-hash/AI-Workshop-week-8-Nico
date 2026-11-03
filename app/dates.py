from datetime import date


def days_left(deadline: date) -> int:
    """Return how many calendar days are left until the deadline.

    0 means the deadline is today, 1 means tomorrow, -1 means yesterday.
    The time of day doesn't matter, only the date.
    """
    return (deadline - date.today()).days
