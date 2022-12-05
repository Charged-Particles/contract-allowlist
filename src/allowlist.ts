interface AllowList {
  [network: number]: {
    [contractAddress: string]: {
      address: string,
      name: string,
    }
  }
}

export const allowlist: AllowList = {
  // Mainnet
  1: {
    ['0xB66a603f4cFe17e3D27B87a8BfCaD319856518B8'.toLowerCase()]: {
      address: '0xB66a603f4cFe17e3D27B87a8BfCaD319856518B8'.toLowerCase(),
      name: 'Rarible ERC1155'
    },
    ['0x60f80121c31a0d46b5279700f9df786054aa5ee5'.toLowerCase()]: {
      address: '0x60f80121c31a0d46b5279700f9df786054aa5ee5'.toLowerCase(),
      name: 'Rarible Collection'
    },
    ['0xd07dc4262bcdbf85190c01c996b4c06a461d2430'.toLowerCase()]: {
      address: '0xd07dc4262bcdbf85190c01c996b4c06a461d2430'.toLowerCase(),
      name: 'Rarible - RARI'
    },
    ['0xdfe3ac769b2d8e382cb86143e0b0b497e1ed5447'.toLowerCase()]: {
      address: '0xdfe3ac769b2d8e382cb86143e0b0b497e1ed5447'.toLowerCase(),
      name: 'THE PLUTO ALLIANCE'
    },
    ['0xcd2ba94e435e536dc48648eab2f4f1db257bc64c'.toLowerCase()]: {
      address: '0xcd2ba94e435e536dc48648eab2f4f1db257bc64c'.toLowerCase(),
      name: 'Particlon: Genesis'
    },
    ['0x3cd2410eaa9c2dce50af6ccab72dc93879a09c1f'.toLowerCase()]: {
      address: '0x3cd2410eaa9c2dce50af6ccab72dc93879a09c1f'.toLowerCase(),
      name: 'Lepton 2'
    },
    ['0x929167191ca41a4753eda357bb6e5ad6f15fb89b'.toLowerCase()]: {
      address: '0x929167191ca41a4753eda357bb6e5ad6f15fb89b'.toLowerCase(),
      name: 'Trism Originals'
    },
    ['0xd86898728aa9921101515a38b7d15d16c682e8ce'.toLowerCase()]: {
      address: '0xd86898728aa9921101515a38b7d15d16c682e8ce'.toLowerCase(),
      name: 'Trism Vaults'
    },
    ['0xc0cb81c1f89ab0873653f67eea42652f13cd8416'.toLowerCase()]: {
      address: '0xc0cb81c1f89ab0873653f67eea42652f13cd8416'.toLowerCase(),
      name: 'Lobby Lobsters'
    },
    ['0x2D92C4f9F75308d0b9b098B142369032E4f901Ff'.toLowerCase()]: {
      address: '0x2D92C4f9F75308d0b9b098B142369032E4f901Ff'.toLowerCase(),
      name: 'Floor Gen 3'
    },
    ['0xCcc441ac31f02cD96C153DB6fd5Fe0a2F4e6A68d'.toLowerCase()]: {
      address: '0xCcc441ac31f02cD96C153DB6fd5Fe0a2F4e6A68d'.toLowerCase(),
      name: 'FLUF'
    },
    ['0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D'.toLowerCase()]: {
      address: '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D'.toLowerCase(),
      name: 'Bored Apes'
    },
    ['0x60E4d786628Fea6478F785A6d7e704777c86a7c6'.toLowerCase()]: {
      address: '0x60E4d786628Fea6478F785A6d7e704777c86a7c6'.toLowerCase(),
      name: 'Mutant Apes'
    },
    ['0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e'.toLowerCase()]: {
      address: '0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e'.toLowerCase(),
      name: 'Doodle'
    },
    ['0x23581767a106ae21c074b2276D25e5C3e136a68b'.toLowerCase()]: {
      address: '0x23581767a106ae21c074b2276D25e5C3e136a68b'.toLowerCase(),
      name: 'MoonBirds'
    },
    ['0xD2A077Ec359D94E0A0b7E84435eaCB40A67a817c'.toLowerCase()]: {
      address: '0xD2A077Ec359D94E0A0b7E84435eaCB40A67a817c'.toLowerCase(),
      name: 'Admit One'
    },
    ['0x1cBB182322Aee8ce9F4F1f98d7460173ee30Af1F'.toLowerCase()]: {
      address: '0x1cBB182322Aee8ce9F4F1f98d7460173ee30Af1F'.toLowerCase(),
      name: 'Polymorph'
    },
    ['0x76236B6f13F687D0bbeDbbCe0e30e9F07d071C1C'.toLowerCase()]: {
      address: '0x76236B6f13F687D0bbeDbbCe0e30e9F07d071C1C'.toLowerCase(),
      name: 'RealVision Pro'
    },
    ['0xc36cb218848F173148ff55f4dfC18f1540FB7475'.toLowerCase()]: {
      address: '0xc36cb218848F173148ff55f4dfC18f1540FB7475'.toLowerCase(),
      name: 'Blue Chips'
    },
    ['0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03'.toLowerCase()]: {
      address: '0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03'.toLowerCase(),
      name: 'Nouns'
    },
    ['0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b'.toLowerCase()]: {
      address: '0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b'.toLowerCase(),
      name: 'Lil Nuons'
    },
    ['0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756'.toLowerCase()]: {
      address: '0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756'.toLowerCase(),
      name: 'Makersplace v2'
    },
    ['0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258'.toLowerCase()]: {
      address: '0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258'.toLowerCase(),
      name: 'Otherdeed'
    },
    ['0xed5af388653567af2f388e6224dc7c4b3241c544'.toLowerCase()]: {
      address: '0xed5af388653567af2f388e6224dc7c4b3241c544'.toLowerCase(),
      name: 'Azuki'
    },
    ['0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b'.toLowerCase()]: {
      address: '0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b'.toLowerCase(),
      name: 'Clone X'
    },
    ['0x7bd29408f11d2bfc23c34f18275bbf23bb716bc7'.toLowerCase()]: {
      address: '0x7bd29408f11d2bfc23c34f18275bbf23bb716bc7'.toLowerCase(),
      name: 'Meebits'
    },
    ['0xba30e5f9bb24caa003e9f2f0497ad287fdf95623'.toLowerCase()]: {
      address: '0xba30e5f9bb24caa003e9f2f0497ad287fdf95623'.toLowerCase(),
      name: 'Bored Ape Kennel Club'
    },
    ['0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7'.toLowerCase()]: {
      address: '0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7'.toLowerCase(),
      name: 'Loot'
    },
    ['0xe785e82358879f061bc3dcac6f0444462d4b5330'.toLowerCase()]: {
      address: '0xe785e82358879f061bc3dcac6f0444462d4b5330'.toLowerCase(),
      name: 'World Of Women'
    },
    ['0x1cb1a5e65610aeff2551a50f76a87a7d3fb649c6'.toLowerCase()]: {
      address: '0x1cb1a5e65610aeff2551a50f76a87a7d3fb649c6'.toLowerCase(),
      name: 'Cryptoadz'
    },
    ['0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949'.toLowerCase()]: {
      address: '0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949'.toLowerCase(),
      name: 'Beanz'
    },
    ['0x4db1f25d3d98600140dfc18deb7515be5bd293af'.toLowerCase()]: {
      address: '0x4db1f25d3d98600140dfc18deb7515be5bd293af'.toLowerCase(),
      name: 'Hape Prime'
    },
    ['0xa3aee8bce55beea1951ef834b99f3ac60d1abeeb'.toLowerCase()]: {
      address: '0xa3aee8bce55beea1951ef834b99f3ac60d1abeeb'.toLowerCase(),
      name: 'Veefriends'
    },
    ['0xbd3531da5cf5857e7cfaa92426877b022e612cf8'.toLowerCase()]: {
      address: '0xbd3531da5cf5857e7cfaa92426877b022e612cf8'.toLowerCase(),
      name: 'Pudgy Penguins'
    },
    ['0x629a673a8242c2ac4b7b8c5d8735fbeac21a6205'.toLowerCase()]: {
      address: '0x629a673a8242c2ac4b7b8c5d8735fbeac21a6205'.toLowerCase(),
      name: 'Sorare'
    },
    ['0xbd4455da5929d5639ee098abfaa3241e9ae111af'.toLowerCase()]: {
      address: '0xbd4455da5929d5639ee098abfaa3241e9ae111af'.toLowerCase(),
      name: 'NFT Worlds'
    },
    ['0x9a534628b4062e123ce7ee2222ec20b86e16ca8f'.toLowerCase()]: {
      address: '0x9a534628b4062e123ce7ee2222ec20b86e16ca8f'.toLowerCase(),
      name: 'Mekaverse'
    },
    ['0x7d8820fa92eb1584636f4f5b8515b5476b75171a'.toLowerCase()]: {
      address: '0x7d8820fa92eb1584636f4f5b8515b5476b75171a'.toLowerCase(),
      name: 'Murakami flowers'
    },
    ['0x4f89cd0cae1e54d98db6a80150a824a533502eea'.toLowerCase()]: {
      address: '0x4f89cd0cae1e54d98db6a80150a824a533502eea'.toLowerCase(),
      name: 'Peaceful Groupies'
    },
    ['0x59468516a8259058bad1ca5f8f4bff190d30e066'.toLowerCase()]: {
      address: '0x59468516a8259058bad1ca5f8f4bff190d30e066'.toLowerCase(),
      name: 'Invisible Friends'
    },
    ['0xc2c747e0f7004f9e8817db2ca4997657a7746928'.toLowerCase()]: {
      address: '0xc2c747e0f7004f9e8817db2ca4997657a7746928'.toLowerCase(),
      name: 'Hashmasks'
    },
    ['0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e'.toLowerCase()]: {
      address: '0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e'.toLowerCase(),
      name: 'Goblintown'
    },
    ['0x79fcdef22feed20eddacbb2587640e45491b757f'.toLowerCase()]: {
      address: '0x79fcdef22feed20eddacbb2587640e45491b757f'.toLowerCase(),
      name: 'Mfers'
    },
    ['0xc92ceddfb8dd984a89fb494c376f9a48b999aafc'.toLowerCase()]: {
      address: '0xc92ceddfb8dd984a89fb494c376f9a48b999aafc'.toLowerCase(),
      name: 'Creature World'
    },
    ['0xb4d06d46a8285f4ec79fd294f78a881799d8ced9'.toLowerCase()]: {
      address: '0xb4d06d46a8285f4ec79fd294f78a881799d8ced9'.toLowerCase(),
      name: '3landers'
    },
    ['0x892848074ddea461a15f337250da3ce55580ca85'.toLowerCase()]: {
      address: '0x892848074ddea461a15f337250da3ce55580ca85'.toLowerCase(),
      name: 'Cyberbrokers'
    },
    ['0x57a204aa1042f6e66dd7730813f4024114d74f37'.toLowerCase()]: {
      address: '0x57a204aa1042f6e66dd7730813f4024114d74f37'.toLowerCase(),
      name: 'Cyberkongz'
    },
    ['0x4b3406a41399c7fd2ba65cbc93697ad9e7ea61e5'.toLowerCase()]: {
      address: '0x4b3406a41399c7fd2ba65cbc93697ad9e7ea61e5'.toLowerCase(),
      name: 'Lost Poets'
    },
    ['0x86c10d10eca1fca9daf87a279abccabe0063f247'.toLowerCase()]: {
      address: '0x86c10d10eca1fca9daf87a279abccabe0063f247'.toLowerCase(),
      name: 'Cool Pets'
    },
    ['0x8943c7bac1914c9a7aba750bf2b6b09fd21037e0'.toLowerCase()]: {
      address: '0x8943c7bac1914c9a7aba750bf2b6b09fd21037e0'.toLowerCase(),
      name: 'Lazy Lions'
    },
    ['0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0'.toLowerCase()]: {
      address: '0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0'.toLowerCase(),
      name: 'SuperRare'
    },
    ['0xabb3738f04dc2ec20f4ae4462c3d069d02ae045b'.toLowerCase()]: {
      address: '0xabb3738f04dc2ec20f4ae4462c3d069d02ae045b'.toLowerCase(),
      name: 'KnownOrigin'
    },
    ['0x79986af15539de2db9a5086382daeda917a9cf0c'.toLowerCase()]: {
      address: '0x79986af15539de2db9a5086382daeda917a9cf0c'.toLowerCase(),
      name: 'Voxels'
    },
    ['0xe6A5e67F92CC6219E9c210f2734A6175Ee4eE6D1'.toLowerCase()]: {
      address: '0xe6A5e67F92CC6219E9c210f2734A6175Ee4eE6D1'.toLowerCase(),
      name: 'Moda Dropcase NFT'
    },
  },

  // Goerli
  5: {
    ['0x894fe586f4be12cdb5d107323a2f5182161c3515'.toLowerCase()]: {
      address: '0x894fe586f4be12cdb5d107323a2f5182161c3515'.toLowerCase(),
      name: 'Proton B',
    }
  },

  // Kovan
  42: {
    ['0xef815ad5401cee4b8b2e6bc2f8c481d84e5d0871'.toLowerCase()]: {
      address: '0xef815ad5401cee4b8b2e6bc2f8c481d84e5d0871'.toLowerCase(),
      name: 'External NFT Example Contract - Kovan'
    }
  },

  // Polygon
  137: {
    ['0x4ED360c8725D3A63F564f8484A582D0a7CecEa7a'.toLowerCase()]: {
      address: '0x4ED360c8725D3A63F564f8484A582D0a7CecEa7a'.toLowerCase(),
      name: 'Lepton 2'
    },
    ['0xe2a9b15e283456894246499fb912cce717f83319'.toLowerCase()]: {
      address: '0xe2a9b15e283456894246499fb912cce717f83319'.toLowerCase(),
      name: 'Proton'
    },
    ['0x1CeFb0E1EC36c7971bed1D64291fc16a145F35DC'.toLowerCase()]: {
      address: '0x1CeFb0E1EC36c7971bed1D64291fc16a145F35DC'.toLowerCase(),
      name: 'Proton B'
    },
    ['0x9d305a42a3975ee4c1c57555bed5919889dce63f'.toLowerCase()]: {
      address: '0x9d305a42a3975ee4c1c57555bed5919889dce63f'.toLowerCase(),
      name: 'Sandbox Land'
    },
    ['0x28BFEFd2FDc109527D9d5e459417b12a8eF3AC0B'.toLowerCase()]: {
      address: '0x28BFEFd2FDc109527D9d5e459417b12a8eF3AC0B'.toLowerCase(),
      name: 'Moda Dropcase NFT'
    },
    ['0x96c89cc7c5d2fbfa41afa10da5917742ff35941b'.toLowerCase()]: {
      address: '0x96c89cc7c5d2fbfa41afa10da5917742ff35941b'.toLowerCase(),
      name: 'Elder ENTS'
    },
    ['0x135de69e2c8a6f14f00dcf9c9e8d8120fbebef5a'.toLowerCase()]: {
      address: '0x135de69e2c8a6f14f00dcf9c9e8d8120fbebef5a'.toLowerCase(),
      name: 'HMNZone'
    },
    ['0x4bf5a99ea2f8de061f7d77ba9edd749503d945da'.toLowerCase()]: {
      address: '0x4bf5a99ea2f8de061f7d77ba9edd749503d945da'.toLowerCase(),
      name: 'FlexiPunkTLD'
    },
  },

  // Mumbai
  80001: {
    ['0xbc7895fa82a2e5c575b8105f62d2e57d53b6e75c'.toLowerCase()]: {
      address: '0xbc7895fa82a2e5c575b8105f62d2e57d53b6e75c'.toLowerCase(),
      name: 'External NFT Example Contract - Mumbai'
    }
  }
}