source venv_t/bin/activate

pushd frontend
npm install
npm run build
popd
pip install -r requirements-flask.txt
export FLASK_ENV=development
export FLASK_APP=backend

if [ -f .env ]
then
     export $(cat .env | sed 's/#.*//g' | xargs)
fi
