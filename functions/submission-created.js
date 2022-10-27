module.exports.handler = async event => {
    const payload = JSON.parse(event.body).payload;
    const email = payload.data.email;
    const firstname = payload.data.firstname;
    const lastname = payload.data.lastname;
    //console.log(payload)
    console.log(`Recieved a submission: ${email} ${firstname} ${lastname}`);

}