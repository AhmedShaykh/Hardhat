// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Token is ERC20 {
    address public owner;

    constructor(uint256 initialSupply) ERC20("ACID X COIN", "AXC") {
        owner = msg.sender;
        _mint(owner, initialSupply * (10 ** decimals()));
    }

    function decimals() public pure override returns (uint8) {
        return 18; // 1000000000000000000 = 1 AXC Token
    }
}
