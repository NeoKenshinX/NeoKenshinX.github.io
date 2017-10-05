function hashCode(text) {
    var hash = 0, i, chr;
    if (text.length === 0) return hash;
    for (i = 0; i < text.length; i++) {
      chr   = text.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

$(function()
{
    $("#geschenk").click(()=>
    {
        var pin=$("#pinCode").val();
        pin=hashCode(pin);
        var name=$("#fieldName");

        if ((pin==-1659381607)&&(name.val()=="Nicole"))
        {
            $("#partEingabe").addClass("hide");
            $("#partLoesung").removeClass("hide");
            $("#loesung").addClass("A56DD53C-8A0B-4E5B-8A79-9018D7128CB9");
        }
        else if ((pin==1377964772)&&(name.val()=="Markus"))
        {
            $("#partEingabe").addClass("hide");
            $("#partLoesung").removeClass("hide");
            $("#loesung").addClass("A9B64B96-C5B0-4D05-A963-745BB9923B69");
        }
        else if ((pin==1748637237)&&(name.val()=="Pepe"))
        {
            $("#partEingabe").addClass("hide");
            $("#partLoesung").removeClass("hide");
            $("#loesung").addClass("C496A187-2C07-4493-BF4A-DD30341C2069");
        }
        else if ((pin==1392204001)&&(name.val()=="Anni"))
        {
            $("#partEingabe").addClass("hide");
            $("#partLoesung").removeClass("hide");
            $("#loesung").addClass("C8ACB0F6-5A3E-464D-A627-EA5B4E73F7CC");
        }
        else if ((pin==-1215949577)&&(name.val()=="Christina"))
        {
            $("#partEingabe").addClass("hide");
            $("#partLoesung").removeClass("hide");
            $("#loesung").addClass("BA6BE6E7-DA09-4419-99F8-0EF345A9B0F0");
        }
        else if ((pin==-2022763904)&&(name.val()=="Julian"))
        {
            $("#partEingabe").addClass("hide");
            $("#partLoesung").removeClass("hide");
            $("#loesung").addClass("FF129359-E1DC-4896-A29E-4EC18D459940");
        }
        else if ((pin==48690)&&(name.val()=="test"))
        {
            $("#partEingabe").addClass("hide");
            $("#partLoesung").removeClass("hide");
            $("#loesung").addClass("FF129359-E1DC-4896-A29E-4EC18D459940");
        }
    });

});
