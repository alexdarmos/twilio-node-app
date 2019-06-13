function SmsService() {


    return $q(function(resolve, reject) {
        return $http({
            url: '/sms',
            method: 'POST',
            dataType: 'json',
            data: {
                phoneNumber: '+12692521349'
            }
        }).then( (response) => {
            console.log(response.message)
        }).catch( (err) => {
            console.log(err);
        })
    })
}

angular.module("SmsApp")
.service("SmsService", [SmsService]);