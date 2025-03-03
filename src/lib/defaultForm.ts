import {
  PressureUnit,
  SpringRateUnit,
  LengthUnit,
  Upgrade,
  LimitedUpgrade,
  FullUpgrade,
  TransmissionUpgrade,
  TireCompound,
  RimStyleType,
  DriveType,
  TrackWidthType,
  ForceUnit,
  PIClass,
  SettingsForm,
  RestrictorUpgrade,
  TurboUpgrade,
} from './types';

export default function getDefaultForm(): SettingsForm {
  return {
    make: '',
    model: '',
    tune: {
      tires: {
        front: '2',
        rear: '2',
        units: PressureUnit.bar,
      },
      gears: {
        ratios: ['', '', '', '', '', '', '', '', '', '', ''],
        na: false,
      },
      camber: {
        front: '-1',
        rear: '-1',
      },
      toe: {
        front: '0',
        rear: '0',
      },
      caster: '5',
      arb: {
        front: '',
        rear: '',
        na: false,
      },
      springs: {
        front: '',
        rear: '',
        units: SpringRateUnit.kgf,
        na: false,
      },
      rideHeight: {
        front: '',
        rear: '',
        units: LengthUnit.cm,
        na: false,
      },
      damping: {
        front: '',
        rear: '',
        na: false,
      },
      bump: {
        front: '',
        rear: '',
        na: false,
      },
      aero: {
        front: '',
        rear: '',
        units: ForceUnit.kgf,
        na: false,
      },
      brake: {
        na: false,
        bias: '50',
        pressure: '100',
      },
      diff: {
        front: {
          accel: '',
          decel: '',
        },
        rear: {
          accel: '',
          decel: '',
        },
        center: '50',
        na: false,
      },
    },
    build: {
      conversions: {
        engine: 'Stock',
        drivetrain: DriveType.awd,
        aspiration: 'Stock',
        bodyKit: '',
      },
      engine: {
        intake: Upgrade.stock,
        intakeManifold: Upgrade.na,
        carburator: Upgrade.na,
        fuelSystem: Upgrade.stock,
        ignition: Upgrade.stock,
        exhaust: Upgrade.stock,
        camshaft: Upgrade.stock,
        valves: Upgrade.stock,
        displacement: Upgrade.stock,
        pistons: Upgrade.stock,
        turbo: TurboUpgrade.na,
        twinTurbo: TurboUpgrade.na,
        supercharger: LimitedUpgrade.na,
        centrifugalSupercharger: LimitedUpgrade.na,
        intercooler: LimitedUpgrade.stock,
        oilCooling: Upgrade.stock,
        flywheel: Upgrade.stock,
        restrictorPlate: RestrictorUpgrade.na,
      },
      platformAndHandling: {
        brakes: Upgrade.stock,
        springs: FullUpgrade.race,
        frontArb: Upgrade.race,
        rearArb: Upgrade.race,
        chassisReinforcement: Upgrade.stock,
        weightReduction: Upgrade.stock,
      },
      drivetrain: {
        clutch: Upgrade.stock,
        transmission: TransmissionUpgrade.stock,
        driveline: Upgrade.stock,
        differential: FullUpgrade.race,
      },
      tiresAndRims: {
        compound: TireCompound.stock,
        width: {
          front: 'Stock',
          rear: 'Stock',
        },
        rimStyle: {
          type: RimStyleType.stock,
          name: '',
        },
        rimSize: {
          front: 'Stock',
          rear: 'Stock',
        },
        trackWidth: {
          front: TrackWidthType.stock,
          rear: TrackWidthType.stock,
        },
        profileSize: {
          front: TrackWidthType.stock,
          rear: TrackWidthType.stock,
        },
      },
      aeroAndAppearance: {
        frontBumper: 'Stock',
        rearBumper: 'N/A',
        rearWing: 'Stock',
        sideSkirts: 'N/A',
        hood: 'N/A',
      },
    },
    stats: {
      pi: 800,
      classification: PIClass.A,
      hp: 0,
      torque: 0,
      weight: 0,
      balance: 0,
      topSpeed: 0,
      zeroToSixty: 0,
      zeroToHundred: 0,
      shareCode: '',
    },
  };
}
