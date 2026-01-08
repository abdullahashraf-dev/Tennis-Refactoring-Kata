import { TennisGame } from './TennisGame';

export class TennisGame1 implements TennisGame {
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  private m_score1: number = 0;
  private m_score2: number = 0;
  wonPoint(playerName: string): void {
    if (playerName === this.player1Name)
    {
      this.m_score1 += 1;
      return
    }
      this.m_score2 += 1;
  }

  getScore(): string {
    if (this.m_score1 === this.m_score2) {
     return this.getScoreWhenPlayersScoreAreEqual();
    }
    else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
      return this.getScoreWhenOnePlayerScoreAtLeastFourPoints();
    }
    return this.getScoreWhenPlayersScoreLessThanFourPointsAndNotEqual();
  }

  private getScoreWhenPlayersScoreAreEqual(): string {
    switch (this.m_score1) {
        case 0:
          return 'Love-All';
        case 1:
          return 'Fifteen-All';
        case 2:
          return 'Thirty-All';
        default:
          return 'Deuce';
      }
  }

  private getScoreWhenOnePlayerScoreAtLeastFourPoints(): string {
     const minusResult: number = this.m_score1 - this.m_score2;
     if(minusResult === 1) return 'Advantage player1';
     if(minusResult === -1) return 'Advantage player2';
     if(minusResult >= 2) return 'Win for player1';
     return 'Win for player2';
  }

  private getScoreWhenPlayersScoreLessThanFourPointsAndNotEqual(): string {
    let score: string = '';
    score+= this.getScoreBasedOnPlayerScore(this.m_score1);

    score += '-';
    score+= this.getScoreBasedOnPlayerScore(this.m_score2);
    return score;
  }
  private getScoreBasedOnPlayerScore(score: number): string {
    switch (score) {
      case 0:
        return 'Love';
      case 1:
        return 'Fifteen';
      case 2:
        return 'Thirty';
      default:
        return 'Forty';
    }
  }

}
