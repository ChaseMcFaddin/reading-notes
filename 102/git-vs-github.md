## Git vs GitHub

**Git** - a file system made up of snapshots

Git features:
- Local operations allows you to quickly access and alter files
- Tracking Changes - changes are stored locally
- Loss of Data is minimal 

States of Git
- Committed
  - Data is securely stored in local database
- Modified
  - File has been changed, but no committed
- Staged
  - Changed a modified version to committed
  
This encompasses the life cycle of a file
1. After an edit to a file, git flags it as modified
2. You stage the modified file
3. Then you commit the changed file

### This is best known practice as *ACP**
- Accept
- Committ
- Push

Today we are working with our terminal to differentiate between **git** and **github.** Gits are the projects and items were are working with while GitHub is where these files are stored.

Flags we can use

- `ls -a` (reveals hidden files)
- `ls - la`

- `.` inside folder
- `..` outside folder

VCS - Version Control System
> This allows you to revisit various versions of your files. This could be a previous version, allow you to track modifications, and see changes made by others.

- **Local Version Control** - One database on your hard drive that stores your changes
- **Centralized VC** - The system involves a single server storing all changes and file versions by multplie clients
- **Distributed VC** - Allows clients to create mirrored repo's in case of server corruption




[Back to Main page](README.md)