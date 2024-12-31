// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateVerification {
    struct Certificate {
        string serialNumber;
        string hash;
        string dateIssued;
        bool isValid;
    }
    
    mapping(string => Certificate) public certificates;
    address public owner;
    
    constructor() {
        owner = msg.sender;
        
        // Initialize with the provided certificate hashes
        addCertificate("SN-2024-8F5A2C9B1", "632c543d186b2064a5c066045e41c8e8412229a993931f689fa44940d808a28d", "30/12/2024");
        addCertificate("SN-2024-C73D8E2A4", "c37146c4c4e4df68eaf59552a3db7ca0fb236c9ba064f4d990c49f0bdc4d212d", "30/12/2024");
        addCertificate("SN-2024-B9A3F72C5", "df06b67da7314893c32e548a7efcab567e01a2823d4a3dd3a8418b274572fe20", "30/12/2024");
        addCertificate("SN-2024-2A5C3B9E7", "ea13b237b4a1aebeab8f8f9402fb3f5aff79dd9c1a0f2d6b9a0cdfd9345aed9d", "30/12/2024");
        addCertificate("SN-2024-E2B7A9C3F", "to_be_added", "30/12/2024"); // Add the missing hash for the last serial number
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }
    
    function addCertificate(string memory _serialNumber, string memory _hash, string memory _dateIssued) public onlyOwner {
        certificates[_serialNumber] = Certificate({
            serialNumber: _serialNumber,
            hash: _hash,
            dateIssued: _dateIssued,
            isValid: true
        });
    }
    
    function verifyCertificate(string memory _serialNumber) public view returns (string memory, string memory) {
        Certificate memory cert = certificates[_serialNumber];
        
        if (cert.isValid) {
            return ("VALID", cert.dateIssued);
        }
        return ("NOT VALID", "");
    }
    
    function revokeCertificate(string memory _serialNumber) public onlyOwner {
        require(certificates[_serialNumber].isValid, "Certificate already invalid or doesn't exist");
        certificates[_serialNumber].isValid = false;
    }
}