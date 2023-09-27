exports.forgotPassword = function (req, res) {
  var input = JSON.parse(JSON.stringify(req.body));

  var error_msg = "";
  if (!input.email || input.email == null) {
    error_msg = "Please provide valid E-mail Address.";
  }
  if (error_msg != "") {
    return res.send(
      JSON.stringify({
        status: failStatus,
        message: error_msg,
      })
    );
  } else {
    var userData = {
      email: input.email,
    };

    var responseArr = {};
    Users.checkEmailExist(userData, function (result) {
      if (result[0].count && result[0].count > 0) {
        updateData = {
          reset_password_code: randomstring.generate(10),
          email: input.email,
        };
        Users.updateData(updateData, function (updateResult) {
          if (updateResult) {
            Users.getUserByEmail(input.email, function (userDetail) {
              // Send mail to user
              var mailData = {
                receiver_id: userDetail[0].id,
                template_slug: "forgot-password",
              };
              Mails.SendMail(mailData);
              responseArr.user_id = userDetail.id;
              // Save Business profile
              return res.send(
                JSON.stringify({
                  status: successStatus,
                  message:
                    "Reset password link is sent to your email. Please check.",
                  data: responseArr,
                })
              );
            });
          } else {
            return res.send(
              JSON.stringify({
                status: failStatus,
                message: "Data could  not updated. Please try again.",
                data: "{}",
              })
            );
          }
        });
      } else {
        return res.send(
          JSON.stringify({
            status: SessionExpireStatus,
            message: "Email is not registered.",
            data: responseArr,
          })
        );
      }
    });
  }
  return false;
};
