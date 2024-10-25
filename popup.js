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
}
var a=document.getElementById("link");
a.href="somelink url";
wallet.sendTra