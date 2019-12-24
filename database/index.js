const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/githubDB');

let repoSchema = mongoose.Schema(
  // TODO: your schema here!
  {
    "0": {
      "id": {
        "type": "Number"
      },
      "node_id": {
        "type": "String"
      },
      "name": {
        "type": "String"
      },
      "full_name": {
        "type": "String"
      },
      "private": {
        "type": "Boolean"
      },
      "owner": {
        "login": {
          "type": "String"
        },
        "id": {
          "type": "Number"
        },
        "node_id": {
          "type": "String"
        },
        "avatar_url": {
          "type": "String"
        },
        "gravatar_id": {
          "type": "String"
        },
        "url": {
          "type": "String"
        },
        "html_url": {
          "type": "String"
        },
        "followers_url": {
          "type": "String"
        },
        "following_url": {
          "type": "String"
        },
        "gists_url": {
          "type": "String"
        },
        "starred_url": {
          "type": "String"
        },
        "subscriptions_url": {
          "type": "String"
        },
        "organizations_url": {
          "type": "String"
        },
        "repos_url": {
          "type": "String"
        },
        "events_url": {
          "type": "String"
        },
        "received_events_url": {
          "type": "String"
        },
        "type": {
          "type": "String"
        },
        "site_admin": {
          "type": "Boolean"
        }
      },
      "html_url": {
        "type": "String"
      },
      "description": {
        "type": "Mixed"
      },
      "fork": {
        "type": "Boolean"
      },
      "url": {
        "type": "String"
      },
      "forks_url": {
        "type": "String"
      },
      "keys_url": {
        "type": "String"
      },
      "collaborators_url": {
        "type": "String"
      },
      "teams_url": {
        "type": "String"
      },
      "hooks_url": {
        "type": "String"
      },
      "issue_events_url": {
        "type": "String"
      },
      "events_url": {
        "type": "String"
      },
      "assignees_url": {
        "type": "String"
      },
      "branches_url": {
        "type": "String"
      },
      "tags_url": {
        "type": "String"
      },
      "blobs_url": {
        "type": "String"
      },
      "git_tags_url": {
        "type": "String"
      },
      "git_refs_url": {
        "type": "String"
      },
      "trees_url": {
        "type": "String"
      },
      "statuses_url": {
        "type": "String"
      },
      "languages_url": {
        "type": "String"
      },
      "stargazers_url": {
        "type": "String"
      },
      "contributors_url": {
        "type": "String"
      },
      "subscribers_url": {
        "type": "String"
      },
      "subscription_url": {
        "type": "String"
      },
      "commits_url": {
        "type": "String"
      },
      "git_commits_url": {
        "type": "String"
      },
      "comments_url": {
        "type": "String"
      },
      "issue_comment_url": {
        "type": "String"
      },
      "contents_url": {
        "type": "String"
      },
      "compare_url": {
        "type": "String"
      },
      "merges_url": {
        "type": "String"
      },
      "archive_url": {
        "type": "String"
      },
      "downloads_url": {
        "type": "String"
      },
      "issues_url": {
        "type": "String"
      },
      "pulls_url": {
        "type": "String"
      },
      "milestones_url": {
        "type": "String"
      },
      "notifications_url": {
        "type": "String"
      },
      "labels_url": {
        "type": "String"
      },
      "releases_url": {
        "type": "String"
      },
      "deployments_url": {
        "type": "String"
      },
      "created_at": {
        "type": "Date"
      },
      "updated_at": {
        "type": "Date"
      },
      "pushed_at": {
        "type": "Date"
      },
      "git_url": {
        "type": "String"
      },
      "ssh_url": {
        "type": "String"
      },
      "clone_url": {
        "type": "String"
      },
      "svn_url": {
        "type": "String"
      },
      "homepage": {
        "type": "Mixed"
      },
      "size": {
        "type": "Number"
      },
      "stargazers_count": {
        "type": "Number"
      },
      "watchers_count": {
        "type": "Number"
      },
      "language": {
        "type": "Mixed"
      },
      "has_issues": {
        "type": "Boolean"
      },
      "has_projects": {
        "type": "Boolean"
      },
      "has_downloads": {
        "type": "Boolean"
      },
      "has_wiki": {
        "type": "Boolean"
      },
      "has_pages": {
        "type": "Boolean"
      },
      "forks_count": {
        "type": "Number"
      },
      "mirror_url": {
        "type": "Mixed"
      },
      "archived": {
        "type": "Boolean"
      },
      "disabled": {
        "type": "Boolean"
      },
      "open_issues_count": {
        "type": "Number"
      },
      "license": {
        "type": "Mixed"
      },
      "forks": {
        "type": "Number"
      },
      "open_issues": {
        "type": "Number"
      },
      "watchers": {
        "type": "Number"
      },
      "default_branch": {
        "type": "String"
      }
    },
    "1": {
      "id": {
        "type": "Number"
      },
      "node_id": {
        "type": "String"
      },
      "name": {
        "type": "String"
      },
      "full_name": {
        "type": "String"
      },
      "private": {
        "type": "Boolean"
      },
      "owner": {
        "login": {
          "type": "String"
        },
        "id": {
          "type": "Number"
        },
        "node_id": {
          "type": "String"
        },
        "avatar_url": {
          "type": "String"
        },
        "gravatar_id": {
          "type": "String"
        },
        "url": {
          "type": "String"
        },
        "html_url": {
          "type": "String"
        },
        "followers_url": {
          "type": "String"
        },
        "following_url": {
          "type": "String"
        },
        "gists_url": {
          "type": "String"
        },
        "starred_url": {
          "type": "String"
        },
        "subscriptions_url": {
          "type": "String"
        },
        "organizations_url": {
          "type": "String"
        },
        "repos_url": {
          "type": "String"
        },
        "events_url": {
          "type": "String"
        },
        "received_events_url": {
          "type": "String"
        },
        "type": {
          "type": "String"
        },
        "site_admin": {
          "type": "Boolean"
        }
      },
      "html_url": {
        "type": "String"
      },
      "description": {
        "type": "Mixed"
      },
      "fork": {
        "type": "Boolean"
      },
      "url": {
        "type": "String"
      },
      "forks_url": {
        "type": "String"
      },
      "keys_url": {
        "type": "String"
      },
      "collaborators_url": {
        "type": "String"
      },
      "teams_url": {
        "type": "String"
      },
      "hooks_url": {
        "type": "String"
      },
      "issue_events_url": {
        "type": "String"
      },
      "events_url": {
        "type": "String"
      },
      "assignees_url": {
        "type": "String"
      },
      "branches_url": {
        "type": "String"
      },
      "tags_url": {
        "type": "String"
      },
      "blobs_url": {
        "type": "String"
      },
      "git_tags_url": {
        "type": "String"
      },
      "git_refs_url": {
        "type": "String"
      },
      "trees_url": {
        "type": "String"
      },
      "statuses_url": {
        "type": "String"
      },
      "languages_url": {
        "type": "String"
      },
      "stargazers_url": {
        "type": "String"
      },
      "contributors_url": {
        "type": "String"
      },
      "subscribers_url": {
        "type": "String"
      },
      "subscription_url": {
        "type": "String"
      },
      "commits_url": {
        "type": "String"
      },
      "git_commits_url": {
        "type": "String"
      },
      "comments_url": {
        "type": "String"
      },
      "issue_comment_url": {
        "type": "String"
      },
      "contents_url": {
        "type": "String"
      },
      "compare_url": {
        "type": "String"
      },
      "merges_url": {
        "type": "String"
      },
      "archive_url": {
        "type": "String"
      },
      "downloads_url": {
        "type": "String"
      },
      "issues_url": {
        "type": "String"
      },
      "pulls_url": {
        "type": "String"
      },
      "milestones_url": {
        "type": "String"
      },
      "notifications_url": {
        "type": "String"
      },
      "labels_url": {
        "type": "String"
      },
      "releases_url": {
        "type": "String"
      },
      "deployments_url": {
        "type": "String"
      },
      "created_at": {
        "type": "Date"
      },
      "updated_at": {
        "type": "Date"
      },
      "pushed_at": {
        "type": "Date"
      },
      "git_url": {
        "type": "String"
      },
      "ssh_url": {
        "type": "String"
      },
      "clone_url": {
        "type": "String"
      },
      "svn_url": {
        "type": "String"
      },
      "homepage": {
        "type": "Mixed"
      },
      "size": {
        "type": "Number"
      },
      "stargazers_count": {
        "type": "Number"
      },
      "watchers_count": {
        "type": "Number"
      },
      "language": {
        "type": "Mixed"
      },
      "has_issues": {
        "type": "Boolean"
      },
      "has_projects": {
        "type": "Boolean"
      },
      "has_downloads": {
        "type": "Boolean"
      },
      "has_wiki": {
        "type": "Boolean"
      },
      "has_pages": {
        "type": "Boolean"
      },
      "forks_count": {
        "type": "Number"
      },
      "mirror_url": {
        "type": "Mixed"
      },
      "archived": {
        "type": "Boolean"
      },
      "disabled": {
        "type": "Boolean"
      },
      "open_issues_count": {
        "type": "Number"
      },
      "license": {
        "type": "Mixed"
      },
      "forks": {
        "type": "Number"
      },
      "open_issues": {
        "type": "Number"
      },
      "watchers": {
        "type": "Number"
      },
      "default_branch": {
        "type": "String"
      }
    },
    "2": {
      "id": {
        "type": "Number"
      },
      "node_id": {
        "type": "String"
      },
      "name": {
        "type": "String"
      },
      "full_name": {
        "type": "String"
      },
      "private": {
        "type": "Boolean"
      },
      "owner": {
        "login": {
          "type": "String"
        },
        "id": {
          "type": "Number"
        },
        "node_id": {
          "type": "String"
        },
        "avatar_url": {
          "type": "String"
        },
        "gravatar_id": {
          "type": "String"
        },
        "url": {
          "type": "String"
        },
        "html_url": {
          "type": "String"
        },
        "followers_url": {
          "type": "String"
        },
        "following_url": {
          "type": "String"
        },
        "gists_url": {
          "type": "String"
        },
        "starred_url": {
          "type": "String"
        },
        "subscriptions_url": {
          "type": "String"
        },
        "organizations_url": {
          "type": "String"
        },
        "repos_url": {
          "type": "String"
        },
        "events_url": {
          "type": "String"
        },
        "received_events_url": {
          "type": "String"
        },
        "type": {
          "type": "String"
        },
        "site_admin": {
          "type": "Boolean"
        }
      },
      "html_url": {
        "type": "String"
      },
      "description": {
        "type": "Mixed"
      },
      "fork": {
        "type": "Boolean"
      },
      "url": {
        "type": "String"
      },
      "forks_url": {
        "type": "String"
      },
      "keys_url": {
        "type": "String"
      },
      "collaborators_url": {
        "type": "String"
      },
      "teams_url": {
        "type": "String"
      },
      "hooks_url": {
        "type": "String"
      },
      "issue_events_url": {
        "type": "String"
      },
      "events_url": {
        "type": "String"
      },
      "assignees_url": {
        "type": "String"
      },
      "branches_url": {
        "type": "String"
      },
      "tags_url": {
        "type": "String"
      },
      "blobs_url": {
        "type": "String"
      },
      "git_tags_url": {
        "type": "String"
      },
      "git_refs_url": {
        "type": "String"
      },
      "trees_url": {
        "type": "String"
      },
      "statuses_url": {
        "type": "String"
      },
      "languages_url": {
        "type": "String"
      },
      "stargazers_url": {
        "type": "String"
      },
      "contributors_url": {
        "type": "String"
      },
      "subscribers_url": {
        "type": "String"
      },
      "subscription_url": {
        "type": "String"
      },
      "commits_url": {
        "type": "String"
      },
      "git_commits_url": {
        "type": "String"
      },
      "comments_url": {
        "type": "String"
      },
      "issue_comment_url": {
        "type": "String"
      },
      "contents_url": {
        "type": "String"
      },
      "compare_url": {
        "type": "String"
      },
      "merges_url": {
        "type": "String"
      },
      "archive_url": {
        "type": "String"
      },
      "downloads_url": {
        "type": "String"
      },
      "issues_url": {
        "type": "String"
      },
      "pulls_url": {
        "type": "String"
      },
      "milestones_url": {
        "type": "String"
      },
      "notifications_url": {
        "type": "String"
      },
      "labels_url": {
        "type": "String"
      },
      "releases_url": {
        "type": "String"
      },
      "deployments_url": {
        "type": "String"
      },
      "created_at": {
        "type": "Date"
      },
      "updated_at": {
        "type": "Date"
      },
      "pushed_at": {
        "type": "Date"
      },
      "git_url": {
        "type": "String"
      },
      "ssh_url": {
        "type": "String"
      },
      "clone_url": {
        "type": "String"
      },
      "svn_url": {
        "type": "String"
      },
      "homepage": {
        "type": "Mixed"
      },
      "size": {
        "type": "Number"
      },
      "stargazers_count": {
        "type": "Number"
      },
      "watchers_count": {
        "type": "Number"
      },
      "language": {
        "type": "Mixed"
      },
      "has_issues": {
        "type": "Boolean"
      },
      "has_projects": {
        "type": "Boolean"
      },
      "has_downloads": {
        "type": "Boolean"
      },
      "has_wiki": {
        "type": "Boolean"
      },
      "has_pages": {
        "type": "Boolean"
      },
      "forks_count": {
        "type": "Number"
      },
      "mirror_url": {
        "type": "Mixed"
      },
      "archived": {
        "type": "Boolean"
      },
      "disabled": {
        "type": "Boolean"
      },
      "open_issues_count": {
        "type": "Number"
      },
      "license": {
        "type": "Mixed"
      },
      "forks": {
        "type": "Number"
      },
      "open_issues": {
        "type": "Number"
      },
      "watchers": {
        "type": "Number"
      },
      "default_branch": {
        "type": "String"
      }
    },
    "3": {
      "id": {
        "type": "Number"
      },
      "node_id": {
        "type": "String"
      },
      "name": {
        "type": "String"
      },
      "full_name": {
        "type": "String"
      },
      "private": {
        "type": "Boolean"
      },
      "owner": {
        "login": {
          "type": "String"
        },
        "id": {
          "type": "Number"
        },
        "node_id": {
          "type": "String"
        },
        "avatar_url": {
          "type": "String"
        },
        "gravatar_id": {
          "type": "String"
        },
        "url": {
          "type": "String"
        },
        "html_url": {
          "type": "String"
        },
        "followers_url": {
          "type": "String"
        },
        "following_url": {
          "type": "String"
        },
        "gists_url": {
          "type": "String"
        },
        "starred_url": {
          "type": "String"
        },
        "subscriptions_url": {
          "type": "String"
        },
        "organizations_url": {
          "type": "String"
        },
        "repos_url": {
          "type": "String"
        },
        "events_url": {
          "type": "String"
        },
        "received_events_url": {
          "type": "String"
        },
        "type": {
          "type": "String"
        },
        "site_admin": {
          "type": "Boolean"
        }
      },
      "html_url": {
        "type": "String"
      },
      "description": {
        "type": "Mixed"
      },
      "fork": {
        "type": "Boolean"
      },
      "url": {
        "type": "String"
      },
      "forks_url": {
        "type": "String"
      },
      "keys_url": {
        "type": "String"
      },
      "collaborators_url": {
        "type": "String"
      },
      "teams_url": {
        "type": "String"
      },
      "hooks_url": {
        "type": "String"
      },
      "issue_events_url": {
        "type": "String"
      },
      "events_url": {
        "type": "String"
      },
      "assignees_url": {
        "type": "String"
      },
      "branches_url": {
        "type": "String"
      },
      "tags_url": {
        "type": "String"
      },
      "blobs_url": {
        "type": "String"
      },
      "git_tags_url": {
        "type": "String"
      },
      "git_refs_url": {
        "type": "String"
      },
      "trees_url": {
        "type": "String"
      },
      "statuses_url": {
        "type": "String"
      },
      "languages_url": {
        "type": "String"
      },
      "stargazers_url": {
        "type": "String"
      },
      "contributors_url": {
        "type": "String"
      },
      "subscribers_url": {
        "type": "String"
      },
      "subscription_url": {
        "type": "String"
      },
      "commits_url": {
        "type": "String"
      },
      "git_commits_url": {
        "type": "String"
      },
      "comments_url": {
        "type": "String"
      },
      "issue_comment_url": {
        "type": "String"
      },
      "contents_url": {
        "type": "String"
      },
      "compare_url": {
        "type": "String"
      },
      "merges_url": {
        "type": "String"
      },
      "archive_url": {
        "type": "String"
      },
      "downloads_url": {
        "type": "String"
      },
      "issues_url": {
        "type": "String"
      },
      "pulls_url": {
        "type": "String"
      },
      "milestones_url": {
        "type": "String"
      },
      "notifications_url": {
        "type": "String"
      },
      "labels_url": {
        "type": "String"
      },
      "releases_url": {
        "type": "String"
      },
      "deployments_url": {
        "type": "String"
      },
      "created_at": {
        "type": "Date"
      },
      "updated_at": {
        "type": "Date"
      },
      "pushed_at": {
        "type": "Date"
      },
      "git_url": {
        "type": "String"
      },
      "ssh_url": {
        "type": "String"
      },
      "clone_url": {
        "type": "String"
      },
      "svn_url": {
        "type": "String"
      },
      "homepage": {
        "type": "Mixed"
      },
      "size": {
        "type": "Number"
      },
      "stargazers_count": {
        "type": "Number"
      },
      "watchers_count": {
        "type": "Number"
      },
      "language": {
        "type": "Mixed"
      },
      "has_issues": {
        "type": "Boolean"
      },
      "has_projects": {
        "type": "Boolean"
      },
      "has_downloads": {
        "type": "Boolean"
      },
      "has_wiki": {
        "type": "Boolean"
      },
      "has_pages": {
        "type": "Boolean"
      },
      "forks_count": {
        "type": "Number"
      },
      "mirror_url": {
        "type": "Mixed"
      },
      "archived": {
        "type": "Boolean"
      },
      "disabled": {
        "type": "Boolean"
      },
      "open_issues_count": {
        "type": "Number"
      },
      "license": {
        "type": "Mixed"
      },
      "forks": {
        "type": "Number"
      },
      "open_issues": {
        "type": "Number"
      },
      "watchers": {
        "type": "Number"
      },
      "default_branch": {
        "type": "String"
      }
    },
    "4": {
      "id": {
        "type": "Number"
      },
      "node_id": {
        "type": "String"
      },
      "name": {
        "type": "String"
      },
      "full_name": {
        "type": "String"
      },
      "private": {
        "type": "Boolean"
      },
      "owner": {
        "login": {
          "type": "String"
        },
        "id": {
          "type": "Number"
        },
        "node_id": {
          "type": "String"
        },
        "avatar_url": {
          "type": "String"
        },
        "gravatar_id": {
          "type": "String"
        },
        "url": {
          "type": "String"
        },
        "html_url": {
          "type": "String"
        },
        "followers_url": {
          "type": "String"
        },
        "following_url": {
          "type": "String"
        },
        "gists_url": {
          "type": "String"
        },
        "starred_url": {
          "type": "String"
        },
        "subscriptions_url": {
          "type": "String"
        },
        "organizations_url": {
          "type": "String"
        },
        "repos_url": {
          "type": "String"
        },
        "events_url": {
          "type": "String"
        },
        "received_events_url": {
          "type": "String"
        },
        "type": {
          "type": "String"
        },
        "site_admin": {
          "type": "Boolean"
        }
      },
      "html_url": {
        "type": "String"
      },
      "description": {
        "type": "Mixed"
      },
      "fork": {
        "type": "Boolean"
      },
      "url": {
        "type": "String"
      },
      "forks_url": {
        "type": "String"
      },
      "keys_url": {
        "type": "String"
      },
      "collaborators_url": {
        "type": "String"
      },
      "teams_url": {
        "type": "String"
      },
      "hooks_url": {
        "type": "String"
      },
      "issue_events_url": {
        "type": "String"
      },
      "events_url": {
        "type": "String"
      },
      "assignees_url": {
        "type": "String"
      },
      "branches_url": {
        "type": "String"
      },
      "tags_url": {
        "type": "String"
      },
      "blobs_url": {
        "type": "String"
      },
      "git_tags_url": {
        "type": "String"
      },
      "git_refs_url": {
        "type": "String"
      },
      "trees_url": {
        "type": "String"
      },
      "statuses_url": {
        "type": "String"
      },
      "languages_url": {
        "type": "String"
      },
      "stargazers_url": {
        "type": "String"
      },
      "contributors_url": {
        "type": "String"
      },
      "subscribers_url": {
        "type": "String"
      },
      "subscription_url": {
        "type": "String"
      },
      "commits_url": {
        "type": "String"
      },
      "git_commits_url": {
        "type": "String"
      },
      "comments_url": {
        "type": "String"
      },
      "issue_comment_url": {
        "type": "String"
      },
      "contents_url": {
        "type": "String"
      },
      "compare_url": {
        "type": "String"
      },
      "merges_url": {
        "type": "String"
      },
      "archive_url": {
        "type": "String"
      },
      "downloads_url": {
        "type": "String"
      },
      "issues_url": {
        "type": "String"
      },
      "pulls_url": {
        "type": "String"
      },
      "milestones_url": {
        "type": "String"
      },
      "notifications_url": {
        "type": "String"
      },
      "labels_url": {
        "type": "String"
      },
      "releases_url": {
        "type": "String"
      },
      "deployments_url": {
        "type": "String"
      },
      "created_at": {
        "type": "Date"
      },
      "updated_at": {
        "type": "Date"
      },
      "pushed_at": {
        "type": "Date"
      },
      "git_url": {
        "type": "String"
      },
      "ssh_url": {
        "type": "String"
      },
      "clone_url": {
        "type": "String"
      },
      "svn_url": {
        "type": "String"
      },
      "homepage": {
        "type": "Mixed"
      },
      "size": {
        "type": "Number"
      },
      "stargazers_count": {
        "type": "Number"
      },
      "watchers_count": {
        "type": "Number"
      },
      "language": {
        "type": "Mixed"
      },
      "has_issues": {
        "type": "Boolean"
      },
      "has_projects": {
        "type": "Boolean"
      },
      "has_downloads": {
        "type": "Boolean"
      },
      "has_wiki": {
        "type": "Boolean"
      },
      "has_pages": {
        "type": "Boolean"
      },
      "forks_count": {
        "type": "Number"
      },
      "mirror_url": {
        "type": "Mixed"
      },
      "archived": {
        "type": "Boolean"
      },
      "disabled": {
        "type": "Boolean"
      },
      "open_issues_count": {
        "type": "Number"
      },
      "license": {
        "type": "Mixed"
      },
      "forks": {
        "type": "Number"
      },
      "open_issues": {
        "type": "Number"
      },
      "watchers": {
        "type": "Number"
      },
      "default_branch": {
        "type": "String"
      }
    },
    "5": {
      "id": {
        "type": "Number"
      },
      "node_id": {
        "type": "String"
      },
      "name": {
        "type": "String"
      },
      "full_name": {
        "type": "String"
      },
      "private": {
        "type": "Boolean"
      },
      "owner": {
        "login": {
          "type": "String"
        },
        "id": {
          "type": "Number"
        },
        "node_id": {
          "type": "String"
        },
        "avatar_url": {
          "type": "String"
        },
        "gravatar_id": {
          "type": "String"
        },
        "url": {
          "type": "String"
        },
        "html_url": {
          "type": "String"
        },
        "followers_url": {
          "type": "String"
        },
        "following_url": {
          "type": "String"
        },
        "gists_url": {
          "type": "String"
        },
        "starred_url": {
          "type": "String"
        },
        "subscriptions_url": {
          "type": "String"
        },
        "organizations_url": {
          "type": "String"
        },
        "repos_url": {
          "type": "String"
        },
        "events_url": {
          "type": "String"
        },
        "received_events_url": {
          "type": "String"
        },
        "type": {
          "type": "String"
        },
        "site_admin": {
          "type": "Boolean"
        }
      },
      "html_url": {
        "type": "String"
      },
      "description": {
        "type": "Mixed"
      },
      "fork": {
        "type": "Boolean"
      },
      "url": {
        "type": "String"
      },
      "forks_url": {
        "type": "String"
      },
      "keys_url": {
        "type": "String"
      },
      "collaborators_url": {
        "type": "String"
      },
      "teams_url": {
        "type": "String"
      },
      "hooks_url": {
        "type": "String"
      },
      "issue_events_url": {
        "type": "String"
      },
      "events_url": {
        "type": "String"
      },
      "assignees_url": {
        "type": "String"
      },
      "branches_url": {
        "type": "String"
      },
      "tags_url": {
        "type": "String"
      },
      "blobs_url": {
        "type": "String"
      },
      "git_tags_url": {
        "type": "String"
      },
      "git_refs_url": {
        "type": "String"
      },
      "trees_url": {
        "type": "String"
      },
      "statuses_url": {
        "type": "String"
      },
      "languages_url": {
        "type": "String"
      },
      "stargazers_url": {
        "type": "String"
      },
      "contributors_url": {
        "type": "String"
      },
      "subscribers_url": {
        "type": "String"
      },
      "subscription_url": {
        "type": "String"
      },
      "commits_url": {
        "type": "String"
      },
      "git_commits_url": {
        "type": "String"
      },
      "comments_url": {
        "type": "String"
      },
      "issue_comment_url": {
        "type": "String"
      },
      "contents_url": {
        "type": "String"
      },
      "compare_url": {
        "type": "String"
      },
      "merges_url": {
        "type": "String"
      },
      "archive_url": {
        "type": "String"
      },
      "downloads_url": {
        "type": "String"
      },
      "issues_url": {
        "type": "String"
      },
      "pulls_url": {
        "type": "String"
      },
      "milestones_url": {
        "type": "String"
      },
      "notifications_url": {
        "type": "String"
      },
      "labels_url": {
        "type": "String"
      },
      "releases_url": {
        "type": "String"
      },
      "deployments_url": {
        "type": "String"
      },
      "created_at": {
        "type": "Date"
      },
      "updated_at": {
        "type": "Date"
      },
      "pushed_at": {
        "type": "Date"
      },
      "git_url": {
        "type": "String"
      },
      "ssh_url": {
        "type": "String"
      },
      "clone_url": {
        "type": "String"
      },
      "svn_url": {
        "type": "String"
      },
      "homepage": {
        "type": "Mixed"
      },
      "size": {
        "type": "Number"
      },
      "stargazers_count": {
        "type": "Number"
      },
      "watchers_count": {
        "type": "Number"
      },
      "language": {
        "type": "Mixed"
      },
      "has_issues": {
        "type": "Boolean"
      },
      "has_projects": {
        "type": "Boolean"
      },
      "has_downloads": {
        "type": "Boolean"
      },
      "has_wiki": {
        "type": "Boolean"
      },
      "has_pages": {
        "type": "Boolean"
      },
      "forks_count": {
        "type": "Number"
      },
      "mirror_url": {
        "type": "Mixed"
      },
      "archived": {
        "type": "Boolean"
      },
      "disabled": {
        "type": "Boolean"
      },
      "open_issues_count": {
        "type": "Number"
      },
      "license": {
        "type": "Mixed"
      },
      "forks": {
        "type": "Number"
      },
      "open_issues": {
        "type": "Number"
      },
      "watchers": {
        "type": "Number"
      },
      "default_branch": {
        "type": "String"
      }
    },
    "6": {
      "id": {
        "type": "Number"
      },
      "node_id": {
        "type": "String"
      },
      "name": {
        "type": "String"
      },
      "full_name": {
        "type": "String"
      },
      "private": {
        "type": "Boolean"
      },
      "owner": {
        "login": {
          "type": "String"
        },
        "id": {
          "type": "Number"
        },
        "node_id": {
          "type": "String"
        },
        "avatar_url": {
          "type": "String"
        },
        "gravatar_id": {
          "type": "String"
        },
        "url": {
          "type": "String"
        },
        "html_url": {
          "type": "String"
        },
        "followers_url": {
          "type": "String"
        },
        "following_url": {
          "type": "String"
        },
        "gists_url": {
          "type": "String"
        },
        "starred_url": {
          "type": "String"
        },
        "subscriptions_url": {
          "type": "String"
        },
        "organizations_url": {
          "type": "String"
        },
        "repos_url": {
          "type": "String"
        },
        "events_url": {
          "type": "String"
        },
        "received_events_url": {
          "type": "String"
        },
        "type": {
          "type": "String"
        },
        "site_admin": {
          "type": "Boolean"
        }
      },
      "html_url": {
        "type": "String"
      },
      "description": {
        "type": "Mixed"
      },
      "fork": {
        "type": "Boolean"
      },
      "url": {
        "type": "String"
      },
      "forks_url": {
        "type": "String"
      },
      "keys_url": {
        "type": "String"
      },
      "collaborators_url": {
        "type": "String"
      },
      "teams_url": {
        "type": "String"
      },
      "hooks_url": {
        "type": "String"
      },
      "issue_events_url": {
        "type": "String"
      },
      "events_url": {
        "type": "String"
      },
      "assignees_url": {
        "type": "String"
      },
      "branches_url": {
        "type": "String"
      },
      "tags_url": {
        "type": "String"
      },
      "blobs_url": {
        "type": "String"
      },
      "git_tags_url": {
        "type": "String"
      },
      "git_refs_url": {
        "type": "String"
      },
      "trees_url": {
        "type": "String"
      },
      "statuses_url": {
        "type": "String"
      },
      "languages_url": {
        "type": "String"
      },
      "stargazers_url": {
        "type": "String"
      },
      "contributors_url": {
        "type": "String"
      },
      "subscribers_url": {
        "type": "String"
      },
      "subscription_url": {
        "type": "String"
      },
      "commits_url": {
        "type": "String"
      },
      "git_commits_url": {
        "type": "String"
      },
      "comments_url": {
        "type": "String"
      },
      "issue_comment_url": {
        "type": "String"
      },
      "contents_url": {
        "type": "String"
      },
      "compare_url": {
        "type": "String"
      },
      "merges_url": {
        "type": "String"
      },
      "archive_url": {
        "type": "String"
      },
      "downloads_url": {
        "type": "String"
      },
      "issues_url": {
        "type": "String"
      },
      "pulls_url": {
        "type": "String"
      },
      "milestones_url": {
        "type": "String"
      },
      "notifications_url": {
        "type": "String"
      },
      "labels_url": {
        "type": "String"
      },
      "releases_url": {
        "type": "String"
      },
      "deployments_url": {
        "type": "String"
      },
      "created_at": {
        "type": "Date"
      },
      "updated_at": {
        "type": "Date"
      },
      "pushed_at": {
        "type": "Date"
      },
      "git_url": {
        "type": "String"
      },
      "ssh_url": {
        "type": "String"
      },
      "clone_url": {
        "type": "String"
      },
      "svn_url": {
        "type": "String"
      },
      "homepage": {
        "type": "Mixed"
      },
      "size": {
        "type": "Number"
      },
      "stargazers_count": {
        "type": "Number"
      },
      "watchers_count": {
        "type": "Number"
      },
      "language": {
        "type": "String"
      },
      "has_issues": {
        "type": "Boolean"
      },
      "has_projects": {
        "type": "Boolean"
      },
      "has_downloads": {
        "type": "Boolean"
      },
      "has_wiki": {
        "type": "Boolean"
      },
      "has_pages": {
        "type": "Boolean"
      },
      "forks_count": {
        "type": "Number"
      },
      "mirror_url": {
        "type": "Mixed"
      },
      "archived": {
        "type": "Boolean"
      },
      "disabled": {
        "type": "Boolean"
      },
      "open_issues_count": {
        "type": "Number"
      },
      "license": {
        "type": "Mixed"
      },
      "forks": {
        "type": "Number"
      },
      "open_issues": {
        "type": "Number"
      },
      "watchers": {
        "type": "Number"
      },
      "default_branch": {
        "type": "String"
      }
    },
    "7": {
      "id": {
        "type": "Number"
      },
      "node_id": {
        "type": "String"
      },
      "name": {
        "type": "String"
      },
      "full_name": {
        "type": "String"
      },
      "private": {
        "type": "Boolean"
      },
      "owner": {
        "login": {
          "type": "String"
        },
        "id": {
          "type": "Number"
        },
        "node_id": {
          "type": "String"
        },
        "avatar_url": {
          "type": "String"
        },
        "gravatar_id": {
          "type": "String"
        },
        "url": {
          "type": "String"
        },
        "html_url": {
          "type": "String"
        },
        "followers_url": {
          "type": "String"
        },
        "following_url": {
          "type": "String"
        },
        "gists_url": {
          "type": "String"
        },
        "starred_url": {
          "type": "String"
        },
        "subscriptions_url": {
          "type": "String"
        },
        "organizations_url": {
          "type": "String"
        },
        "repos_url": {
          "type": "String"
        },
        "events_url": {
          "type": "String"
        },
        "received_events_url": {
          "type": "String"
        },
        "type": {
          "type": "String"
        },
        "site_admin": {
          "type": "Boolean"
        }
      },
      "html_url": {
        "type": "String"
      },
      "description": {
        "type": "Mixed"
      },
      "fork": {
        "type": "Boolean"
      },
      "url": {
        "type": "String"
      },
      "forks_url": {
        "type": "String"
      },
      "keys_url": {
        "type": "String"
      },
      "collaborators_url": {
        "type": "String"
      },
      "teams_url": {
        "type": "String"
      },
      "hooks_url": {
        "type": "String"
      },
      "issue_events_url": {
        "type": "String"
      },
      "events_url": {
        "type": "String"
      },
      "assignees_url": {
        "type": "String"
      },
      "branches_url": {
        "type": "String"
      },
      "tags_url": {
        "type": "String"
      },
      "blobs_url": {
        "type": "String"
      },
      "git_tags_url": {
        "type": "String"
      },
      "git_refs_url": {
        "type": "String"
      },
      "trees_url": {
        "type": "String"
      },
      "statuses_url": {
        "type": "String"
      },
      "languages_url": {
        "type": "String"
      },
      "stargazers_url": {
        "type": "String"
      },
      "contributors_url": {
        "type": "String"
      },
      "subscribers_url": {
        "type": "String"
      },
      "subscription_url": {
        "type": "String"
      },
      "commits_url": {
        "type": "String"
      },
      "git_commits_url": {
        "type": "String"
      },
      "comments_url": {
        "type": "String"
      },
      "issue_comment_url": {
        "type": "String"
      },
      "contents_url": {
        "type": "String"
      },
      "compare_url": {
        "type": "String"
      },
      "merges_url": {
        "type": "String"
      },
      "archive_url": {
        "type": "String"
      },
      "downloads_url": {
        "type": "String"
      },
      "issues_url": {
        "type": "String"
      },
      "pulls_url": {
        "type": "String"
      },
      "milestones_url": {
        "type": "String"
      },
      "notifications_url": {
        "type": "String"
      },
      "labels_url": {
        "type": "String"
      },
      "releases_url": {
        "type": "String"
      },
      "deployments_url": {
        "type": "String"
      },
      "created_at": {
        "type": "Date"
      },
      "updated_at": {
        "type": "Date"
      },
      "pushed_at": {
        "type": "Date"
      },
      "git_url": {
        "type": "String"
      },
      "ssh_url": {
        "type": "String"
      },
      "clone_url": {
        "type": "String"
      },
      "svn_url": {
        "type": "String"
      },
      "homepage": {
        "type": "Mixed"
      },
      "size": {
        "type": "Number"
      },
      "stargazers_count": {
        "type": "Number"
      },
      "watchers_count": {
        "type": "Number"
      },
      "language": {
        "type": "String"
      },
      "has_issues": {
        "type": "Boolean"
      },
      "has_projects": {
        "type": "Boolean"
      },
      "has_downloads": {
        "type": "Boolean"
      },
      "has_wiki": {
        "type": "Boolean"
      },
      "has_pages": {
        "type": "Boolean"
      },
      "forks_count": {
        "type": "Number"
      },
      "mirror_url": {
        "type": "Mixed"
      },
      "archived": {
        "type": "Boolean"
      },
      "disabled": {
        "type": "Boolean"
      },
      "open_issues_count": {
        "type": "Number"
      },
      "license": {
        "type": "Mixed"
      },
      "forks": {
        "type": "Number"
      },
      "open_issues": {
        "type": "Number"
      },
      "watchers": {
        "type": "Number"
      },
      "default_branch": {
        "type": "String"
      }
    },
    "8": {
      "id": {
        "type": "Number"
      },
      "node_id": {
        "type": "String"
      },
      "name": {
        "type": "String"
      },
      "full_name": {
        "type": "String"
      },
      "private": {
        "type": "Boolean"
      },
      "owner": {
        "login": {
          "type": "String"
        },
        "id": {
          "type": "Number"
        },
        "node_id": {
          "type": "String"
        },
        "avatar_url": {
          "type": "String"
        },
        "gravatar_id": {
          "type": "String"
        },
        "url": {
          "type": "String"
        },
        "html_url": {
          "type": "String"
        },
        "followers_url": {
          "type": "String"
        },
        "following_url": {
          "type": "String"
        },
        "gists_url": {
          "type": "String"
        },
        "starred_url": {
          "type": "String"
        },
        "subscriptions_url": {
          "type": "String"
        },
        "organizations_url": {
          "type": "String"
        },
        "repos_url": {
          "type": "String"
        },
        "events_url": {
          "type": "String"
        },
        "received_events_url": {
          "type": "String"
        },
        "type": {
          "type": "String"
        },
        "site_admin": {
          "type": "Boolean"
        }
      },
      "html_url": {
        "type": "String"
      },
      "description": {
        "type": "Mixed"
      },
      "fork": {
        "type": "Boolean"
      },
      "url": {
        "type": "String"
      },
      "forks_url": {
        "type": "String"
      },
      "keys_url": {
        "type": "String"
      },
      "collaborators_url": {
        "type": "String"
      },
      "teams_url": {
        "type": "String"
      },
      "hooks_url": {
        "type": "String"
      },
      "issue_events_url": {
        "type": "String"
      },
      "events_url": {
        "type": "String"
      },
      "assignees_url": {
        "type": "String"
      },
      "branches_url": {
        "type": "String"
      },
      "tags_url": {
        "type": "String"
      },
      "blobs_url": {
        "type": "String"
      },
      "git_tags_url": {
        "type": "String"
      },
      "git_refs_url": {
        "type": "String"
      },
      "trees_url": {
        "type": "String"
      },
      "statuses_url": {
        "type": "String"
      },
      "languages_url": {
        "type": "String"
      },
      "stargazers_url": {
        "type": "String"
      },
      "contributors_url": {
        "type": "String"
      },
      "subscribers_url": {
        "type": "String"
      },
      "subscription_url": {
        "type": "String"
      },
      "commits_url": {
        "type": "String"
      },
      "git_commits_url": {
        "type": "String"
      },
      "comments_url": {
        "type": "String"
      },
      "issue_comment_url": {
        "type": "String"
      },
      "contents_url": {
        "type": "String"
      },
      "compare_url": {
        "type": "String"
      },
      "merges_url": {
        "type": "String"
      },
      "archive_url": {
        "type": "String"
      },
      "downloads_url": {
        "type": "String"
      },
      "issues_url": {
        "type": "String"
      },
      "pulls_url": {
        "type": "String"
      },
      "milestones_url": {
        "type": "String"
      },
      "notifications_url": {
        "type": "String"
      },
      "labels_url": {
        "type": "String"
      },
      "releases_url": {
        "type": "String"
      },
      "deployments_url": {
        "type": "String"
      },
      "created_at": {
        "type": "Date"
      },
      "updated_at": {
        "type": "Date"
      },
      "pushed_at": {
        "type": "Date"
      },
      "git_url": {
        "type": "String"
      },
      "ssh_url": {
        "type": "String"
      },
      "clone_url": {
        "type": "String"
      },
      "svn_url": {
        "type": "String"
      },
      "homepage": {
        "type": "Mixed"
      },
      "size": {
        "type": "Number"
      },
      "stargazers_count": {
        "type": "Number"
      },
      "watchers_count": {
        "type": "Number"
      },
      "language": {
        "type": "String"
      },
      "has_issues": {
        "type": "Boolean"
      },
      "has_projects": {
        "type": "Boolean"
      },
      "has_downloads": {
        "type": "Boolean"
      },
      "has_wiki": {
        "type": "Boolean"
      },
      "has_pages": {
        "type": "Boolean"
      },
      "forks_count": {
        "type": "Number"
      },
      "mirror_url": {
        "type": "Mixed"
      },
      "archived": {
        "type": "Boolean"
      },
      "disabled": {
        "type": "Boolean"
      },
      "open_issues_count": {
        "type": "Number"
      },
      "license": {
        "type": "Mixed"
      },
      "forks": {
        "type": "Number"
      },
      "open_issues": {
        "type": "Number"
      },
      "watchers": {
        "type": "Number"
      },
      "default_branch": {
        "type": "String"
      }
    },
    "9": {
      "id": {
        "type": "Number"
      },
      "node_id": {
        "type": "String"
      },
      "name": {
        "type": "String"
      },
      "full_name": {
        "type": "String"
      },
      "private": {
        "type": "Boolean"
      },
      "owner": {
        "login": {
          "type": "String"
        },
        "id": {
          "type": "Number"
        },
        "node_id": {
          "type": "String"
        },
        "avatar_url": {
          "type": "String"
        },
        "gravatar_id": {
          "type": "String"
        },
        "url": {
          "type": "String"
        },
        "html_url": {
          "type": "String"
        },
        "followers_url": {
          "type": "String"
        },
        "following_url": {
          "type": "String"
        },
        "gists_url": {
          "type": "String"
        },
        "starred_url": {
          "type": "String"
        },
        "subscriptions_url": {
          "type": "String"
        },
        "organizations_url": {
          "type": "String"
        },
        "repos_url": {
          "type": "String"
        },
        "events_url": {
          "type": "String"
        },
        "received_events_url": {
          "type": "String"
        },
        "type": {
          "type": "String"
        },
        "site_admin": {
          "type": "Boolean"
        }
      },
      "html_url": {
        "type": "String"
      },
      "description": {
        "type": "Mixed"
      },
      "fork": {
        "type": "Boolean"
      },
      "url": {
        "type": "String"
      },
      "forks_url": {
        "type": "String"
      },
      "keys_url": {
        "type": "String"
      },
      "collaborators_url": {
        "type": "String"
      },
      "teams_url": {
        "type": "String"
      },
      "hooks_url": {
        "type": "String"
      },
      "issue_events_url": {
        "type": "String"
      },
      "events_url": {
        "type": "String"
      },
      "assignees_url": {
        "type": "String"
      },
      "branches_url": {
        "type": "String"
      },
      "tags_url": {
        "type": "String"
      },
      "blobs_url": {
        "type": "String"
      },
      "git_tags_url": {
        "type": "String"
      },
      "git_refs_url": {
        "type": "String"
      },
      "trees_url": {
        "type": "String"
      },
      "statuses_url": {
        "type": "String"
      },
      "languages_url": {
        "type": "String"
      },
      "stargazers_url": {
        "type": "String"
      },
      "contributors_url": {
        "type": "String"
      },
      "subscribers_url": {
        "type": "String"
      },
      "subscription_url": {
        "type": "String"
      },
      "commits_url": {
        "type": "String"
      },
      "git_commits_url": {
        "type": "String"
      },
      "comments_url": {
        "type": "String"
      },
      "issue_comment_url": {
        "type": "String"
      },
      "contents_url": {
        "type": "String"
      },
      "compare_url": {
        "type": "String"
      },
      "merges_url": {
        "type": "String"
      },
      "archive_url": {
        "type": "String"
      },
      "downloads_url": {
        "type": "String"
      },
      "issues_url": {
        "type": "String"
      },
      "pulls_url": {
        "type": "String"
      },
      "milestones_url": {
        "type": "String"
      },
      "notifications_url": {
        "type": "String"
      },
      "labels_url": {
        "type": "String"
      },
      "releases_url": {
        "type": "String"
      },
      "deployments_url": {
        "type": "String"
      },
      "created_at": {
        "type": "Date"
      },
      "updated_at": {
        "type": "Date"
      },
      "pushed_at": {
        "type": "Date"
      },
      "git_url": {
        "type": "String"
      },
      "ssh_url": {
        "type": "String"
      },
      "clone_url": {
        "type": "String"
      },
      "svn_url": {
        "type": "String"
      },
      "homepage": {
        "type": "Mixed"
      },
      "size": {
        "type": "Number"
      },
      "stargazers_count": {
        "type": "Number"
      },
      "watchers_count": {
        "type": "Number"
      },
      "language": {
        "type": "String"
      },
      "has_issues": {
        "type": "Boolean"
      },
      "has_projects": {
        "type": "Boolean"
      },
      "has_downloads": {
        "type": "Boolean"
      },
      "has_wiki": {
        "type": "Boolean"
      },
      "has_pages": {
        "type": "Boolean"
      },
      "forks_count": {
        "type": "Number"
      },
      "mirror_url": {
        "type": "Mixed"
      },
      "archived": {
        "type": "Boolean"
      },
      "disabled": {
        "type": "Boolean"
      },
      "open_issues_count": {
        "type": "Number"
      },
      "license": {
        "type": "Mixed"
      },
      "forks": {
        "type": "Number"
      },
      "open_issues": {
        "type": "Number"
      },
      "watchers": {
        "type": "Number"
      },
      "default_branch": {
        "type": "String"
      }
    },
    "10": {
      "id": {
        "type": "Number"
      },
      "node_id": {
        "type": "String"
      },
      "name": {
        "type": "String"
      },
      "full_name": {
        "type": "String"
      },
      "private": {
        "type": "Boolean"
      },
      "owner": {
        "login": {
          "type": "String"
        },
        "id": {
          "type": "Number"
        },
        "node_id": {
          "type": "String"
        },
        "avatar_url": {
          "type": "String"
        },
        "gravatar_id": {
          "type": "String"
        },
        "url": {
          "type": "String"
        },
        "html_url": {
          "type": "String"
        },
        "followers_url": {
          "type": "String"
        },
        "following_url": {
          "type": "String"
        },
        "gists_url": {
          "type": "String"
        },
        "starred_url": {
          "type": "String"
        },
        "subscriptions_url": {
          "type": "String"
        },
        "organizations_url": {
          "type": "String"
        },
        "repos_url": {
          "type": "String"
        },
        "events_url": {
          "type": "String"
        },
        "received_events_url": {
          "type": "String"
        },
        "type": {
          "type": "String"
        },
        "site_admin": {
          "type": "Boolean"
        }
      },
      "html_url": {
        "type": "String"
      },
      "description": {
        "type": "Mixed"
      },
      "fork": {
        "type": "Boolean"
      },
      "url": {
        "type": "String"
      },
      "forks_url": {
        "type": "String"
      },
      "keys_url": {
        "type": "String"
      },
      "collaborators_url": {
        "type": "String"
      },
      "teams_url": {
        "type": "String"
      },
      "hooks_url": {
        "type": "String"
      },
      "issue_events_url": {
        "type": "String"
      },
      "events_url": {
        "type": "String"
      },
      "assignees_url": {
        "type": "String"
      },
      "branches_url": {
        "type": "String"
      },
      "tags_url": {
        "type": "String"
      },
      "blobs_url": {
        "type": "String"
      },
      "git_tags_url": {
        "type": "String"
      },
      "git_refs_url": {
        "type": "String"
      },
      "trees_url": {
        "type": "String"
      },
      "statuses_url": {
        "type": "String"
      },
      "languages_url": {
        "type": "String"
      },
      "stargazers_url": {
        "type": "String"
      },
      "contributors_url": {
        "type": "String"
      },
      "subscribers_url": {
        "type": "String"
      },
      "subscription_url": {
        "type": "String"
      },
      "commits_url": {
        "type": "String"
      },
      "git_commits_url": {
        "type": "String"
      },
      "comments_url": {
        "type": "String"
      },
      "issue_comment_url": {
        "type": "String"
      },
      "contents_url": {
        "type": "String"
      },
      "compare_url": {
        "type": "String"
      },
      "merges_url": {
        "type": "String"
      },
      "archive_url": {
        "type": "String"
      },
      "downloads_url": {
        "type": "String"
      },
      "issues_url": {
        "type": "String"
      },
      "pulls_url": {
        "type": "String"
      },
      "milestones_url": {
        "type": "String"
      },
      "notifications_url": {
        "type": "String"
      },
      "labels_url": {
        "type": "String"
      },
      "releases_url": {
        "type": "String"
      },
      "deployments_url": {
        "type": "String"
      },
      "created_at": {
        "type": "Date"
      },
      "updated_at": {
        "type": "Date"
      },
      "pushed_at": {
        "type": "Date"
      },
      "git_url": {
        "type": "String"
      },
      "ssh_url": {
        "type": "String"
      },
      "clone_url": {
        "type": "String"
      },
      "svn_url": {
        "type": "String"
      },
      "homepage": {
        "type": "Mixed"
      },
      "size": {
        "type": "Number"
      },
      "stargazers_count": {
        "type": "Number"
      },
      "watchers_count": {
        "type": "Number"
      },
      "language": {
        "type": "String"
      },
      "has_issues": {
        "type": "Boolean"
      },
      "has_projects": {
        "type": "Boolean"
      },
      "has_downloads": {
        "type": "Boolean"
      },
      "has_wiki": {
        "type": "Boolean"
      },
      "has_pages": {
        "type": "Boolean"
      },
      "forks_count": {
        "type": "Number"
      },
      "mirror_url": {
        "type": "Mixed"
      },
      "archived": {
        "type": "Boolean"
      },
      "disabled": {
        "type": "Boolean"
      },
      "open_issues_count": {
        "type": "Number"
      },
      "license": {
        "type": "Mixed"
      },
      "forks": {
        "type": "Number"
      },
      "open_issues": {
        "type": "Number"
      },
      "watchers": {
        "type": "Number"
      },
      "default_branch": {
        "type": "String"
      }
    },
    "11": {
      "id": {
        "type": "Number"
      },
      "node_id": {
        "type": "String"
      },
      "name": {
        "type": "String"
      },
      "full_name": {
        "type": "String"
      },
      "private": {
        "type": "Boolean"
      },
      "owner": {
        "login": {
          "type": "String"
        },
        "id": {
          "type": "Number"
        },
        "node_id": {
          "type": "String"
        },
        "avatar_url": {
          "type": "String"
        },
        "gravatar_id": {
          "type": "String"
        },
        "url": {
          "type": "String"
        },
        "html_url": {
          "type": "String"
        },
        "followers_url": {
          "type": "String"
        },
        "following_url": {
          "type": "String"
        },
        "gists_url": {
          "type": "String"
        },
        "starred_url": {
          "type": "String"
        },
        "subscriptions_url": {
          "type": "String"
        },
        "organizations_url": {
          "type": "String"
        },
        "repos_url": {
          "type": "String"
        },
        "events_url": {
          "type": "String"
        },
        "received_events_url": {
          "type": "String"
        },
        "type": {
          "type": "String"
        },
        "site_admin": {
          "type": "Boolean"
        }
      },
      "html_url": {
        "type": "String"
      },
      "description": {
        "type": "Mixed"
      },
      "fork": {
        "type": "Boolean"
      },
      "url": {
        "type": "String"
      },
      "forks_url": {
        "type": "String"
      },
      "keys_url": {
        "type": "String"
      },
      "collaborators_url": {
        "type": "String"
      },
      "teams_url": {
        "type": "String"
      },
      "hooks_url": {
        "type": "String"
      },
      "issue_events_url": {
        "type": "String"
      },
      "events_url": {
        "type": "String"
      },
      "assignees_url": {
        "type": "String"
      },
      "branches_url": {
        "type": "String"
      },
      "tags_url": {
        "type": "String"
      },
      "blobs_url": {
        "type": "String"
      },
      "git_tags_url": {
        "type": "String"
      },
      "git_refs_url": {
        "type": "String"
      },
      "trees_url": {
        "type": "String"
      },
      "statuses_url": {
        "type": "String"
      },
      "languages_url": {
        "type": "String"
      },
      "stargazers_url": {
        "type": "String"
      },
      "contributors_url": {
        "type": "String"
      },
      "subscribers_url": {
        "type": "String"
      },
      "subscription_url": {
        "type": "String"
      },
      "commits_url": {
        "type": "String"
      },
      "git_commits_url": {
        "type": "String"
      },
      "comments_url": {
        "type": "String"
      },
      "issue_comment_url": {
        "type": "String"
      },
      "contents_url": {
        "type": "String"
      },
      "compare_url": {
        "type": "String"
      },
      "merges_url": {
        "type": "String"
      },
      "archive_url": {
        "type": "String"
      },
      "downloads_url": {
        "type": "String"
      },
      "issues_url": {
        "type": "String"
      },
      "pulls_url": {
        "type": "String"
      },
      "milestones_url": {
        "type": "String"
      },
      "notifications_url": {
        "type": "String"
      },
      "labels_url": {
        "type": "String"
      },
      "releases_url": {
        "type": "String"
      },
      "deployments_url": {
        "type": "String"
      },
      "created_at": {
        "type": "Date"
      },
      "updated_at": {
        "type": "Date"
      },
      "pushed_at": {
        "type": "Date"
      },
      "git_url": {
        "type": "String"
      },
      "ssh_url": {
        "type": "String"
      },
      "clone_url": {
        "type": "String"
      },
      "svn_url": {
        "type": "String"
      },
      "homepage": {
        "type": "Mixed"
      },
      "size": {
        "type": "Number"
      },
      "stargazers_count": {
        "type": "Number"
      },
      "watchers_count": {
        "type": "Number"
      },
      "language": {
        "type": "String"
      },
      "has_issues": {
        "type": "Boolean"
      },
      "has_projects": {
        "type": "Boolean"
      },
      "has_downloads": {
        "type": "Boolean"
      },
      "has_wiki": {
        "type": "Boolean"
      },
      "has_pages": {
        "type": "Boolean"
      },
      "forks_count": {
        "type": "Number"
      },
      "mirror_url": {
        "type": "Mixed"
      },
      "archived": {
        "type": "Boolean"
      },
      "disabled": {
        "type": "Boolean"
      },
      "open_issues_count": {
        "type": "Number"
      },
      "license": {
        "type": "Mixed"
      },
      "forks": {
        "type": "Number"
      },
      "open_issues": {
        "type": "Number"
      },
      "watchers": {
        "type": "Number"
      },
      "default_branch": {
        "type": "String"
      }
    },
    "12": {
      "id": {
        "type": "Number"
      },
      "node_id": {
        "type": "String"
      },
      "name": {
        "type": "Date"
      },
      "full_name": {
        "type": "Date"
      },
      "private": {
        "type": "Boolean"
      },
      "owner": {
        "login": {
          "type": "String"
        },
        "id": {
          "type": "Number"
        },
        "node_id": {
          "type": "String"
        },
        "avatar_url": {
          "type": "String"
        },
        "gravatar_id": {
          "type": "String"
        },
        "url": {
          "type": "String"
        },
        "html_url": {
          "type": "String"
        },
        "followers_url": {
          "type": "String"
        },
        "following_url": {
          "type": "String"
        },
        "gists_url": {
          "type": "String"
        },
        "starred_url": {
          "type": "String"
        },
        "subscriptions_url": {
          "type": "String"
        },
        "organizations_url": {
          "type": "String"
        },
        "repos_url": {
          "type": "String"
        },
        "events_url": {
          "type": "String"
        },
        "received_events_url": {
          "type": "String"
        },
        "type": {
          "type": "String"
        },
        "site_admin": {
          "type": "Boolean"
        }
      },
      "html_url": {
        "type": "Date"
      },
      "description": {
        "type": "Mixed"
      },
      "fork": {
        "type": "Boolean"
      },
      "url": {
        "type": "Date"
      },
      "forks_url": {
        "type": "String"
      },
      "keys_url": {
        "type": "String"
      },
      "collaborators_url": {
        "type": "String"
      },
      "teams_url": {
        "type": "String"
      },
      "hooks_url": {
        "type": "String"
      },
      "issue_events_url": {
        "type": "String"
      },
      "events_url": {
        "type": "String"
      },
      "assignees_url": {
        "type": "String"
      },
      "branches_url": {
        "type": "String"
      },
      "tags_url": {
        "type": "String"
      },
      "blobs_url": {
        "type": "String"
      },
      "git_tags_url": {
        "type": "String"
      },
      "git_refs_url": {
        "type": "String"
      },
      "trees_url": {
        "type": "String"
      },
      "statuses_url": {
        "type": "String"
      },
      "languages_url": {
        "type": "String"
      },
      "stargazers_url": {
        "type": "String"
      },
      "contributors_url": {
        "type": "String"
      },
      "subscribers_url": {
        "type": "String"
      },
      "subscription_url": {
        "type": "String"
      },
      "commits_url": {
        "type": "String"
      },
      "git_commits_url": {
        "type": "String"
      },
      "comments_url": {
        "type": "String"
      },
      "issue_comment_url": {
        "type": "String"
      },
      "contents_url": {
        "type": "String"
      },
      "compare_url": {
        "type": "String"
      },
      "merges_url": {
        "type": "String"
      },
      "archive_url": {
        "type": "String"
      },
      "downloads_url": {
        "type": "String"
      },
      "issues_url": {
        "type": "String"
      },
      "pulls_url": {
        "type": "String"
      },
      "milestones_url": {
        "type": "String"
      },
      "notifications_url": {
        "type": "String"
      },
      "labels_url": {
        "type": "String"
      },
      "releases_url": {
        "type": "String"
      },
      "deployments_url": {
        "type": "String"
      },
      "created_at": {
        "type": "Date"
      },
      "updated_at": {
        "type": "Date"
      },
      "pushed_at": {
        "type": "Date"
      },
      "git_url": {
        "type": "String"
      },
      "ssh_url": {
        "type": "String"
      },
      "clone_url": {
        "type": "String"
      },
      "svn_url": {
        "type": "Date"
      },
      "homepage": {
        "type": "Mixed"
      },
      "size": {
        "type": "Number"
      },
      "stargazers_count": {
        "type": "Number"
      },
      "watchers_count": {
        "type": "Number"
      },
      "language": {
        "type": "String"
      },
      "has_issues": {
        "type": "Boolean"
      },
      "has_projects": {
        "type": "Boolean"
      },
      "has_downloads": {
        "type": "Boolean"
      },
      "has_wiki": {
        "type": "Boolean"
      },
      "has_pages": {
        "type": "Boolean"
      },
      "forks_count": {
        "type": "Number"
      },
      "mirror_url": {
        "type": "Mixed"
      },
      "archived": {
        "type": "Boolean"
      },
      "disabled": {
        "type": "Boolean"
      },
      "open_issues_count": {
        "type": "Number"
      },
      "license": {
        "type": "Mixed"
      },
      "forks": {
        "type": "Number"
      },
      "open_issues": {
        "type": "Number"
      },
      "watchers": {
        "type": "Number"
      },
      "default_branch": {
        "type": "String"
      }
    }
  }
);

let Repo = mongoose.model('Repo', repoSchema);

let save = (data,callback) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
   var aRepo = new Repo(data)
  aRepo.save(function (err){
    if(err) {callback(err)}
    else{ callback('saved !')}
  })
}

let find = (data,callback) => {
  Repo.find(function (err, repos) {
    if (err)console.error(err);
    callback(repos)
   // console.log(repos);
  })

}

module.exports.save = save;
module.exports.find = find;