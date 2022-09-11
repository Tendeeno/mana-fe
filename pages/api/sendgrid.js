import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "shanegrostad@gmail.com", // Your email where you'll receive emails
      from: "shane@shanerostad.com", // your website email address here
      subject: `New Contact Form Fill`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      </head>
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
        </div>
        <div class="container" style="margin-left: 20px;margin-right: 20px;">
        <h3>A new contact form fill:</h3>
        <div style="font-size: 16px;">
        <p>Side: ${req.body.side}</p>
        <p>Name: ${req.body.name}</p>
        <p>Company Name: ${req.body.companyName}</p>
        <p>Subscriber Count: ${req.body.socialAmount}</p>
        <p>Email: ${req.body.email}</p>
        <p>Reason: ${req.body.reason}</p>
        <p>Note: ${req.body.note}</p>
        <br>
        </div>
        </div>
      </body>
      </html>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
