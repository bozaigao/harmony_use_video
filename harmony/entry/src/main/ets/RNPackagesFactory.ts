import type {RNPackageContext, RNPackage} from 'rnoh/ts';
import { RNCVideoPackage } from 'rn_video/ts';

export function createRNPackages(ctx: RNPackageContext): RNPackage[] {
  return [new RNCVideoPackage(ctx)];
}
