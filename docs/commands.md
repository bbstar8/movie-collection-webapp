# CLI Commands Documentation

This document contains CLI commands used in this project, grouped by their functionality.

---

## Table of Contents
1. [File and Directory Operations](#1-file-and-directory-operations)
2. [Git Commands](#2-git-commands)

---

## 1. File and Directory Operations

These commands were used to navigate and manage files and directories.

### `ls` - List Directory Contents
- **Description**: Displays the files and directories in the current directory.
- **Usage**:
  ```bash
  ls [options] [directory]
  ```

### `mkdir` - Create a Directory
- **Description**: Creates a new directory.
- **Usage**:
  ```bash
  mkdir [directory-name]
  ```

### `cd` - Change Directory
- **Description**: Moves into a specified directory
- **Usage**: 
  ```bash
  cd [directory]
  ```

### `touch` - Create an Empty File
- ***Description***: Creates a new empty file.
- ***Usage***:
  ```bash
  touch [filename]
  ```

### `mv` - Move or Rename Files
- ***Description***: Moves or renames files or directories
- ***Usage***: 
  ```bash
  mv [source-folder] [destination-folder]
  ```

### `rmdir -r` - Remove a Directory
- ***Description***: Deletes a directory recursively.
- ***Usage***: 
  ```bash
  rmdir -r [directory]
  ```

### `rm -rf` - Force Remove Files or Directories
- ***Description***: Deletes files or directories forcefully without confirmation.
- ***Usage***:
  ```bash
  rm -rf [file]
  ```


## 2. Git Commands

These commands were used to initialise, commit and push changes to a Git repository.

### `git init` - Initialise a Repository
- ***Description***: Sets up a new Git repository in the current directory.
- ***Usage***: 
  ```bash
  git init
  ```

### `git add` - Stage Changes
- ***Description***: Adds changes to the staging are for the next commit.
- ***Usage***:
  ```bash
  git add [file/directory]
  ```

### `git commit` - Commit changes
- ***Description***: Records the staged changes in the repository.
- ***Usage***:
  ```bash
  git commit -m "Commit message"
  ```

### `git push` - Push Changes
- ***Description***: Sends committed changes to a remote repository.
- ***Usage***: 
  ```bash
  git push [remote] [branch]
  ```
