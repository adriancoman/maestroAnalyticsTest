function generateEmail() {
    return "maestro_test" + Math.floor(Math.random() * 1000000) + "@yopmail.com";
}

output.email = generateEmail();