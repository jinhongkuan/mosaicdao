// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; 
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol"; 
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol"; 

contract MosaicERC20 is ERC20, ERC20Permit, ERC20Votes {

    constructor() ERC20("MosaicERC20", "MOSAIC")
        ERC20Permit("MosaicERC20")
    {
        uint256 _totalSupply = 1e21; 
        _mint(msg.sender, _totalSupply);
    }

    function delegates(address account) 
        public
        view
        virtual
        override(ERC20Votes)
        returns (address)
    {
        return account;
    }

    function _afterTokenTransfer(address from, address to, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._burn(account, amount);
    }

}