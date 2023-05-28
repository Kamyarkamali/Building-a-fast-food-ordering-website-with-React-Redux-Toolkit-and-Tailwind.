const validate=(data)=>{
    const errors={};
///Name
    if(!data.name.trim()){
        errors.name="وارد کردن اسم اجباری است"
    } else{
        delete errors.name
    }

    ///Email
    if(!data.email){
        errors.email="لطفا ایمیل را وارد کنید"
    }else {
        delete errors.email
    }

    ///Password
    if(!data.password){
        errors.password="نوشتن رمز عبور الزامی است"
    }else if(data.password.length <6){
        errors.password="رمز عبور نباید کمتر از6 کارکتر باشد"
    }else{
        delete errors.password
    }


    ///confirmPassword

    if(!data.confirmPassword){
        errors.confirmPassword="رمز عبور را مجددا تکرار کنید"
    } else if(data.confirmPassword!==data.password){
        errors.confirmPassword="پسوردها برابر نیستند"
    } else{
        delete errors.confirmPassword
    }

    //isAcepted
    if(data.isAcepted){
        delete errors.isAcepted
    } else{
        errors.isAcepted="شما قوانین زود فود را قبول نکرده اید"
    }
    return errors
}