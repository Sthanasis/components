import sys
import os
import json

def get_current_version():
    path = os.getcwd()
    json_file = open(path + "/package.json")
    pckg_json = json.load(json_file)
    version = pckg_json['version']
    json_file.close()
    return version

def create_release_version(version):
    # resolve version string to list
    v = list(version)
    json_string=''
    messages = []
    prefixes = ['breaking', 'fix', 'feat']

    for i in range(1, len(sys.argv)):
        if i > 0:
            json_string = json_string + sys.argv[i]

    # get the commit object
    arr = json.loads(json_string)
    # get every commit message 
    for commit in arr:
        messages.append(commit['message'])
    # update the version based on every message prefix
    for message in messages:
        if ":" in message:
            prefix = message.split(":")[0]
            if prefix in prefixes:
                if prefix == 'fix': 
                    v[4] = str(int(v[4]) +1)
                elif prefix == 'feat':
                    v[2] = str(int(v[2]) +1)
                else: 
                    v[0] = str(int(v[0]) +1)
                    
    return str().join(v)


package_version = get_current_version()
version = create_release_version(package_version)
if(package_version == version):
    print('')
else:
    print(version)