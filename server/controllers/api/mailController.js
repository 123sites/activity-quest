export function SendMail(mail_data) {
  console.log(mail_data);
  connectPool.getConnection(function (err, connection) {
    if (err) {
      connection.release();
      console.log(" Error getting mysql_pool connection: " + err);
      throw err;
    }
    connection.query(
      "SELECT * from users where id = ? ",
      [mail_data.receiver_id],
      function (error, result) {
        if (error) {
          console.log(error);
        } else {
          var userDetail = result;
          //console.log(userDetail); //return true;
          connection.query(
            "SELECT subject,description from email_templates where slug = ? ",
            [mail_data.template_slug],
            function (err, emailTempalate) {
              if (userDetail[0].first_name) {
                connection.release();

                var body_message = emailTempalate[0].description;
                body_message = body_message.replace(
                  "[[NAME]]",
                  userDetail[0].first_name
                );

                // Reset password link
                var resetPasswordLink =
                  WebsiteURL +
                  "resetPassword/" +
                  userDetail[0].reset_password_code;
                body_message = body_message.replace(
                  "[[PASSWORD_RESET_URL]]",
                  resetPasswordLink
                );
                body_message = body_message.replace(
                  "[[PASSWORD_RESET_URL]]",
                  resetPasswordLink
                );
                body_message = body_message.replace(
                  "[[PASSWORD_RESET_URL]]",
                  resetPasswordLink
                );

                var subject = emailTempalate[0].subject;
                var mail = {
                  from: "google.com <google@gmail.com>",
                  to: [String(userDetail[0].email)],
                  subject: subject,
                  html: body_message,
                };
                smtpTransport.sendMail(mail, function (error, response) {
                  if (error) {
                    console.log(error);
                    smtpTransport.close();
                    return res.send(
                      JSON.stringify({
                        status: 201,
                        message: "Error in sending mail.",
                        data: error,
                      })
                    );
                  } else {
                    console.log("mail sent");
                    smtpTransport.close();
                    return res.send(
                      JSON.stringify({
                        // "status": 201,
                        // "message": 'Password reset successful.
                        // "data": data,
                      })
                    );
                  }
                });
              } else {
                console.log(userDetail + mail_data);
              }
            }
          );
        }
      }
    );
  });
}
