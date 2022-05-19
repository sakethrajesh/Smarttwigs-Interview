from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=300)
    wins = models.IntegerField()
    cumulativeWinScore = models.IntegerField()

class Game(models.Model):
    # all should inherit respnses from user model
    # player1 = 
    # player2 = 
    # server =
    # winner = 
    created = models.DateTimeField(auto_now_add=True)
