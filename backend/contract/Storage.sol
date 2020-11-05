pragma solidity ^0.4.18;

contract SimpleStorage {
    string name;
    string email;
    uint sem;
    uint SPI;
    uint year;

    function setname(string x) public {
        name = x;
    }

    function getname() constant public returns (string)  {
        return name;
    }
    function setemail(string x) public {
        email = x;
    }

    function getemail() constant public returns (string)  {
        return email;
    }
    function setyear(uint x) public {
        year = x;
    }
    function getyear() constant public returns (uint)  {
        return year;
    }
    function setsem(uint x) public {
        sem = x;
    }

    function getsem() constant public returns (uint)  {
        return sem;
    }
    function setSPI(uint x) public {
        SPI = x;
    }

    function getSPI() constant public returns (uint)  {
	   if(SPI>=0 && SPI<=10) return SPI;
    }


}
