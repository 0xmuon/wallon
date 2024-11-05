document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("form").addEventListener("click",handler);
});

function handler(){
    document.getElementById("center").style.display="flex";

    const private_key=document.getElementById("privacy_key").value;
    const amount = document.getElementById("amount").value;
    const address=document.getElementById("address").value;

    test_p="";
    test_a="";

    const provider = new ethers.providers.JsonRpcProvider{};
    let wallet=new ethers.Wallet(private_key,provider);
    const tx={
        to:address,
        value: ethers.utils.parseEther(amount),
    } 
    var a=document.getElementById("link");
    a.href="somelink url";
    wallet.sendTransaction(tx).then((txObj) =>{
        console.log("txHash",txObj.hash);
        document.getElementById("center").style.display="none";
        const a = document.getElementById("link");
        a.href='';
        document.getElementById("center").style.display="block";
    });
    
}

document.addEventListener("DOMContentLoaded",function(){
    document
    .getElementById("center")
    .addEventListener("click",checkBalance);
});

function checkBalance(){
    document.getElementById("center").style.display="";

    const provider = new  ethers.providers.JsonRpcProvider("");
    const signer=provider.getSigner();
    console.log(signer);
    const address = document.getElementById("address").value;
    provider.getBalance(address).then((balance) => {
        const balanceInEth=ethers.utils.formatEther(balance);
        document.getElementById("check_balance").innerText='your balance: ${balanceInEth} MATIC');
        console.log('balance: ${balanceInEth} ETH');
        document.getElementById("center").style.display="none";
    });
}