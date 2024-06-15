const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

// for ejs setup =>
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

// read body data =>
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// for static files =>
app.use(express.static(path.join(__dirname, "public")));

// 1st create a "/" route => i close this route because i will use it in 3rd part.
// app.get("/", (req, res) => {
//     res.render("index");
// });


// file name in camelCase =>
const convertToCamelCase = (str) => {
    const words = str.split(' ');
    const camelCaseWords = words.map((word, index) => {
        if (index === 0) {
            return word.toLowerCase();
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        };
    });
    return camelCaseWords.join('');
};


// 2nd create a "/createFile" route =>
app.post("/createFile", (req, res) => {
    let newFile = `./Files/${convertToCamelCase(req.body.fileName)}` + ".txt";

    // check if file already exists =>
    if (fs.existsSync(newFile)) {
        return res.send("<script>alert('File already exists');</script>");
    } else {
        fs.writeFile(newFile, `${req.body.fileData}`, (err) => {
            if (err) return err;
            res.redirect("/");    // immediate return "/" route.
        });
    };
});



// 3rd create a "/readFile" route =>
app.get("/", (req, res) => {
    fs.readdir("./Files", (err, files) => {
        if (err) return err;

        const fileDataAndStat = [];
        // console.log(files);

        if (files.length === 0) {
            res.render("index", { files });
        } else {
            files.forEach(elm => {
                // console.log(elm);
                fs.stat(`./Files/${elm}`, (err, stat) => {
                    // console.log(stat);

                    fs.readFile(`./Files/${elm}`, "utf-8", (err, data) => {
                        if (err) return err;

                        // console.log(data);
                        const fileExtension = path.extname(elm).split('.').pop();
                        let fileSize = stat.size;

                        if (fileSize > 1024 * 1024) {
                            fileSize = (fileSize / (1024 * 1024)).toFixed(2) + ' MB';
                        } else if (fileSize > 1024) {
                            fileSize = (fileSize / 1024).toFixed(2) + ' KB';
                        } else {
                            fileSize = fileSize + ' bytes';
                        };

                        fileDataAndStat.push({
                            fileName: elm,
                            fileData: data,
                            fileDate: new Date(stat.birthtime).toLocaleString("en-US", { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true }),
                            fileSize: fileSize,
                            fileType: fileExtension
                        });

                        if (fileDataAndStat.length === files.length) {
                            res.render("index", { files, fileDetail: fileDataAndStat });
                        };
                    });
                });
            });
        };
    });
});

// 4th delete file =>
app.get('/deleteFile/:unlinkfile', (req, res) => {
    const deleteFile = req.params.unlinkfile;
    fs.unlink(`./files/${deleteFile}`, (err) => {
        if (err) return err;
        res.redirect("/");
    });
});

// 5th open File =>
app.get("/open/:openFile", (req, res) => {
    let openFile = req.params.openFile;
    fs.readFile(`./files/${openFile}`, "utf-8", (err, data) => {
        if (err) return err;
        res.render("openFile", { openFile, data });
    });
});

// 6th delete opened file =>
app.get("/open/openDelFile/:DelFile", (req, res) => {
    let DelFile = req.params.DelFile;
    fs.unlink(`./files/${DelFile}`, (err) => {
        if (err) return err;
        res.redirect("/");
    });
});

// 7th edit file =>
app.get("/editFile/:fname", (req, res) => {
    let efname = req.params.fname;
    fs.readFile(`./Files/${efname}`, "utf-8", (err, efdata) => {
        if (err) return err;
        res.render("editFile", { efname, efdata });
    });
});

app.post("/editFile/:efname", (req, res) => {
    // console.log(req.rawHeaders[33].split("/")[4]);
    let efname = req.params.efname;
    let efdata = req.body.efdata;
    fs.writeFile(`./Files/${efname}`, efdata, (err) => {
        if (err) return err;
        res.redirect("/");
    });
});

// 8th edit file name & data =>
app.get("/editFile/editFileName/:efname", (req, res) => {
    let efname = req.params.efname;
    fs.readFile(`./Files/${efname}`, "utf-8", (err, data) => {
        if (err) return err;
        res.render("editFileName", { efname, data });
    });
});

app.post("/editFile/editFileName/:pfname", (req, res) => {
    // console.log(req.body);
    let oldName = req.params.pfname;
    let newFname = req.body.edfname;
    let newData = req.body.edfdata;
    // console.log(newFname);
    // console.log(oldName);
    fs.rename(`./Files/${oldName}`, `./Files/${newFname}`, (err) => {
        if(err) return err;
            fs.writeFile(`./Files/${newFname}`, newData, (err) => {
            if(err) return err;
            fs.readFile(`./Files/${newFname}`, "utf-8", (err, data) => {
                if(err) return err;
                // console.log(data);
                fs.stat(`./Files/${newFname}`, (err, stat) => {
                    if(err) return err;
                    // console.log(stat);
                });
            });
            res.redirect("/");
        });
    });
});


app.listen(3000, () => { console.log("server listening on port 3000..."); });