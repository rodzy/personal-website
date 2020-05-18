import { Fragment } from "react";
import Layout from "../components/layout/Layout";
import Footer from "../components/layout/Footer";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    boxShadow: "none"
  },
  media: {
    height: 300,
  },
});

const Content = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 30px;
  top: -160px;
  font-weight: 1;
`;

const Skills = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className="container">
        <main>
          <Layout />
          <h2>Technologies</h2>
          <div className="grid">
            <Card className="${classes.root} card">
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <center>
                    Programming languages&nbsp;<br></br>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 10.826v2.349c-1.562 0-3 1.312-3 2.857 0 2.181 1.281 5.968-6 5.968v-2.002c4.917 0 3.966-1.6 3.966-3.967 0-2.094 1.211-3.5 2.278-4.031-1.067-.531-2.278-1.438-2.278-3.312 0-2.372.94-4.692-3.966-4.686v-2.002c7.285 0 6 4.506 6 6.688 0 1.544 1.438 2.138 3 2.138zm-19-2.138c0-2.182-1.285-6.688 6-6.688v2.002c-4.906-.007-3.966 2.313-3.966 4.686 0 1.875-1.211 2.781-2.278 3.312 1.067.531 2.278 1.938 2.278 4.031 0 2.367-.951 3.967 3.966 3.967v2.002c-7.281 0-6-3.787-6-5.969 0-1.545-1.438-2.857-3-2.857v-2.349c1.562.001 3-.593 3-2.137z" />
                    </svg>
                  </center>
                </Typography>
                <Typography variant="body1" color="textPrimary" component="ul">
                  <li className="item">Java</li>
                  <li className="item">C#</li>
                  <li className="item">JavaScript</li>
                  <li className="item">Go</li>
                </Typography>
              </CardContent>
            </Card>

            <Card className="${classes.root} card">
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <center>
                    Meta languages&nbsp;<br></br>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z" />
                    </svg>
                  </center>
                </Typography>
                <Typography variant="body1" color="textPrimary" component="ul">
                  <li className="item">HTML</li>
                  <li className="item">CSS</li>
                  <li className="item">JSON</li>
                  <li className="item">XML</li>
                </Typography>
              </CardContent>
            </Card>

            <Card className="${classes.root} card">
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <center>
                    Relational database environments&nbsp;<br></br>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.008 0c-4.225 0-10.008 1.001-10.008 4.361v15.277c0 3.362 6.209 4.362 10.008 4.362 3.783 0 9.992-1.001 9.992-4.361v-15.278c0-3.361-5.965-4.361-9.992-4.361zm0 2c3.638 0 7.992.909 7.992 2.361 0 1.581-5.104 2.361-7.992 2.361-3.412.001-8.008-.905-8.008-2.361 0-1.584 4.812-2.361 8.008-2.361zm7.992 17.386c0 1.751-5.104 2.614-7.992 2.614-3.412 0-8.008-1.002-8.008-2.614v-2.04c2.117 1.342 5.17 1.78 8.008 1.78 2.829 0 5.876-.438 7.992-1.78v2.04zm0-4.873c0 1.75-5.104 2.614-7.992 2.614-3.412-.001-8.008-1.002-8.008-2.614v-2.364c2.116 1.341 5.17 1.78 8.008 1.78 2.839 0 5.881-.442 7.992-1.78v2.364zm-7.992-2.585c-3.426 0-8.008-1.006-8.008-2.614v-2.371c2.117 1.342 5.17 1.78 8.008 1.78 2.829 0 5.876-.438 7.992-1.78v2.372c0 1.753-5.131 2.613-7.992 2.613z" />
                    </svg>
                  </center>
                </Typography>
                <Typography variant="body1" color="textPrimary" component="ul">
                  <li className="item">Microsoft SQL Server</li>
                  <li className="item">MySQL</li>
                </Typography>
              </CardContent>
            </Card>

            <Card className="${classes.root} card">
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <center>
                    NoSQL database environments&nbsp;<br></br>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.008 0c-4.225 0-10.008 1.001-10.008 4.361v15.277c0 3.362 6.209 4.362 10.008 4.362 3.783 0 9.992-1.001 9.992-4.361v-15.278c0-3.361-5.965-4.361-9.992-4.361zm-8.008 12.148c.351.222.734.411 1.131.586l-.38 2.851c-.471-.316-.751-.676-.751-1.072v-2.365zm12.209 4.531l.431-3.225c.435-.099.857-.215 1.267-.351l-.434 3.26c-.399.12-.824.225-1.264.316zm-1.375.236c-.42.058-.836.104-1.24.138l.428-3.207c.416-.033.831-.077 1.241-.135l-.429 3.204zm-2.587.207l-.239.004c-.318 0-.648-.012-.982-.029l.424-3.181.559.011.665-.013-.427 3.208zm-2.549-.134c-.404-.045-.806-.102-1.2-.169l.411-3.087c.4.053.803.092 1.207.123l-.418 3.133zm-2.509-.442c-.42-.105-.815-.224-1.177-.354l.4-2.987c.385.116.778.22 1.184.305l-.407 3.036zm12.811 2.84c0 1.751-5.104 2.614-7.992 2.614-3.412 0-8.008-1.002-8.008-2.614v-2.04c2.117 1.342 5.17 1.78 8.008 1.78 2.829 0 5.876-.438 7.992-1.78v2.04zm0-4.873c0 .507-.437.937-1.115 1.296l.438-3.286c.232-.118.463-.238.678-.375v2.365zm0-5.199c0 1.753-5.131 2.614-7.992 2.614-3.426 0-8.008-1.006-8.008-2.614v-2.371c2.117 1.342 5.17 1.78 8.008 1.78 2.829 0 5.876-.438 7.992-1.78v2.371zm-7.992-2.591c-3.412 0-8.008-.906-8.008-2.362 0-1.584 4.812-2.361 8.008-2.361 3.638 0 7.992.909 7.992 2.361 0 1.581-5.104 2.362-7.992 2.362z" />
                    </svg>
                  </center>
                </Typography>
                <Typography variant="body1" color="textPrimary" component="ul">
                  <li className="item">MongoDB</li>
                  <li className="item">MongoDB Atlas</li>
                  <li className="item">Firebase Cloud Firestore</li>
                </Typography>
              </CardContent>
            </Card>

            <Card className="${classes.root} card">
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <center>
                    Backend&nbsp;<br></br>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0l-11 6v12.131l11 5.869 11-5.869v-12.066l-11-6.065zm8.063 6.73l-2.267 1.165-5.796-3.098-5.705 3.018-2.245-1.2 7.945-4.333 8.068 4.448zm-13.063 3.73l4 2.139v3.807l-4-2.052v-3.894zm5.01.411l-3.588-1.918 3.573-1.891 3.64 1.945-3.625 1.864zm4.99-.317v3.8l-4 2.052v-3.796l4-2.056zm-14-2.233l2 1.07v6.185l6 3.077v2.547l-8-4.268v-8.611zm10 12.879v-2.546l6-3.077v-6.052l2-1.028v8.435l-8 4.268z" />
                    </svg>
                  </center>
                </Typography>
                <Typography variant="body1" color="textPrimary" component="ul">
                  <li className="item">Microsoft ASP.NET MVC</li>
                  <li className="item">Echo</li>
                  <li className="item">Node.js</li>
                  <li className="item">Express</li>
                </Typography>
              </CardContent>
            </Card>

            <Card className="${classes.root} card">
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <center>
                    Frontend&nbsp;<br></br>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1.004 5.998l10.996-5.998 10.99 6.06-10.985 5.86-11.001-5.922zm11.996 7.675v10.327l10-5.362v-10.326l-10 5.361zm-2 0l-10-5.411v10.376l10 5.362v-10.327z" />
                    </svg>
                  </center>
                </Typography>
                <Typography variant="body1" color="textPrimary" component="ul">
                  <li className="item">React *Next.js & Gatsby*</li>
                  <li className="item">JQuery</li>
                  <li className="item">JSF Facelets</li>
                  <li className="item">Vue</li>
                </Typography>
              </CardContent>
            </Card>

            <Card className="${classes.root} card">
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <center>
                    Other&nbsp;<br></br>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.759 20.498l-3.743-7.856c-1.041-2.186-2.016-4.581-2.016-7.007v-2.635h-2c0 3.391-.083 5.188 2.21 10.502l3.743 7.854c.143.302-.068.644-.377.644h-1.246l-4.88-10h-2.984c1.795-4.183 1.528-5.963 1.534-9h-2v2.635c0 2.426-.975 4.82-2.016 7.006l-3.743 7.856c-.165.348-.241.708-.241 1.058 0 1.283 1.023 2.445 2.423 2.445h13.153c1.4 0 2.424-1.162 2.424-2.446 0-.35-.076-.709-.241-1.056zm-13.259 1.502c-.829 0-1.5-.671-1.5-1.5s.671-1.5 1.5-1.5 1.5.671 1.5 1.5-.671 1.5-1.5 1.5zm2.5-4c-.553 0-1-.447-1-1 0-.553.447-1 1-1 .552 0 1 .447 1 1 0 .553-.448 1-1 1zm3 3c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm-5-20c0-.552.448-1 1-1h6c.553 0 1 .448 1 1s-.447 1-1 1h-6c-.552 0-1-.448-1-1z" />
                    </svg>
                  </center>
                </Typography>
                <Typography variant="body1" color="textPrimary" component="ul">
                  <li className="item">Git (Version control)</li>
                  <li className="item">Docker (Container registry)</li>
                  <li className="item">Figma (Design tool)</li>
                </Typography>
              </CardContent>
            </Card>
            <Card className="${classes.root} card">
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <center>
                    On the radar&nbsp;<br></br>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 12c0 2.206 1.794 4 4 4 1.761 0 3.242-1.151 3.775-2.734l2.224-1.291.001.025c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6c1.084 0 2.098.292 2.975.794l-2.21 1.283c-.248-.048-.503-.077-.765-.077-2.206 0-4 1.794-4 4zm4-2c-1.105 0-2 .896-2 2s.895 2 2 2 2-.896 2-2l-.002-.015 3.36-1.95c.976-.565 2.704-.336 3.711.159l4.931-2.863-3.158-1.569.169-3.632-4.945 2.87c-.07 1.121-.734 2.736-1.705 3.301l-3.383 1.964c-.29-.163-.621-.265-.978-.265zm7.995 1.911l.005.089c0 4.411-3.589 8-8 8s-8-3.589-8-8 3.589-8 8-8c1.475 0 2.853.408 4.041 1.107.334-.586.428-1.544.146-2.18-1.275-.589-2.69-.927-4.187-.927-5.523 0-10 4.477-10 10s4.477 10 10 10c5.233 0 9.521-4.021 9.957-9.142-.301-.483-1.066-1.061-1.962-.947z" />
                    </svg>
                  </center>
                </Typography>
                <Typography variant="body1" color="textPrimary" component="ul">
                  <li className="item">Angular (Currently learning)</li>
                  <li className="item">TypeScript (Currently learning)</li>
                  <li className="item">Rust</li>
                  <li className="item">PHP/Laravel</li>
                  <li className="item">WASM</li>
                </Typography>
              </CardContent>
            </Card>
          </div>
          <h2>Studies</h2>
          <Card className="${classes.root} maincard">
            <CardMedia
              className={classes.media}
              image="UTN-feria.png"
              title="UTN"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h5">
                Universidad Técnica Nacional
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Associates diploma<br></br>
                Currently student<br></br>
                <b>Start date:</b>16/01/2017
              </Typography>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Skills;
