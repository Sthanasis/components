import sys
import os
import json

def get_current_version():
    path = os.getcwd()
    json_file = open(path + "/package.json")
    pckg_json = json.load(json_file)
    version = pckg_json['version']
    print(version)
    json_file.close()
    return version

version = get_current_version()

index = 0
json_string=''
messages = []
prefixes = ['breaking', 'fix', 'feat']

for i in range(1, len(sys.argv)):
    if i > 0:
        json_string = json_string + sys.argv[i]

arr = json.loads(json_string)

for commit in arr:
    messages.append(commit['message'])

for message in messages:
    if ":" in message:
        prefix = message.split(":")[0]
        if prefix in prefixes:
            if prefix == 'fix' and (update != 'major' or update != 'minor'): 
                update = int(version.split('.')[2]) + 1
                version = version.split('.')[0] + version.split('.')[1] + update
            elif prefix == 'feat' and update != 'major':
                update = int(version.split('.')[1]) + 1
                version = version.split('.')[0] + update + version.split('.')[2] 
            else: 
                update = int(version.split('.')[0]) + 1
                version = update + version.split('.')[1] + version.split('.')[2] 
print(version)