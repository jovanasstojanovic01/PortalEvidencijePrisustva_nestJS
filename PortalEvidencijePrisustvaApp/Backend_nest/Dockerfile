FROM node:20-alpine3.17
#postavi radni direktorijum
WORKDIR /users/src/app
# kopiraj u radni dir samo listu paketa za instalaciju
COPY package*.json ./
# pokrece instalciju node modula
RUN npm install
# prva tacka znaci trenutni direktorijum iz kog kopiramo, druga tacka je radni rdirektorijum u kontejneru u koji kopiramo
COPY . .
RUN npm run build
CMD ["npm","run","start:prod"]