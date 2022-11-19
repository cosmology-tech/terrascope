import { join } from 'path';
import telescope from '@osmonauts/telescope';
import { sync as rimraf } from 'rimraf';
import { AMINO_MAP } from './aminos';

const protoDirs = [
  join(__dirname, '/../terrad/proto'),
  join(__dirname, '/../terrad/third_party/proto')
];
const outPath = join(__dirname, '../src/codegen');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  logLevel: 0,
  useSDKTypes: false,
  tsDisable: {
    disableAll: false
  },
  eslintDisable: {
    disableAll: true
  },
  prototypes: {
    includePackageVar: true,
    methods: {
      fromJSON: true,
      toJSON: true
    },
    typingsFormat: {
      useDeepPartial: false,
      useExact: false,
      timestamp: 'timestamp',
      duration: 'duration'
    }
  },
  stargateClients: {
    includeCosmosDefaultTypes: false
  },
  lcdClients: {
    enabled: false
  },
  rpcClients: {
    enabled: true,
    inline: true,
    extensions: false,
    camelCase: false,
    enabledServices: [
      'Msg',
      'Query',
      'Service',
      'ReflectionService',
      'ABCIApplication'
    ]
  },
  aminoEncoding: {
    enabled: true,
    AMINO_MAP
  }
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
