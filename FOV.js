var GUI;
var checked = false;

function newLevel(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);

            var button = new android.widget.CheckBox(ctx);
            button.setText("FOV");
            button.setChecked(checked);
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    if(!checked){
						     ModPE.setFov(140);                        
						checked = true;
                    } else{
                        ModPE.resetFov();
                        checked = false;
                    }
                }
            }));
            layout.addView(button);

            GUI = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
            GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
        }catch(err){
            print("Err: " + err);
        }
    }}));
}

function leaveGame(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        if(GUI != null){
            GUI.dismiss();
            GUI = null;
            checked = false;
        }
    }}));
}