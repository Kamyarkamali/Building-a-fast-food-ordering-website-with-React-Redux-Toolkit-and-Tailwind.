const validate=(data,type)=>{
    const errors={};


    ///Email
    if(!data.email){
        errors.email="لطفا ایمیل را وارد کنید"
    }else if(! /\S+@\S+\.\S+/.test(data.email)){
        errors.email="ایمیل معتبر وارد کنید"
    } else{
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


    


    if(type==="singup"){
        ///Name
    if(!data.name.trim()){
        errors.name="وارد کردن اسم اجباری است"
    } else{
        delete errors.name
    }

    ///confirmPassword

    if(!data.confirmPassword){
        errors.confirmPassword="رمز عبور را مجددا تکرار کنید"
    } else if(data.confirmPassword!==data.password){
        errors.confirmPassword="پسوردها برابر نیستند"
    } else{
        delete errors.confirmPassword
    }

    if(data.isAcepted){
        delete errors.isAcepted
    } else{
        errors.isAcepted="شما قوانین زود فود را قبول نکرده اید"
    }

    }



    return errors
}

export default validate;