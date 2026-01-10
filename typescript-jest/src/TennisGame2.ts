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
    if(this.player1Point === this.player2Point) return this.getScoreWhenPlayersScoreAreEqual();
    if (this.player1Point < 4 && this.player2Point < 4) return this.getScoreWhenBothPlayersPointsLessThanFour();
    return this.getScoreWhenOnePlayerPointAtLeastFour();
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

  private getScoreWhenBothPlayersPointsLessThanFour(): string {
     this.P1res = this.getScoreBasedOnPlayerPoint(this.player1Point);
      this.P2res = this.getScoreBasedOnPlayerPoint(this.player2Point);
      return this.P1res + '-' + this.P2res;
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

    private getScoreWhenOnePlayerPointAtLeastFour(): string {
     const minusResult: number = this.player1Point - this.player2Point;
     if(minusResult === 1) return 'Advantage player1';
     if(minusResult === -1) return 'Advantage player2';
     if(minusResult >= 2) return 'Win for player1';
     return 'Win for player2';
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
