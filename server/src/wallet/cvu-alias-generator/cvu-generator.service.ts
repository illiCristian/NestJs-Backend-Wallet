import { Inject, Injectable, forwardRef } from '@nestjs/common';

import { WalletService } from 'src/wallet/wallet.service';
import { randomWords } from '../const/randomWords';

@Injectable()
export class CvuGeneratorService {
  constructor(
    @Inject(forwardRef(() => WalletService))
    private readonly walletService: WalletService,
  ) {}
  private usedCVUs: Set<string> = new Set<string>();

  async generateUniqueCVU(): Promise<string> {
    const cvuLength = 16;
    let cvu: string;

    do {
      cvu = this.generateCVU(cvuLength);
      const wallet = await this.walletService.getWalletByCvu(cvu);
      if (!wallet) {
        return cvu;
      }
    } while (true);
  }

  private generateCVU(length: number): string {
    let cvu = '';
    const prefix = '000000'; // Prefijo del mp
    for (let i = 0; i < length; i++) {
      cvu += Math.floor(Math.random() * 10);
    }
    return `${prefix}${cvu}`;
  }

  async generateUniqueAlias(): Promise<string> {
    const baseAlias = this.generateAlias();
    let alias = baseAlias;
    let counter = 1;

    while (true) {
      const wallet = await this.walletService.getWalletByAlias(alias);
      if (!wallet) {
        return alias;
      }

      alias = `${baseAlias}${counter}`;
      counter++;
    }
  }

  private generateAlias(): string {
    const selectedWords = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * randomWords.length);
      selectedWords.push(randomWords.splice(randomIndex, 1)[0]);
    }

    const alias = selectedWords.join('.');
    return alias;
  }
}
