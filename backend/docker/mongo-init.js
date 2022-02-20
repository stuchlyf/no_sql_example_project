print("Started Adding the Users.");
db = db.getSiblingDB("Sportverein");
db.createUser({
    user: "api_user",
    pwd: "example",
    roles: [{ role: "readWrite", db: "Sportverein" }],
});
print("End Adding the User Roles.");