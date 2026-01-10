import { TennisGame } from './TennisGame';

export class TennisGame2 implements TennisGame {
  
  P1res: string = '';
  P2res: string = '';
  
  private player1Name: string;
  private player2Name: string;
  
  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }
  
  player1Point: number = 0;
  player2Point: number = 0;
  getScore(): string {
    let score: string = '';
    if(this.player1Point === this.player2Point) return this.getScoreWhenPlayersScoreAreEqual();
    if (this.player1Point > 0 && this.player2Point === 0) {
     this.P1res = this.getScoreBasedOnPlayerPoint(this.player1Point);
      this.P2res = this.getScoreBasedOnPlayerPoint(this.player2Point);
      score = this.P1res + '-' + this.P2res;
    }
    if (this.player2Point > 0 && this.player1Point === 0) {
      this.P2res = this.getScoreBasedOnPlayerPoint(this.player2Point);
      this.P1res = this.getScoreBasedOnPlayerPoint(this.player1Point);
      score = this.P1res + '-' + this.P2res;
    }

    if (this.player1Point > this.player2Point && this.player1Point < 4) {
      this.P1res = this.getScoreBasedOnPlayerPoint(this.player1Point);
      this.P2res = this.getScoreBasedOnPlayerPoint(this.player2Point);
      score = this.P1res + '-' + this.P2res;
    }
    if (this.player2Point > this.player1Point && this.player2Point < 4) {
      this.P2res = this.getScoreBasedOnPlayerPoint(this.player2Point);
      this.P1res = this.getScoreBasedOnPlayerPoint(this.player1Point);
      score = this.P1res + '-' + this.P2res;
    }

    if (this.player1Point > this.player2Point && this.player2Point >= 3) {
      score = 'Advantage player1';
    }

    if (this.player2Point > this.player1Point && this.player1Point >= 3) {
      score = 'Advantage player2';
    }

    if (this.player1Point >= 4 && this.player2Point >= 0 && (this.player1Point - this.player2Point) >= 2) {
      score = 'Win for player1';
    }
    if (this.player2Point >= 4 && this.player1Point >= 0 && (this.player2Point - this.player1Point) >= 2) {
      score = 'Win for player2';
    }
    return score;
  }
  private getScoreWhenPlayersScoreAreEqual(): string {
    switch (this.player1Point) {
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

    private getScoreBasedOnPlayerPoint(point: number): string {
    switch (point) {
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

  wonPoint(playerName: string): void {
    if (playerName === this.player1Name)
    {
      this.player1Point++;
      return
    }
    if (playerName === this.player2Name)
    {
      this.player2Point++;
      return
    }
    throw new Error(`Unknown player : ${playerName}`);
  }
}
