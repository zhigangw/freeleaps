BASEDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
echo $BASEDIR
pushd $BASEDIR
if [[ "$VIRTUAL_ENV" == "" ]]
then
source ../../../venv_t/bin/activate
fi
python -m main
popd