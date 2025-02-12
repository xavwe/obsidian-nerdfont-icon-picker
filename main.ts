import { App, Editor, MarkdownView, Plugin, FuzzySuggestModal } from 'obsidian';
const icon = "test";

export default class NerdfontPicker extends Plugin {
	onload() {
		this.addCommand({
			id: 'insert-icon',
			name: 'insert icon',
			checkCallback: (checking: boolean) => {
				const markdownView = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (markdownView) {
					if (!checking) {
						new IconSearch(this.app).open();
					}
					return true;
				}
			}
		});
	}
}


const TITLE = [
{
	title: "cod-account",
	icon: "",
},
{
	title: "cod-activate_breakpoints",
	icon: "",
},
{
	title: "cod-add",
	icon: "",
},
{
	title: "cod-archive",
	icon: "",
},
{
	title: "cod-arrow_both",
	icon: "",
},
{
	title: "cod-arrow_circle_down",
	icon: "",
},
{
	title: "cod-arrow_circle_left",
	icon: "",
},
{
	title: "cod-arrow_circle_right",
	icon: "",
},
{
	title: "cod-arrow_circle_up",
	icon: "",
},
{
	title: "cod-arrow_down",
	icon: "",
},
{
	title: "cod-arrow_left",
	icon: "",
},
{
	title: "cod-arrow_right",
	icon: "",
},
{
	title: "cod-arrow_small_down",
	icon: "",
},
{
	title: "cod-arrow_small_left",
	icon: "",
},
{
	title: "cod-arrow_small_right",
	icon: "",
},
{
	title: "cod-arrow_small_up",
	icon: "",
},
{
	title: "cod-arrow_swap",
	icon: "",
},
{
	title: "cod-arrow_up",
	icon: "",
},
{
	title: "cod-azure",
	icon: "",
},
{
	title: "cod-azure_devops",
	icon: "",
},
{
	title: "cod-beaker",
	icon: "",
},
{
	title: "cod-beaker_stop",
	icon: "",
},
{
	title: "cod-bell",
	icon: "",
},
{
	title: "cod-bell_dot",
	icon: "",
},
{
	title: "cod-bell_slash",
	icon: "",
},
{
	title: "cod-bell_slash_dot",
	icon: "",
},
{
	title: "cod-blank",
	icon: "",
},
{
	title: "cod-bold",
	icon: "",
},
{
	title: "cod-book",
	icon: "",
},
{
	title: "cod-bookmark",
	icon: "",
},
{
	title: "cod-bracket_dot",
	icon: "",
},
{
	title: "cod-bracket_error",
	icon: "",
},
{
	title: "cod-briefcase",
	icon: "",
},
{
	title: "cod-broadcast",
	icon: "",
},
{
	title: "cod-browser",
	icon: "",
},
{
	title: "cod-bug",
	icon: "",
},
{
	title: "cod-calendar",
	icon: "",
},
{
	title: "cod-call_incoming",
	icon: "",
},
{
	title: "cod-call_outgoing",
	icon: "",
},
{
	title: "cod-case_sensitive",
	icon: "",
},
{
	title: "cod-check",
	icon: "",
},
{
	title: "cod-check_all",
	icon: "",
},
{
	title: "cod-checklist",
	icon: "",
},
{
	title: "cod-chevron_down",
	icon: "",
},
{
	title: "cod-chevron_left",
	icon: "",
},
{
	title: "cod-chevron_right",
	icon: "",
},
{
	title: "cod-chevron_up",
	icon: "",
},
{
	title: "cod-chip",
	icon: "",
},
{
	title: "cod-chrome_close",
	icon: "",
},
{
	title: "cod-chrome_maximize",
	icon: "",
},
{
	title: "cod-chrome_minimize",
	icon: "",
},
{
	title: "cod-chrome_restore",
	icon: "",
},
{
	title: "cod-circle",
	icon: "",
},
{
	title: "cod-circle_filled",
	icon: "",
},
{
	title: "cod-circle_large",
	icon: "",
},
{
	title: "cod-circle_large_filled",
	icon: "",
},
{
	title: "cod-circle_slash",
	icon: "",
},
{
	title: "cod-circle_small",
	icon: "",
},
{
	title: "cod-circle_small_filled",
	icon: "",
},
{
	title: "cod-circuit_board",
	icon: "",
},
{
	title: "cod-clear_all",
	icon: "",
},
{
	title: "cod-clippy",
	icon: "",
},
{
	title: "cod-close",
	icon: "",
},
{
	title: "cod-close_all",
	icon: "",
},
{
	title: "cod-cloud",
	icon: "",
},
{
	title: "cod-cloud_download",
	icon: "",
},
{
	title: "cod-cloud_upload",
	icon: "",
},
{
	title: "cod-code",
	icon: "",
},
{
	title: "cod-coffee",
	icon: "",
},
{
	title: "cod-collapse_all",
	icon: "",
},
{
	title: "cod-color_mode",
	icon: "",
},
{
	title: "cod-combine",
	icon: "",
},
{
	title: "cod-comment",
	icon: "",
},
{
	title: "cod-comment_discussion",
	icon: "",
},
{
	title: "cod-comment_draft",
	icon: "",
},
{
	title: "cod-comment_unresolved",
	icon: "",
},
{
	title: "cod-compass",
	icon: "",
},
{
	title: "cod-compass_active",
	icon: "",
},
{
	title: "cod-compass_dot",
	icon: "",
},
{
	title: "cod-copilot",
	icon: "",
},
{
	title: "cod-copy",
	icon: "",
},
{
	title: "cod-credit_card",
	icon: "",
},
{
	title: "cod-dash",
	icon: "",
},
{
	title: "cod-dashboard",
	icon: "",
},
{
	title: "cod-database",
	icon: "",
},
{
	title: "cod-debug",
	icon: "",
},
{
	title: "cod-debug_all",
	icon: "",
},
{
	title: "cod-debug_alt",
	icon: "",
},
{
	title: "cod-debug_alt_small",
	icon: "",
},
{
	title: "cod-debug_breakpoint_conditional",
	icon: "",
},
{
	title: "cod-debug_breakpoint_conditional_unverified",
	icon: "",
},
{
	title: "cod-debug_breakpoint_data",
	icon: "",
},
{
	title: "cod-debug_breakpoint_data_unverified",
	icon: "",
},
{
	title: "cod-debug_breakpoint_function",
	icon: "",
},
{
	title: "cod-debug_breakpoint_function_unverified",
	icon: "",
},
{
	title: "cod-debug_breakpoint_log",
	icon: "",
},
{
	title: "cod-debug_breakpoint_log_unverified",
	icon: "",
},
{
	title: "cod-debug_breakpoint_unsupported",
	icon: "",
},
{
	title: "cod-debug_console",
	icon: "",
},
{
	title: "cod-debug_continue",
	icon: "",
},
{
	title: "cod-debug_continue_small",
	icon: "",
},
{
	title: "cod-debug_coverage",
	icon: "",
},
{
	title: "cod-debug_disconnect",
	icon: "",
},
{
	title: "cod-debug_line_by_line",
	icon: "",
},
{
	title: "cod-debug_pause",
	icon: "",
},
{
	title: "cod-debug_rerun",
	icon: "",
},
{
	title: "cod-debug_restart",
	icon: "",
},
{
	title: "cod-debug_restart_frame",
	icon: "",
},
{
	title: "cod-debug_reverse_continue",
	icon: "",
},
{
	title: "cod-debug_stackframe",
	icon: "",
},
{
	title: "cod-debug_stackframe_active",
	icon: "",
},
{
	title: "cod-debug_start",
	icon: "",
},
{
	title: "cod-debug_step_back",
	icon: "",
},
{
	title: "cod-debug_step_into",
	icon: "",
},
{
	title: "cod-debug_step_out",
	icon: "",
},
{
	title: "cod-debug_step_over",
	icon: "",
},
{
	title: "cod-debug_stop",
	icon: "",
},
{
	title: "cod-desktop_download",
	icon: "",
},
{
	title: "cod-device_camera",
	icon: "",
},
{
	title: "cod-device_camera_video",
	icon: "",
},
{
	title: "cod-device_mobile",
	icon: "",
},
{
	title: "cod-diff",
	icon: "",
},
{
	title: "cod-diff_added",
	icon: "",
},
{
	title: "cod-diff_ignored",
	icon: "",
},
{
	title: "cod-diff_modified",
	icon: "",
},
{
	title: "cod-diff_removed",
	icon: "",
},
{
	title: "cod-diff_renamed",
	icon: "",
},
{
	title: "cod-discard",
	icon: "",
},
{
	title: "cod-edit",
	icon: "",
},
{
	title: "cod-editor_layout",
	icon: "",
},
{
	title: "cod-ellipsis",
	icon: "",
},
{
	title: "cod-empty_window",
	icon: "",
},
{
	title: "cod-error",
	icon: "",
},
{
	title: "cod-error_small",
	icon: "",
},
{
	title: "cod-exclude",
	icon: "",
},
{
	title: "cod-expand_all",
	icon: "",
},
{
	title: "cod-export",
	icon: "",
},
{
	title: "cod-extensions",
	icon: "",
},
{
	title: "cod-eye",
	icon: "",
},
{
	title: "cod-eye_closed",
	icon: "",
},
{
	title: "cod-feedback",
	icon: "",
},
{
	title: "cod-file",
	icon: "",
},
{
	title: "cod-file_binary",
	icon: "",
},
{
	title: "cod-file_code",
	icon: "",
},
{
	title: "cod-file_media",
	icon: "",
},
{
	title: "cod-file_pdf",
	icon: "",
},
{
	title: "cod-file_submodule",
	icon: "",
},
{
	title: "cod-file_symlink_directory",
	icon: "",
},
{
	title: "cod-file_symlink_file",
	icon: "",
},
{
	title: "cod-file_zip",
	icon: "",
},
{
	title: "cod-files",
	icon: "",
},
{
	title: "cod-filter",
	icon: "",
},
{
	title: "cod-filter_filled",
	icon: "",
},
{
	title: "cod-flame",
	icon: "",
},
{
	title: "cod-fold",
	icon: "",
},
{
	title: "cod-fold_down",
	icon: "",
},
{
	title: "cod-fold_up",
	icon: "",
},
{
	title: "cod-folder",
	icon: "",
},
{
	title: "cod-folder_active",
	icon: "",
},
{
	title: "cod-folder_library",
	icon: "",
},
{
	title: "cod-folder_opened",
	icon: "",
},
{
	title: "cod-game",
	icon: "",
},
{
	title: "cod-gear",
	icon: "",
},
{
	title: "cod-gift",
	icon: "",
},
{
	title: "cod-gist_secret",
	icon: "",
},
{
	title: "cod-git_commit",
	icon: "",
},
{
	title: "cod-git_compare",
	icon: "",
},
{
	title: "cod-git_fetch",
	icon: "",
},
{
	title: "cod-git_merge",
	icon: "",
},
{
	title: "cod-git_pull_request",
	icon: "",
},
{
	title: "cod-git_pull_request_closed",
	icon: "",
},
{
	title: "cod-git_pull_request_create",
	icon: "",
},
{
	title: "cod-git_pull_request_draft",
	icon: "",
},
{
	title: "cod-git_pull_request_go_to_changes",
	icon: "",
},
{
	title: "cod-git_pull_request_new_changes",
	icon: "",
},
{
	title: "cod-github",
	icon: "",
},
{
	title: "cod-github_action",
	icon: "",
},
{
	title: "cod-github_alt",
	icon: "",
},
{
	title: "cod-github_inverted",
	icon: "",
},
{
	title: "cod-globe",
	icon: "",
},
{
	title: "cod-go_to_file",
	icon: "",
},
{
	title: "cod-grabber",
	icon: "",
},
{
	title: "cod-graph",
	icon: "",
},
{
	title: "cod-graph_left",
	icon: "",
},
{
	title: "cod-graph_line",
	icon: "",
},
{
	title: "cod-graph_scatter",
	icon: "",
},
{
	title: "cod-gripper",
	icon: "",
},
{
	title: "cod-group_by_ref_type",
	icon: "",
},
{
	title: "cod-heart",
	icon: "",
},
{
	title: "cod-heart_filled",
	icon: "",
},
{
	title: "cod-history",
	icon: "",
},
{
	title: "cod-home",
	icon: "",
},
{
	title: "cod-horizontal_rule",
	icon: "",
},
{
	title: "cod-hubot",
	icon: "",
},
{
	title: "cod-inbox",
	icon: "",
},
{
	title: "cod-indent",
	icon: "",
},
{
	title: "cod-info",
	icon: "",
},
{
	title: "cod-insert",
	icon: "",
},
{
	title: "cod-inspect",
	icon: "",
},
{
	title: "cod-issue_draft",
	icon: "",
},
{
	title: "cod-issue_reopened",
	icon: "",
},
{
	title: "cod-issues",
	icon: "",
},
{
	title: "cod-italic",
	icon: "",
},
{
	title: "cod-jersey",
	icon: "",
},
{
	title: "cod-json",
	icon: "",
},
{
	title: "cod-kebab_vertical",
	icon: "",
},
{
	title: "cod-key",
	icon: "",
},
{
	title: "cod-law",
	icon: "",
},
{
	title: "cod-layers",
	icon: "",
},
{
	title: "cod-layers_active",
	icon: "",
},
{
	title: "cod-layers_dot",
	icon: "",
},
{
	title: "cod-layout",
	icon: "",
},
{
	title: "cod-layout_activitybar_left",
	icon: "",
},
{
	title: "cod-layout_activitybar_right",
	icon: "",
},
{
	title: "cod-layout_centered",
	icon: "",
},
{
	title: "cod-layout_menubar",
	icon: "",
},
{
	title: "cod-layout_panel",
	icon: "",
},
{
	title: "cod-layout_panel_center",
	icon: "",
},
{
	title: "cod-layout_panel_justify",
	icon: "",
},
{
	title: "cod-layout_panel_left",
	icon: "",
},
{
	title: "cod-layout_panel_off",
	icon: "",
},
{
	title: "cod-layout_panel_right",
	icon: "",
},
{
	title: "cod-layout_sidebar_left",
	icon: "",
},
{
	title: "cod-layout_sidebar_left_off",
	icon: "",
},
{
	title: "cod-layout_sidebar_right",
	icon: "",
},
{
	title: "cod-layout_sidebar_right_off",
	icon: "",
},
{
	title: "cod-layout_statusbar",
	icon: "",
},
{
	title: "cod-library",
	icon: "",
},
{
	title: "cod-lightbulb",
	icon: "",
},
{
	title: "cod-lightbulb_autofix",
	icon: "",
},
{
	title: "cod-link",
	icon: "",
},
{
	title: "cod-link_external",
	icon: "",
},
{
	title: "cod-list_filter",
	icon: "",
},
{
	title: "cod-list_flat",
	icon: "",
},
{
	title: "cod-list_ordered",
	icon: "",
},
{
	title: "cod-list_selection",
	icon: "",
},
{
	title: "cod-list_tree",
	icon: "",
},
{
	title: "cod-list_unordered",
	icon: "",
},
{
	title: "cod-live_share",
	icon: "",
},
{
	title: "cod-loading",
	icon: "",
},
{
	title: "cod-location",
	icon: "",
},
{
	title: "cod-lock",
	icon: "",
},
{
	title: "cod-lock_small",
	icon: "",
},
{
	title: "cod-magnet",
	icon: "",
},
{
	title: "cod-mail",
	icon: "",
},
{
	title: "cod-mail_read",
	icon: "",
},
{
	title: "cod-map",
	icon: "",
},
{
	title: "cod-map_filled",
	icon: "",
},
{
	title: "cod-markdown",
	icon: "",
},
{
	title: "cod-megaphone",
	icon: "",
},
{
	title: "cod-mention",
	icon: "",
},
{
	title: "cod-menu",
	icon: "",
},
{
	title: "cod-merge",
	icon: "",
},
{
	title: "cod-mic",
	icon: "",
},
{
	title: "cod-mic_filled",
	icon: "",
},
{
	title: "cod-milestone",
	icon: "",
},
{
	title: "cod-mirror",
	icon: "",
},
{
	title: "cod-mortar_board",
	icon: "",
},
{
	title: "cod-move",
	icon: "",
},
{
	title: "cod-multiple_windows",
	icon: "",
},
{
	title: "cod-music",
	icon: "",
},
{
	title: "cod-mute",
	icon: "",
},
{
	title: "cod-new_file",
	icon: "",
},
{
	title: "cod-new_folder",
	icon: "",
},
{
	title: "cod-newline",
	icon: "",
},
{
	title: "cod-no_newline",
	icon: "",
},
{
	title: "cod-note",
	icon: "",
},
{
	title: "cod-notebook",
	icon: "",
},
{
	title: "cod-notebook_template",
	icon: "",
},
{
	title: "cod-octoface",
	icon: "",
},
{
	title: "cod-open_preview",
	icon: "",
},
{
	title: "cod-organization",
	icon: "",
},
{
	title: "cod-output",
	icon: "",
},
{
	title: "cod-package",
	icon: "",
},
{
	title: "cod-paintcan",
	icon: "",
},
{
	title: "cod-pass",
	icon: "",
},
{
	title: "cod-pass_filled",
	icon: "",
},
{
	title: "cod-person",
	icon: "",
},
{
	title: "cod-person_add",
	icon: "",
},
{
	title: "cod-piano",
	icon: "",
},
{
	title: "cod-pie_chart",
	icon: "",
},
{
	title: "cod-pin",
	icon: "",
},
{
	title: "cod-pinned",
	icon: "",
},
{
	title: "cod-pinned_dirty",
	icon: "",
},
{
	title: "cod-play",
	icon: "",
},
{
	title: "cod-play_circle",
	icon: "",
},
{
	title: "cod-plug",
	icon: "",
},
{
	title: "cod-preserve_case",
	icon: "",
},
{
	title: "cod-preview",
	icon: "",
},
{
	title: "cod-primitive_square",
	icon: "",
},
{
	title: "cod-project",
	icon: "",
},
{
	title: "cod-pulse",
	icon: "",
},
{
	title: "cod-question",
	icon: "",
},
{
	title: "cod-quote",
	icon: "",
},
{
	title: "cod-radio_tower",
	icon: "",
},
{
	title: "cod-reactions",
	icon: "",
},
{
	title: "cod-record",
	icon: "",
},
{
	title: "cod-record_keys",
	icon: "",
},
{
	title: "cod-record_small",
	icon: "",
},
{
	title: "cod-redo",
	icon: "",
},
{
	title: "cod-references",
	icon: "",
},
{
	title: "cod-refresh",
	icon: "",
},
{
	title: "cod-regex",
	icon: "",
},
{
	title: "cod-remote",
	icon: "",
},
{
	title: "cod-remote_explorer",
	icon: "",
},
{
	title: "cod-remove",
	icon: "",
},
{
	title: "cod-replace",
	icon: "",
},
{
	title: "cod-replace_all",
	icon: "",
},
{
	title: "cod-reply",
	icon: "",
},
{
	title: "cod-repo",
	icon: "",
},
{
	title: "cod-repo_clone",
	icon: "",
},
{
	title: "cod-repo_force_push",
	icon: "",
},
{
	title: "cod-repo_forked",
	icon: "",
},
{
	title: "cod-repo_pull",
	icon: "",
},
{
	title: "cod-repo_push",
	icon: "",
},
{
	title: "cod-report",
	icon: "",
},
{
	title: "cod-request_changes",
	icon: "",
},
{
	title: "cod-rocket",
	icon: "",
},
{
	title: "cod-root_folder",
	icon: "",
},
{
	title: "cod-root_folder_opened",
	icon: "",
},
{
	title: "cod-rss",
	icon: "",
},
{
	title: "cod-ruby",
	icon: ""
},
{
	title: "cod-run_above",
	icon: "",
},
{
	title: "cod-run_all",
	icon: "",
},
{
	title: "cod-run_below",
	icon: "",
},
{
	title: "cod-run_errors",
	icon: "",
},
{
	title: "cod-save",
	icon: "",
},
{
	title: "cod-save_all",
	icon: "",
},
{
	title: "cod-save_as",
	icon: "",
},
{
	title: "cod-screen_full",
	icon: "",
},
{
	title: "cod-screen_normal",
	icon: "",
},
{
	title: "cod-search",
	icon: "",
},
{
	title: "cod-search_fuzzy",
	icon: "",
},
{
	title: "cod-search_stop",
	icon: "",
},
{
	title: "cod-send",
	icon: "",
},
{
	title: "cod-server",
	icon: "",
},
{
	title: "cod-server_environment",
	icon: "",
},
{
	title: "cod-server_process",
	icon: "",
},
{
	title: "cod-settings",
	icon: "",
},
{
	title: "cod-settings_gear",
	icon: "",
},
{
	title: "cod-shield",
	icon: "",
},
{
	title: "cod-sign_in",
	icon: "",
},
{
	title: "cod-sign_out",
	icon: "",
},
{
	title: "cod-smiley",
	icon: "",
},
{
	title: "cod-snake",
	icon: "",
},
{
	title: "cod-sort_precedence",
	icon: "",
},
{
	title: "cod-source_control",
	icon: "",
},
{
	title: "cod-sparkle",
	icon: "",
},
{
	title: "cod-split_horizontal",
	icon: "",
},
{
	title: "cod-split_vertical",
	icon: "",
},
{
	title: "cod-squirrel",
	icon: "",
},
{
	title: "cod-star_empty",
	icon: "",
},
{
	title: "cod-star_full",
	icon: "",
},
{
	title: "cod-star_half",
	icon: "",
},
{
	title: "cod-stop_circle",
	icon: "",
},
{
	title: "cod-symbol_array",
	icon: "",
},
{
	title: "cod-symbol_boolean",
	icon: "",
},
{
	title: "cod-symbol_class",
	icon: "",
},
{
	title: "cod-symbol_color",
	icon: "",
},
{
	title: "cod-symbol_constant",
	icon: "",
},
{
	title: "cod-symbol_enum",
	icon: "",
},
{
	title: "cod-symbol_enum_member",
	icon: "",
},
{
	title: "cod-symbol_event",
	icon: "",
},
{
	title: "cod-symbol_field",
	icon: "",
},
{
	title: "cod-symbol_file",
	icon: "",
},
{
	title: "cod-symbol_interface",
	icon: "",
},
{
	title: "cod-symbol_key",
	icon: "",
},
{
	title: "cod-symbol_keyword",
	icon: "",
},
{
	title: "cod-symbol_method",
	icon: "",
},
{
	title: "cod-symbol_misc",
	icon: "",
},
{
	title: "cod-symbol_namespace",
	icon: "",
},
{
	title: "cod-symbol_numeric",
	icon: "",
},
{
	title: "cod-symbol_operator",
	icon: "",
},
{
	title: "cod-symbol_parameter",
	icon: "",
},
{
	title: "cod-symbol_property",
	icon: "",
},
{
	title: "cod-symbol_ruler",
	icon: "",
},
{
	title: "cod-symbol_snippet",
	icon: "",
},
{
	title: "cod-symbol_string",
	icon: "",
},
{
	title: "cod-symbol_structure",
	icon: "",
},
{
	title: "cod-symbol_variable",
	icon: "",
},
{
	title: "cod-sync",
	icon: "",
},
{
	title: "cod-sync_ignored",
	icon: "",
},
{
	title: "cod-table",
	icon: "",
},
{
	title: "cod-tag",
	icon: "",
},
{
	title: "cod-target",
	icon: "",
},
{
	title: "cod-tasklist",
	icon: "",
},
{
	title: "cod-telescope",
	icon: "",
},
{
	title: "cod-terminal",
	icon: "",
},
{
	title: "cod-terminal_bash",
	icon: "",
},
{
	title: "cod-terminal_cmd",
	icon: "",
},
{
	title: "cod-terminal_debian",
	icon: "",
},
{
	title: "cod-terminal_linux",
	icon: "",
},
{
	title: "cod-terminal_powershell",
	icon: "",
},
{
	title: "cod-terminal_tmux",
	icon: "",
},
{
	title: "cod-terminal_ubuntu",
	icon: "",
},
{
	title: "cod-text_size",
	icon: "",
},
{
	title: "cod-three_bars",
	icon: "",
},
{
	title: "cod-thumbsdown",
	icon: "",
},
{
	title: "cod-thumbsdown_filled",
	icon: "",
},
{
	title: "cod-thumbsup",
	icon: "",
},
{
	title: "cod-thumbsup_filled",
	icon: "",
},
{
	title: "cod-tools",
	icon: "",
},
{
	title: "cod-trash",
	icon: "",
},
{
	title: "cod-triangle_down",
	icon: "",
},
{
	title: "cod-triangle_left",
	icon: "",
},
{
	title: "cod-triangle_right",
	icon: "",
},
{
	title: "cod-triangle_up",
	icon: "",
},
{
	title: "cod-twitter",
	icon: "",
},
{
	title: "cod-type_hierarchy",
	icon: "",
},
{
	title: "cod-type_hierarchy_sub",
	icon: "",
},
{
	title: "cod-type_hierarchy_super",
	icon: "",
},
{
	title: "cod-unfold",
	icon: "",
},
{
	title: "cod-ungroup_by_ref_type",
	icon: "",
},
{
	title: "cod-unlock",
	icon: "",
},
{
	title: "cod-unmute",
	icon: "",
},
{
	title: "cod-unverified",
	icon: "",
},
{
	title: "cod-variable_group",
	icon: "",
},
{
	title: "cod-verified",
	icon: "",
},
{
	title: "cod-verified_filled",
	icon: "",
},
{
	title: "cod-versions",
	icon: "",
},
{
	title: "cod-vm",
	icon: "",
},
{
	title: "cod-vm_active",
	icon: "",
},
{
	title: "cod-vm_connect",
	icon: "",
},
{
	title: "cod-vm_outline",
	icon: "",
},
{
	title: "cod-vm_running",
	icon: "",
},
{
	title: "cod-vr",
	icon: "",
},
{
	title: "cod-wand",
	icon: "",
},
{
	title: "cod-warning",
	icon: "",
},
{
	title: "cod-watch",
	icon: "",
},
{
	title: "cod-whitespace",
	icon: "",
},
{
	title: "cod-whole_word",
	icon: "",
},
{
	title: "cod-window",
	icon: "",
},
{
	title: "cod-word_wrap",
	icon: "",
},
{
	title: "cod-workspace_trusted",
	icon: "",
},
{
	title: "cod-workspace_unknown",
	icon: "",
},
{
	title: "cod-workspace_untrusted",
	icon: "",
},
{
	title: "cod-zoom_in",
	icon: "",
},
{
	title: "cod-zoom_out",
	icon: "",
},
{
	title: "custom-ada",
	icon: "",
},
{
	title: "custom-asm",
	icon: "",
},
{
	title: "custom-astro",
	icon: "",
},
{
	title: "custom-bazel",
	icon: "",
},
{
	title: "custom-c",
	icon: "",
},
{
	title: "custom-chuck",
	icon: "",
},
{
	title: "custom-common_lisp",
	icon: "",
},
{
	title: "custom-cpp",
	icon: "",
},
{
	title: "custom-crystal",
	icon: "",
},
{
	title: "custom-default",
	icon: "",
},
{
	title: "custom-electron",
	icon: "",
},
{
	title: "custom-elixir",
	icon: "",
},
{
	title: "custom-elm",
	icon: "",
},
{
	title: "custom-emacs",
	icon: "",
},
{
	title: "custom-fennel",
	icon: "",
},
{
	title: "custom-firebase",
	icon: "",
},
{
	title: "custom-folder",
	icon: "",
},
{
	title: "custom-folder_config",
	icon: "",
},
{
	title: "custom-folder_git",
	icon: "",
},
{
	title: "custom-folder_git_branch",
	icon: "",
},
{
	title: "custom-folder_github",
	icon: "",
},
{
	title: "custom-folder_npm",
	icon: "",
},
{
	title: "custom-folder_oct",
	icon: "",
},
{
	title: "custom-folder_open",
	icon: "",
},
{
	title: "custom-go",
	icon: "",
},
{
	title: "custom-home",
	icon: "",
},
{
	title: "custom-kotlin",
	icon: "",
},
{
	title: "custom-msdos",
	icon: "",
},
{
	title: "custom-neovim",
	icon: "",
},
{
	title: "custom-orgmode",
	icon: "",
},
{
	title: "custom-play_arrow",
	icon: "",
},
{
	title: "custom-prettier",
	icon: "",
},
{
	title: "custom-puppet",
	icon: "",
},
{
	title: "custom-purescript",
	icon: "",
},
{
	title: "custom-ruby",
	icon: "",
},
{
	title: "custom-scheme",
	icon: "",
},
{
	title: "custom-toml",
	icon: "",
},
{
	title: "custom-v_lang",
	icon: "",
},
{
	title: "custom-vim",
	icon: "",
},
{
	title: "custom-vitruvian",
	icon: "",
},
{
	title: "custom-windows",
	icon: "",
},
{
	title: "dev-aarch64",
	icon: "",
},
{
	title: "dev-adonisjs",
	icon: "",
},
{
	title: "dev-aftereffects",
	icon: "",
},
{
	title: "dev-akka",
	icon: "",
},
{
	title: "dev-algolia",
	icon: "",
},
{
	title: "dev-alpinejs",
	icon: "",
},
{
	title: "dev-amazonwebservices",
	icon: "",
},
{
	title: "dev-anaconda",
	icon: "",
},
{
	title: "dev-android",
	icon: "",
},
{
	title: "dev-androidstudio",
	icon: "",
},
{
	title: "dev-angular",
	icon: "",
},
{
	title: "dev-angularjs",
	icon: "",
},
{
	title: "dev-angularmaterial",
	icon: "",
},
{
	title: "dev-ansible",
	icon: "",
},
{
	title: "dev-antdesign",
	icon: "",
},
{
	title: "dev-apache",
	icon: "",
},
{
	title: "dev-apacheairflow",
	icon: "",
},
{
	title: "dev-apachekafka",
	icon: "",
},
{
	title: "dev-apachespark",
	icon: "",
},
{
	title: "dev-apl",
	icon: "",
},
{
	title: "dev-appcelerator",
	icon: "",
},
{
	title: "dev-apple",
	icon: "",
},
{
	title: "dev-appwrite",
	icon: "",
},
{
	title: "dev-archlinux",
	icon: "",
},
{
	title: "dev-arduino",
	icon: "",
},
{
	title: "dev-argocd",
	icon: "",
},
{
	title: "dev-astro",
	icon: "",
},
{
	title: "dev-atom",
	icon: "",
},
{
	title: "dev-awk",
	icon: "",
},
{
	title: "dev-aws",
	icon: "",
},
{
	title: "dev-axios",
	icon: "",
},
{
	title: "dev-azure",
	icon: "",
},
{
	title: "dev-azuredevops",
	icon: "",
},
{
	title: "dev-azuresqldatabase",
	icon: "",
},
{
	title: "dev-babel",
	icon: "",
},
{
	title: "dev-backbone",
	icon: "",
},
{
	title: "dev-backbonejs",
	icon: "",
},
{
	title: "dev-ballerina",
	icon: "",
},
{
	title: "dev-bamboo",
	icon: "",
},
{
	title: "dev-bash",
	icon: "",
},
{
	title: "dev-beats",
	icon: "",
},
{
	title: "dev-behance",
	icon: "",
},
{
	title: "dev-bitbucket",
	icon: "",
},
{
	title: "dev-blazor",
	icon: "",
},
{
	title: "dev-blender",
	icon: "",
},
{
	title: "dev-bootstrap",
	icon: "",
},
{
	title: "dev-bower",
	icon: "",
},
{
	title: "dev-browserstack",
	icon: "",
},
{
	title: "dev-bulma",
	icon: "",
},
{
	title: "dev-bun",
	icon: "",
},
{
	title: "dev-c",
	icon: "",
},
{
	title: "dev-c_lang",
	icon: "",
},
{
	title: "dev-cairo",
	icon: "",
},
{
	title: "dev-cakephp",
	icon: "",
},
{
	title: "dev-canva",
	icon: "",
},
{
	title: "dev-capacitor",
	icon: "",
},
{
	title: "dev-carbon",
	icon: "",
},
{
	title: "dev-cassandra",
	icon: "",
},
{
	title: "dev-centos",
	icon: "",
},
{
	title: "dev-ceylon",
	icon: "",
},
{
	title: "dev-chrome",
	icon: "",
},
{
	title: "dev-circleci",
	icon: "",
},
{
	title: "dev-clarity",
	icon: "",
},
{
	title: "dev-clion",
	icon: "",
},
{
	title: "dev-clojure",
	icon: "",
},
{
	title: "dev-clojure_alt",
	icon: "",
},
{
	title: "dev-clojurescript",
	icon: "",
},
{
	title: "dev-cloudflare",
	icon: "",
},
{
	title: "dev-cloudflareworkers",
	icon: "",
},
{
	title: "dev-cmake",
	icon: "",
},
{
	title: "dev-codeac",
	icon: "",
},
{
	title: "dev-codecov",
	icon: "",
},
{
	title: "dev-codeigniter",
	icon: "",
},
{
	title: "dev-codepen",
	icon: "",
},
{
	title: "dev-coffeescript",
	icon: "",
},
{
	title: "dev-composer",
	icon: "",
},
{
	title: "dev-confluence",
	icon: "",
},
{
	title: "dev-consul",
	icon: "",
},
{
	title: "dev-contao",
	icon: "",
},
{
	title: "dev-corejs",
	icon: "",
},
{
	title: "dev-cosmosdb",
	icon: "",
},
{
	title: "dev-couchbase",
	icon: "",
},
{
	title: "dev-couchdb",
	icon: "",
},
{
	title: "dev-cplusplus",
	icon: "",
},
{
	title: "dev-crystal",
	icon: "",
},
{
	title: "dev-csharp",
	icon: "",
},
{
	title: "dev-css3",
	icon: "",
},
{
	title: "dev-css3_full",
	icon: "",
},
{
	title: "dev-cucumber",
	icon: "",
},
{
	title: "dev-cypressio",
	icon: "",
},
{
	title: "dev-d3js",
	icon: "",
},
{
	title: "dev-dart",
	icon: "",
},
{
	title: "dev-database",
	icon: "",
},
{
	title: "dev-datagrip",
	icon: "",
},
{
	title: "dev-dataspell",
	icon: "",
},
{
	title: "dev-dbeaver",
	icon: "",
},
{
	title: "dev-debian",
	icon: "",
},
{
	title: "dev-denojs",
	icon: "",
},
{
	title: "dev-devicon",
	icon: "",
},
{
	title: "dev-digital_ocean",
	icon: "",
},
{
	title: "dev-digitalocean",
	icon: "",
},
{
	title: "dev-discordjs",
	icon: "",
},
{
	title: "dev-django",
	icon: "",
},
{
	title: "dev-djangorest",
	icon: "",
},
{
	title: "dev-dlang",
	icon: "",
},
{
	title: "dev-docker",
	icon: "",
},
{
	title: "dev-doctrine",
	icon: "",
},
{
	title: "dev-dotnet",
	icon: "",
},
{
	title: "dev-dotnetcore",
	icon: "",
},
{
	title: "dev-dreamweaver",
	icon: "",
},
{
	title: "dev-dropbox",
	icon: "",
},
{
	title: "dev-dropwizard",
	icon: "",
},
{
	title: "dev-drupal",
	icon: "",
},
{
	title: "dev-dynamodb",
	icon: "",
},
{
	title: "dev-eclipse",
	icon: "",
},
{
	title: "dev-ecto",
	icon: "",
},
{
	title: "dev-elasticsearch",
	icon: "",
},
{
	title: "dev-electron",
	icon: "",
},
{
	title: "dev-eleventy",
	icon: "",
},
{
	title: "dev-elixir",
	icon: "",
},
{
	title: "dev-elm",
	icon: "",
},
{
	title: "dev-emacs",
	icon: "",
},
{
	title: "dev-embeddedc",
	icon: "",
},
{
	title: "dev-ember",
	icon: "",
},
{
	title: "dev-envoy",
	icon: "",
},
{
	title: "dev-erlang",
	icon: "",
},
{
	title: "dev-eslint",
	icon: "",
},
{
	title: "dev-express",
	icon: "",
},
{
	title: "dev-facebook",
	icon: "",
},
{
	title: "dev-fastapi",
	icon: "",
},
{
	title: "dev-fastify",
	icon: "",
},
{
	title: "dev-faunadb",
	icon: "",
},
{
	title: "dev-feathersjs",
	icon: "",
},
{
	title: "dev-fedora",
	icon: "",
},
{
	title: "dev-figma",
	icon: "",
},
{
	title: "dev-filezilla",
	icon: "",
},
{
	title: "dev-firebase",
	icon: "",
},
{
	title: "dev-firefox",
	icon: "",
},
{
	title: "dev-flask",
	icon: "",
},
{
	title: "dev-flutter",
	icon: "",
},
{
	title: "dev-fortran",
	icon: "",
},
{
	title: "dev-foundation",
	icon: "",
},
{
	title: "dev-framermotion",
	icon: "",
},
{
	title: "dev-framework7",
	icon: "",
},
{
	title: "dev-fsharp",
	icon: "",
},
{
	title: "dev-gatling",
	icon: "",
},
{
	title: "dev-gatsby",
	icon: "",
},
{
	title: "dev-gazebo",
	icon: "",
},
{
	title: "dev-gcc",
	icon: "",
},
{
	title: "dev-gentoo",
	icon: "",
},
{
	title: "dev-ghost",
	icon: "",
},
{
	title: "dev-ghost_small",
	icon: "",
},
{
	title: "dev-gimp",
	icon: "",
},
{
	title: "dev-git",
	icon: "",
},
{
	title: "dev-git_branch",
	icon: "",
},
{
	title: "dev-git_commit",
	icon: "",
},
{
	title: "dev-git_compare",
	icon: "",
},
{
	title: "dev-git_merge",
	icon: "",
},
{
	title: "dev-git_pull_request",
	icon: "",
},
{
	title: "dev-gitbook",
	icon: "",
},
{
	title: "dev-github",
	icon: "",
},
{
	title: "dev-github_badge",
	icon: "",
},
{
	title: "dev-github_full",
	icon: "",
},
{
	title: "dev-githubactions",
	icon: "",
},
{
	title: "dev-githubcodespaces",
	icon: "",
},
{
	title: "dev-gitlab",
	icon: "",
},
{
	title: "dev-gitpod",
	icon: "",
},
{
	title: "dev-gitter",
	icon: "",
},
{
	title: "dev-gnu",
	icon: "",
},
{
	title: "dev-go",
	icon: "",
},
{
	title: "dev-godot",
	icon: "",
},
{
	title: "dev-goland",
	icon: "",
},
{
	title: "dev-google",
	icon: "",
},
{
	title: "dev-googlecloud",
	icon: "",
},
{
	title: "dev-gradle",
	icon: "",
},
{
	title: "dev-grafana",
	icon: "",
},
{
	title: "dev-grails",
	icon: "",
},
{
	title: "dev-graphql",
	icon: "",
},
{
	title: "dev-groovy",
	icon: "",
},
{
	title: "dev-grpc",
	icon: "",
},
{
	title: "dev-grunt",
	icon: "",
},
{
	title: "dev-gulp",
	icon: "",
},
{
	title: "dev-hadoop",
	icon: "",
},
{
	title: "dev-handlebars",
	icon: "",
},
{
	title: "dev-hardhat",
	icon: "",
},
{
	title: "dev-harvester",
	icon: "",
},
{
	title: "dev-haskell",
	icon: "",
},
{
	title: "dev-haxe",
	icon: "",
},
{
	title: "dev-helm",
	icon: "",
},
{
	title: "dev-heroku",
	icon: "",
},
{
	title: "dev-hibernate",
	icon: "",
},
{
	title: "dev-homebrew",
	icon: "",
},
{
	title: "dev-html5",
	icon: "",
},
{
	title: "dev-hugo",
	icon: "",
},
{
	title: "dev-ie",
	icon: "",
},
{
	title: "dev-ifttt",
	icon: "",
},
{
	title: "dev-illustrator",
	icon: "",
},
{
	title: "dev-influxdb",
	icon: "",
},
{
	title: "dev-inkscape",
	icon: "",
},
{
	title: "dev-insomnia",
	icon: "",
},
{
	title: "dev-intellij",
	icon: "",
},
{
	title: "dev-ionic",
	icon: "",
},
{
	title: "dev-jaegertracing",
	icon: "",
},
{
	title: "dev-jamstack",
	icon: "",
},
{
	title: "dev-jasmine",
	icon: "",
},
{
	title: "dev-java",
	icon: "",
},
{
	title: "dev-javascript",
	icon: "",
},
{
	title: "dev-javascript_alt",
	icon: "",
},
{
	title: "dev-javascript_badge",
	icon: "",
},
{
	title: "dev-jeet",
	icon: "",
},
{
	title: "dev-jekyll",
	icon: "",
},
{
	title: "dev-jekyll_small",
	icon: "",
},
{
	title: "dev-jenkins",
	icon: "",
},
{
	title: "dev-jest",
	icon: "",
},
{
	title: "dev-jetbrains",
	icon: "",
},
{
	title: "dev-jetpackcompose",
	icon: "",
},
{
	title: "dev-jira",
	icon: "",
},
{
	title: "dev-jiraalign",
	icon: "",
},
{
	title: "dev-jquery",
	icon: "",
},
{
	title: "dev-json",
	icon: "",
},
{
	title: "dev-jule",
	icon: "",
},
{
	title: "dev-julia",
	icon: "",
},
{
	title: "dev-junit",
	icon: "",
},
{
	title: "dev-jupyter",
	icon: "",
},
{
	title: "dev-k3os",
	icon: "",
},
{
	title: "dev-k3s",
	icon: "",
},
{
	title: "dev-k6",
	icon: "",
},
{
	title: "dev-kaggle",
	icon: "",
},
{
	title: "dev-karatelabs",
	icon: "",
},
{
	title: "dev-karma",
	icon: "",
},
{
	title: "dev-kdeneon",
	icon: "",
},
{
	title: "dev-keras",
	icon: "",
},
{
	title: "dev-kibana",
	icon: "",
},
{
	title: "dev-knexjs",
	icon: "",
},
{
	title: "dev-knockout",
	icon: "",
},
{
	title: "dev-kotlin",
	icon: "",
},
{
	title: "dev-krakenjs",
	icon: "",
},
{
	title: "dev-krakenjs_badge",
	icon: "",
},
{
	title: "dev-ktor",
	icon: "",
},
{
	title: "dev-kubernetes",
	icon: "",
},
{
	title: "dev-labview",
	icon: "",
},
{
	title: "dev-laravel",
	icon: "",
},
{
	title: "dev-latex",
	icon: "",
},
{
	title: "dev-less",
	icon: "",
},
{
	title: "dev-linkedin",
	icon: "",
},
{
	title: "dev-linux",
	icon: "",
},
{
	title: "dev-liquibase",
	icon: "",
},
{
	title: "dev-livewire",
	icon: "",
},
{
	title: "dev-llvm",
	icon: "",
},
{
	title: "dev-lodash",
	icon: "",
},
{
	title: "dev-logstash",
	icon: "",
},
{
	title: "dev-lua",
	icon: "",
},
{
	title: "dev-lumen",
	icon: "",
},
{
	title: "dev-magento",
	icon: "",
},
{
	title: "dev-mariadb",
	icon: "",
},
{
	title: "dev-markdown",
	icon: "",
},
{
	title: "dev-materializecss",
	icon: "",
},
{
	title: "dev-materialui",
	icon: "",
},
{
	title: "dev-matlab",
	icon: "",
},
{
	title: "dev-matplotlib",
	icon: "",
},
{
	title: "dev-maven",
	icon: "",
},
{
	title: "dev-maya",
	icon: "",
},
{
	title: "dev-meteor",
	icon: "",
},
{
	title: "dev-meteorfull",
	icon: "",
},
{
	title: "dev-microsoftsqlserver",
	icon: "",
},
{
	title: "dev-minitab",
	icon: "",
},
{
	title: "dev-mithril",
	icon: "",
},
{
	title: "dev-mobx",
	icon: "",
},
{
	title: "dev-mocha",
	icon: "",
},
{
	title: "dev-modx",
	icon: "",
},
{
	title: "dev-moleculer",
	icon: "",
},
{
	title: "dev-mongodb",
	icon: "",
},
{
	title: "dev-mongoose",
	icon: "",
},
{
	title: "dev-moodle",
	icon: "",
},
{
	title: "dev-mootools_badge",
	icon: "",
},
{
	title: "dev-mozilla",
	icon: "",
},
{
	title: "dev-msdos",
	icon: "",
},
{
	title: "dev-mysql",
	icon: "",
},
{
	title: "dev-nano",
	icon: "",
},
{
	title: "dev-neo4j",
	icon: "",
},
{
	title: "dev-neovim",
	icon: "",
},
{
	title: "dev-nestjs",
	icon: "",
},
{
	title: "dev-netlify",
	icon: "",
},
{
	title: "dev-networkx",
	icon: "",
},
{
	title: "dev-nextjs",
	icon: "",
},
{
	title: "dev-nginx",
	icon: "",
},
{
	title: "dev-ngrx",
	icon: "",
},
{
	title: "dev-nhibernate",
	icon: "",
},
{
	title: "dev-nim",
	icon: "",
},
{
	title: "dev-nimble",
	icon: "",
},
{
	title: "dev-nixos",
	icon: "",
},
{
	title: "dev-nodejs",
	icon: "",
},
{
	title: "dev-nodejs_small",
	icon: "",
},
{
	title: "dev-nodemon",
	icon: "",
},
{
	title: "dev-nodewebkit",
	icon: "",
},
{
	title: "dev-nomad",
	icon: "",
},
{
	title: "dev-norg",
	icon: "",
},
{
	title: "dev-notion",
	icon: "",
},
{
	title: "dev-npm",
	icon: "",
},
{
	title: "dev-nuget",
	icon: "",
},
{
	title: "dev-numpy",
	icon: "",
},
{
	title: "dev-nuxtjs",
	icon: "",
},
{
	title: "dev-oauth",
	icon: "",
},
{
	title: "dev-objectivec",
	icon: "",
},
{
	title: "dev-ocaml",
	icon: "",
},
{
	title: "dev-ohmyzsh",
	icon: "",
},
{
	title: "dev-okta",
	icon: "",
},
{
	title: "dev-openal",
	icon: "",
},
{
	title: "dev-openapi",
	icon: "",
},
{
	title: "dev-opencl",
	icon: "",
},
{
	title: "dev-opencv",
	icon: "",
},
{
	title: "dev-opengl",
	icon: "",
},
{
	title: "dev-openstack",
	icon: "",
},
{
	title: "dev-opensuse",
	icon: "",
},
{
	title: "dev-opentelemetry",
	icon: "",
},
{
	title: "dev-opera",
	icon: "",
},
{
	title: "dev-oracle",
	icon: "",
},
{
	title: "dev-ory",
	icon: "",
},
{
	title: "dev-p5js",
	icon: "",
},
{
	title: "dev-packer",
	icon: "",
},
{
	title: "dev-pandas",
	icon: "",
},
{
	title: "dev-perl",
	icon: "",
},
{
	title: "dev-pfsense",
	icon: "",
},
{
	title: "dev-phalcon",
	icon: "",
},
{
	title: "dev-phoenix",
	icon: "",
},
{
	title: "dev-photonengine",
	icon: "",
},
{
	title: "dev-photoshop",
	icon: "",
},
{
	title: "dev-php",
	icon: "",
},
{
	title: "dev-phpstorm",
	icon: "",
},
{
	title: "dev-playwright",
	icon: "",
},
{
	title: "dev-plotly",
	icon: "",
},
{
	title: "dev-pnpm",
	icon: "",
},
{
	title: "dev-podman",
	icon: "",
},
{
	title: "dev-poetry",
	icon: "",
},
{
	title: "dev-polygon",
	icon: "",
},
{
	title: "dev-portainer",
	icon: "",
},
{
	title: "dev-postcss",
	icon: "",
},
{
	title: "dev-postgresql",
	icon: "",
},
{
	title: "dev-postman",
	icon: "",
},
{
	title: "dev-powershell",
	icon: "",
},
{
	title: "dev-premierepro",
	icon: "",
},
{
	title: "dev-prisma",
	icon: "",
},
{
	title: "dev-processing",
	icon: "",
},
{
	title: "dev-prolog",
	icon: "",
},
{
	title: "dev-prometheus",
	icon: "",
},
{
	title: "dev-protractor",
	icon: "",
},
{
	title: "dev-pulsar",
	icon: "",
},
{
	title: "dev-pulumi",
	icon: "",
},
{
	title: "dev-puppeteer",
	icon: "",
},
{
	title: "dev-purescript",
	icon: "",
},
{
	title: "dev-putty",
	icon: "",
},
{
	title: "dev-pycharm",
	icon: "",
},
{
	title: "dev-pypi",
	icon: "",
},
{
	title: "dev-pyscript",
	icon: "",
},
{
	title: "dev-pytest",
	icon: "",
},
{
	title: "dev-python",
	icon: "",
},
{
	title: "dev-pytorch",
	icon: "",
},
{
	title: "dev-qodana",
	icon: "",
},
{
	title: "dev-qt",
	icon: "",
},
{
	title: "dev-quarkus",
	icon: "",
},
{
	title: "dev-quasar",
	icon: "",
},
{
	title: "dev-qwik",
	icon: "",
},
{
	title: "dev-r",
	icon: "",
},
{
	title: "dev-rabbitmq",
	icon: "",
},
{
	title: "dev-rails",
	icon: "",
},
{
	title: "dev-railway",
	icon: "",
},
{
	title: "dev-rancher",
	icon: "",
},
{
	title: "dev-raspberry_pi",
	icon: "",
},
{
	title: "dev-reach",
	icon: "",
},
{
	title: "dev-react",
	icon: "",
},
{
	title: "dev-reactbootstrap",
	icon: "",
},
{
	title: "dev-reactnavigation",
	icon: "",
},
{
	title: "dev-reactrouter",
	icon: "",
},
{
	title: "dev-readthedocs",
	icon: "",
},
{
	title: "dev-realm",
	icon: "",
},
{
	title: "dev-rect",
	icon: "",
},
{
	title: "dev-redhat",
	icon: "",
},
{
	title: "dev-redis",
	icon: "",
},
{
	title: "dev-redux",
	icon: "",
},
{
	title: "dev-renpy",
	icon: "",
},
{
	title: "dev-replit",
	icon: "",
},
{
	title: "dev-requirejs",
	icon: "",
},
{
	title: "dev-rider",
	icon: "",
},
{
	title: "dev-rocksdb",
	icon: "",
},
{
	title: "dev-rockylinux",
	icon: "",
},
{
	title: "dev-rollup",
	icon: "",
},
{
	title: "dev-ros",
	icon: "",
},
{
	title: "dev-rspec",
	icon: "",
},
{
	title: "dev-rstudio",
	icon: "",
},
{
	title: "dev-ruby",
	icon: "",
},
{
	title: "dev-ruby_on_rails",
	icon: "",
},
{
	title: "dev-ruby_rough",
	icon: "",
},
{
	title: "dev-rubymine",
	icon: "",
},
{
	title: "dev-rust",
	icon: "",
},
{
	title: "dev-rxjs",
	icon: "",
},
{
	title: "dev-safari",
	icon: "",
},
{
	title: "dev-salesforce",
	icon: "",
},
{
	title: "dev-sanity",
	icon: "",
},
{
	title: "dev-sass",
	icon: "",
},
{
	title: "dev-scala",
	icon: "",
},
{
	title: "dev-scalingo",
	icon: "",
},
{
	title: "dev-scikitlearn",
	icon: "",
},
{
	title: "dev-sdl",
	icon: "",
},
{
	title: "dev-selenium",
	icon: "",
},
{
	title: "dev-sema",
	icon: "",
},
{
	title: "dev-sentry",
	icon: "",
},
{
	title: "dev-sequelize",
	icon: "",
},
{
	title: "dev-shopware",
	icon: "",
},
{
	title: "dev-shotgrid",
	icon: "",
},
{
	title: "dev-sketch",
	icon: "",
},
{
	title: "dev-slack",
	icon: "",
},
{
	title: "dev-smashing_magazine",
	icon: "",
},
{
	title: "dev-socketio",
	icon: "",
},
{
	title: "dev-solidity",
	icon: "",
},
{
	title: "dev-solidjs",
	icon: "",
},
{
	title: "dev-sonarqube",
	icon: "",
},
{
	title: "dev-sourcetree",
	icon: "",
},
{
	title: "dev-spack",
	icon: "",
},
{
	title: "dev-splunk",
	icon: "",
},
{
	title: "dev-spring",
	icon: "",
},
{
	title: "dev-spss",
	icon: "",
},
{
	title: "dev-spyder",
	icon: "",
},
{
	title: "dev-sqlalchemy",
	icon: "",
},
{
	title: "dev-sqldeveloper",
	icon: "",
},
{
	title: "dev-sqlite",
	icon: "",
},
{
	title: "dev-ssh",
	icon: "",
},
{
	title: "dev-stackoverflow",
	icon: "",
},
{
	title: "dev-stata",
	icon: "",
},
{
	title: "dev-storybook",
	icon: "",
},
{
	title: "dev-streamlit",
	icon: "",
},
{
	title: "dev-stylus",
	icon: "",
},
{
	title: "dev-sublime",
	icon: "",
},
{
	title: "dev-subversion",
	icon: "",
},
{
	title: "dev-supabase",
	icon: "",
},
{
	title: "dev-svelte",
	icon: "",
},
{
	title: "dev-swagger",
	icon: "",
},
{
	title: "dev-swift",
	icon: "",
},
{
	title: "dev-swiper",
	icon: "",
},
{
	title: "dev-symfony",
	icon: "",
},
{
	title: "dev-symfony_badge",
	icon: "",
},
{
	title: "dev-tailwindcss",
	icon: "",
},
{
	title: "dev-tauri",
	icon: "",
},
{
	title: "dev-tensorflow",
	icon: "",
},
{
	title: "dev-terminal",
	icon: "",
},
{
	title: "dev-terraform",
	icon: "",
},
{
	title: "dev-tex",
	icon: "",
},
{
	title: "dev-thealgorithms",
	icon: "",
},
{
	title: "dev-threedsmax",
	icon: "",
},
{
	title: "dev-threejs",
	icon: "",
},
{
	title: "dev-titaniumsdk",
	icon: "",
},
{
	title: "dev-tomcat",
	icon: "",
},
{
	title: "dev-tortoisegit",
	icon: "",
},
{
	title: "dev-towergit",
	icon: "",
},
{
	title: "dev-traefikmesh",
	icon: "",
},
{
	title: "dev-traefikproxy",
	icon: "",
},
{
	title: "dev-travis",
	icon: "",
},
{
	title: "dev-trello",
	icon: "",
},
{
	title: "dev-trpc",
	icon: "",
},
{
	title: "dev-twitter",
	icon: "",
},
{
	title: "dev-typescript",
	icon: "",
},
{
	title: "dev-typo3",
	icon: "",
},
{
	title: "dev-ubuntu",
	icon: "",
},
{
	title: "dev-uml",
	icon: "",
},
{
	title: "dev-unifiedmodelinglanguage",
	icon: "",
},
{
	title: "dev-unity",
	icon: "",
},
{
	title: "dev-unity_small",
	icon: "",
},
{
	title: "dev-unix",
	icon: "",
},
{
	title: "dev-unrealengine",
	icon: "",
},
{
	title: "dev-uwsgi",
	icon: "",
},
{
	title: "dev-v8",
	icon: "",
},
{
	title: "dev-vagrant",
	icon: "",
},
{
	title: "dev-vala",
	icon: "",
},
{
	title: "dev-vault",
	icon: "",
},
{
	title: "dev-vercel",
	icon: "",
},
{
	title: "dev-vertx",
	icon: "",
},
{
	title: "dev-vim",
	icon: "",
},
{
	title: "dev-visualbasic",
	icon: "",
},
{
	title: "dev-visualstudio",
	icon: "",
},
{
	title: "dev-vite",
	icon: "",
},
{
	title: "dev-vitejs",
	icon: "",
},
{
	title: "dev-vitess",
	icon: "",
},
{
	title: "dev-vitest",
	icon: "",
},
{
	title: "dev-vscode",
	icon: "",
},
{
	title: "dev-vsphere",
	icon: "",
},
{
	title: "dev-vuejs",
	icon: "",
},
{
	title: "dev-vuestorefront",
	icon: "",
},
{
	title: "dev-vuetify",
	icon: "",
},
{
	title: "dev-vyper",
	icon: "",
},
{
	title: "dev-wasm",
	icon: "",
},
{
	title: "dev-webflow",
	icon: "",
},
{
	title: "dev-weblate",
	icon: "",
},
{
	title: "dev-webpack",
	icon: "",
},
{
	title: "dev-webstorm",
	icon: "",
},
{
	title: "dev-windows",
	icon: "",
},
{
	title: "dev-windows11",
	icon: "",
},
{
	title: "dev-woocommerce",
	icon: "",
},
{
	title: "dev-wordpress",
	icon: "",
},
{
	title: "dev-xamarin",
	icon: "",
},
{
	title: "dev-xcode",
	icon: "",
},
{
	title: "dev-xd",
	icon: "",
},
{
	title: "dev-xml",
	icon: "",
},
{
	title: "dev-yaml",
	icon: "",
},
{
	title: "dev-yarn",
	icon: "",
},
{
	title: "dev-yii",
	icon: "",
},
{
	title: "dev-yugabytedb",
	icon: "",
},
{
	title: "dev-yunohost",
	icon: "",
},
{
	title: "dev-zend",
	icon: "",
},
{
	title: "dev-zig",
	icon: "",
},
{
	title: "fa-500px",
	icon: "",
},
{
	title: "fa-accessible_icon",
	icon: "",
},
{
	title: "fa-accusoft",
	icon: "",
},
{
	title: "fa-address_book",
	icon: "",
},
{
	title: "fa-address_book_o",
	icon: "",
},
{
	title: "fa-address_card",
	icon: "",
},
{
	title: "fa-address_card_o",
	icon: "",
},
{
	title: "fa-adjust",
	icon: "",
},
{
	title: "fa-adn",
	icon: "",
},
{
	title: "fa-adversal",
	icon: "",
},
{
	title: "fa-affiliatetheme",
	icon: "",
},
{
	title: "fa-airbnb",
	icon: "",
},
{
	title: "fa-algolia",
	icon: "",
},
{
	title: "fa-align_center",
	icon: "",
},
{
	title: "fa-align_justify",
	icon: "",
},
{
	title: "fa-align_left",
	icon: "",
},
{
	title: "fa-align_right",
	icon: "",
},
{
	title: "fa-alipay",
	icon: "",
},
{
	title: "fa-amazon",
	icon: "",
},
{
	title: "fa-amazon_pay",
	icon: "",
},
{
	title: "fa-ambulance",
	icon: "",
},
{
	title: "fa-american_sign_language_interpreting",
	icon: "",
},
{
	title: "fa-amilia",
	icon: "",
},
{
	title: "fa-anchor",
	icon: "",
},
{
	title: "fa-android",
	icon: "",
},
{
	title: "fa-angellist",
	icon: "",
},
{
	title: "fa-angle_double_down",
	icon: "",
},
{
	title: "fa-angle_double_left",
	icon: "",
},
{
	title: "fa-angle_double_right",
	icon: "",
},
{
	title: "fa-angle_double_up",
	icon: "",
},
{
	title: "fa-angle_down",
	icon: "",
},
{
	title: "fa-angle_left",
	icon: "",
},
{
	title: "fa-angle_right",
	icon: "",
},
{
	title: "fa-angle_up",
	icon: "",
},
{
	title: "fa-angles_down",
	icon: "",
},
{
	title: "fa-angles_left",
	icon: "",
},
{
	title: "fa-angles_right",
	icon: "",
},
{
	title: "fa-angles_up",
	icon: "",
},
{
	title: "fa-angrycreative",
	icon: "",
},
{
	title: "fa-angular",
	icon: "",
},
{
	title: "fa-ankh",
	icon: "",
},
{
	title: "fa-app_store",
	icon: "",
},
{
	title: "fa-app_store_ios",
	icon: "",
},
{
	title: "fa-apper",
	icon: "",
},
{
	title: "fa-apple",
	icon: "",
},
{
	title: "fa-apple_pay",
	icon: "",
},
{
	title: "fa-apple_whole",
	icon: "",
},
{
	title: "fa-archive",
	icon: "",
},
{
	title: "fa-archway",
	icon: "",
},
{
	title: "fa-area_chart",
	icon: "",
},
{
	title: "fa-arrow_circle_down",
	icon: "",
},
{
	title: "fa-arrow_circle_left",
	icon: "",
},
{
	title: "fa-arrow_circle_o_down",
	icon: "",
},
{
	title: "fa-arrow_circle_o_left",
	icon: "",
},
{
	title: "fa-arrow_circle_o_right",
	icon: "",
},
{
	title: "fa-arrow_circle_o_up",
	icon: "",
},
{
	title: "fa-arrow_circle_right",
	icon: "",
},
{
	title: "fa-arrow_circle_up",
	icon: "",
},
{
	title: "fa-arrow_down",
	icon: "",
},
{
	title: "fa-arrow_down_1_9",
	icon: "",
},
{
	title: "fa-arrow_down_9_1",
	icon: "",
},
{
	title: "fa-arrow_down_a_z",
	icon: "",
},
{
	title: "fa-arrow_down_long",
	icon: "",
},
{
	title: "fa-arrow_down_short_wide",
	icon: "",
},
{
	title: "fa-arrow_down_wide_short",
	icon: "",
},
{
	title: "fa-arrow_down_z_a",
	icon: "",
},
{
	title: "fa-arrow_left",
	icon: "",
},
{
	title: "fa-arrow_left_long",
	icon: "",
},
{
	title: "fa-arrow_pointer",
	icon: "",
},
{
	title: "fa-arrow_right",
	icon: "",
},
{
	title: "fa-arrow_right_arrow_left",
	icon: "",
},
{
	title: "fa-arrow_right_from_bracket",
	icon: "",
},
{
	title: "fa-arrow_right_long",
	icon: "",
},
{
	title: "fa-arrow_right_to_bracket",
	icon: "",
},
{
	title: "fa-arrow_rotate_left",
	icon: "",
},
{
	title: "fa-arrow_rotate_right",
	icon: "",
},
{
	title: "fa-arrow_turn_down",
	icon: "",
},
{
	title: "fa-arrow_turn_up",
	icon: "",
},
{
	title: "fa-arrow_up",
	icon: "",
},
{
	title: "fa-arrow_up_1_9",
	icon: "",
},
{
	title: "fa-arrow_up_9_1",
	icon: "",
},
{
	title: "fa-arrow_up_a_z",
	icon: "",
},
{
	title: "fa-arrow_up_long",
	icon: "",
},
{
	title: "fa-arrow_up_right_from_square",
	icon: "",
},
{
	title: "fa-arrow_up_short_wide",
	icon: "",
},
{
	title: "fa-arrow_up_wide_short",
	icon: "",
},
{
	title: "fa-arrow_up_z_a",
	icon: "",
},
{
	title: "fa-arrows",
	icon: "",
},
{
	title: "fa-arrows_alt",
	icon: "",
},
{
	title: "fa-arrows_h",
	icon: "",
},
{
	title: "fa-arrows_left_right",
	icon: "",
},
{
	title: "fa-arrows_rotate",
	icon: "",
},
{
	title: "fa-arrows_up_down",
	icon: "",
},
{
	title: "fa-arrows_up_down_left_right",
	icon: "",
},
{
	title: "fa-arrows_v",
	icon: "",
},
{
	title: "fa-artstation",
	icon: "",
},
{
	title: "fa-asl_interpreting",
	icon: "",
},
{
	title: "fa-assistive_listening_systems",
	icon: "",
},
{
	title: "fa-asterisk",
	icon: "",
},
{
	title: "fa-asymmetrik",
	icon: "",
},
{
	title: "fa-at",
	icon: "",
},
{
	title: "fa-atlassian",
	icon: "",
},
{
	title: "fa-atom",
	icon: "",
},
{
	title: "fa-audible",
	icon: "",
},
{
	title: "fa-audio_description",
	icon: "",
},
{
	title: "fa-automobile",
	icon: "",
},
{
	title: "fa-autoprefixer",
	icon: "",
},
{
	title: "fa-avianex",
	icon: "",
},
{
	title: "fa-aviato",
	icon: "",
},
{
	title: "fa-award",
	icon: "",
},
{
	title: "fa-aws",
	icon: "",
},
{
	title: "fa-baby",
	icon: "",
},
{
	title: "fa-baby_carriage",
	icon: "",
},
{
	title: "fa-backward",
	icon: "",
},
{
	title: "fa-backward_fast",
	icon: "",
},
{
	title: "fa-backward_step",
	icon: "",
},
{
	title: "fa-bacon",
	icon: "",
},
{
	title: "fa-bag_shopping",
	icon: "",
},
{
	title: "fa-bahai",
	icon: "",
},
{
	title: "fa-balance_scale",
	icon: "",
},
{
	title: "fa-ban",
	icon: "",
},
{
	title: "fa-ban_smoking",
	icon: "",
},
{
	title: "fa-bandage",
	icon: "",
},
{
	title: "fa-bandcamp",
	icon: "",
},
{
	title: "fa-bank",
	icon: "",
},
{
	title: "fa-bar_chart",
	icon: "",
},
{
	title: "fa-bar_chart_o",
	icon: "",
},
{
	title: "fa-barcode",
	icon: "",
},
{
	title: "fa-bars",
	icon: "",
},
{
	title: "fa-bars_progress",
	icon: "",
},
{
	title: "fa-bars_staggered",
	icon: "",
},
{
	title: "fa-baseball",
	icon: "",
},
{
	title: "fa-baseball_bat_ball",
	icon: "",
},
{
	title: "fa-basket_shopping",
	icon: "",
},
{
	title: "fa-basketball",
	icon: "",
},
{
	title: "fa-bath",
	icon: "",
},
{
	title: "fa-bathtub",
	icon: "",
},
{
	title: "fa-battery",
	icon: "",
},
{
	title: "fa-battery_0",
	icon: "",
},
{
	title: "fa-battery_1",
	icon: "",
},
{
	title: "fa-battery_2",
	icon: "",
},
{
	title: "fa-battery_3",
	icon: "",
},
{
	title: "fa-battery_4",
	icon: "",
},
{
	title: "fa-battery_empty",
	icon: "",
},
{
	title: "fa-battery_full",
	icon: "",
},
{
	title: "fa-battery_half",
	icon: "",
},
{
	title: "fa-battery_quarter",
	icon: "",
},
{
	title: "fa-battery_three_quarters",
	icon: "",
},
{
	title: "fa-battle_net",
	icon: "",
},
{
	title: "fa-bed",
	icon: "",
},
{
	title: "fa-bed_pulse",
	icon: "",
},
{
	title: "fa-beer",
	icon: "",
},
{
	title: "fa-beer_mug_empty",
	icon: "",
},
{
	title: "fa-behance",
	icon: "",
},
{
	title: "fa-behance_square",
	icon: "",
},
{
	title: "fa-bell",
	icon: "",
},
{
	title: "fa-bell_concierge",
	icon: "",
},
{
	title: "fa-bell_o",
	icon: "",
},
{
	title: "fa-bell_slash",
	icon: "",
},
{
	title: "fa-bell_slash_o",
	icon: "",
},
{
	title: "fa-bezier_curve",
	icon: "",
},
{
	title: "fa-bicycle",
	icon: "",
},
{
	title: "fa-bimobject",
	icon: "",
},
{
	title: "fa-binoculars",
	icon: "",
},
{
	title: "fa-biohazard",
	icon: "",
},
{
	title: "fa-birthday_cake",
	icon: "",
},
{
	title: "fa-bitbucket",
	icon: "",
},
{
	title: "fa-bitbucket_square",
	icon: "",
},
{
	title: "fa-bitcoin",
	icon: "",
},
{
	title: "fa-bity",
	icon: "",
},
{
	title: "fa-black_tie",
	icon: "",
},
{
	title: "fa-blackberry",
	icon: "",
},
{
	title: "fa-blender",
	icon: "",
},
{
	title: "fa-blender_phone",
	icon: "",
},
{
	title: "fa-blind",
	icon: "",
},
{
	title: "fa-blog",
	icon: "",
},
{
	title: "fa-blogger",
	icon: "",
},
{
	title: "fa-blogger_b",
	icon: "",
},
{
	title: "fa-bluetooth",
	icon: "",
},
{
	title: "fa-bluetooth_b",
	icon: "",
},
{
	title: "fa-bold",
	icon: "",
},
{
	title: "fa-bolt",
	icon: "",
},
{
	title: "fa-bomb",
	icon: "",
},
{
	title: "fa-bone",
	icon: "",
},
{
	title: "fa-bong",
	icon: "",
},
{
	title: "fa-book",
	icon: "",
},
{
	title: "fa-book_atlas",
	icon: "",
},
{
	title: "fa-book_bible",
	icon: "",
},
{
	title: "fa-book_journal_whills",
	icon: "",
},
{
	title: "fa-book_medical",
	icon: "",
},
{
	title: "fa-book_open",
	icon: "",
},
{
	title: "fa-book_open_reader",
	icon: "",
},
{
	title: "fa-book_quran",
	icon: "",
},
{
	title: "fa-book_skull",
	icon: "",
},
{
	title: "fa-book_tanakh",
	icon: "",
},
{
	title: "fa-bookmark",
	icon: "",
},
{
	title: "fa-bookmark_o",
	icon: "",
},
{
	title: "fa-bootstrap",
	icon: "",
},
{
	title: "fa-border_all",
	icon: "",
},
{
	title: "fa-border_none",
	icon: "",
},
{
	title: "fa-border_top_left",
	icon: "",
},
{
	title: "fa-bowling_ball",
	icon: "",
},
{
	title: "fa-box",
	icon: "",
},
{
	title: "fa-box_archive",
	icon: "",
},
{
	title: "fa-box_open",
	icon: "",
},
{
	title: "fa-boxes_stacked",
	icon: "",
},
{
	title: "fa-braille",
	icon: "",
},
{
	title: "fa-brain",
	icon: "",
},
{
	title: "fa-bread_slice",
	icon: "",
},
{
	title: "fa-briefcase",
	icon: "",
},
{
	title: "fa-briefcase_medical",
	icon: "",
},
{
	title: "fa-broom",
	icon: "",
},
{
	title: "fa-broom_ball",
	icon: "",
},
{
	title: "fa-brush",
	icon: "",
},
{
	title: "fa-btc",
	icon: "",
},
{
	title: "fa-buffer",
	icon: "",
},
{
	title: "fa-bug",
	icon: "",
},
{
	title: "fa-building",
	icon: "",
},
{
	title: "fa-building_columns",
	icon: "",
},
{
	title: "fa-building_o",
	icon: "",
},
{
	title: "fa-bullhorn",
	icon: "",
},
{
	title: "fa-bullseye",
	icon: "",
},
{
	title: "fa-burger",
	icon: "",
},
{
	title: "fa-buromobelexperte",
	icon: "",
},
{
	title: "fa-bus",
	icon: "",
},
{
	title: "fa-bus_simple",
	icon: "",
},
{
	title: "fa-business_time",
	icon: "",
},
{
	title: "fa-buy_n_large",
	icon: "",
},
{
	title: "fa-buysellads",
	icon: "",
},
{
	title: "fa-cab",
	icon: "",
},
{
	title: "fa-cable_car",
	icon: "",
},
{
	title: "fa-cake_candles",
	icon: "",
},
{
	title: "fa-calculator",
	icon: "",
},
{
	title: "fa-calendar",
	icon: "",
},
{
	title: "fa-calendar_check",
	icon: "",
},
{
	title: "fa-calendar_check_o",
	icon: "",
},
{
	title: "fa-calendar_day",
	icon: "",
},
{
	title: "fa-calendar_days",
	icon: "",
},
{
	title: "fa-calendar_minus",
	icon: "",
},
{
	title: "fa-calendar_minus_o",
	icon: "",
},
{
	title: "fa-calendar_o",
	icon: "",
},
{
	title: "fa-calendar_plus",
	icon: "",
},
{
	title: "fa-calendar_plus_o",
	icon: "",
},
{
	title: "fa-calendar_times_o",
	icon: "",
},
{
	title: "fa-calendar_week",
	icon: "",
},
{
	title: "fa-calendar_xmark",
	icon: "",
},
{
	title: "fa-camera",
	icon: "",
},
{
	title: "fa-camera_retro",
	icon: "",
},
{
	title: "fa-campground",
	icon: "",
},
{
	title: "fa-canadian_maple_leaf",
	icon: "",
},
{
	title: "fa-candy_cane",
	icon: "",
},
{
	title: "fa-cannabis",
	icon: "",
},
{
	title: "fa-capsules",
	icon: "",
},
{
	title: "fa-car",
	icon: "",
},
{
	title: "fa-car_battery",
	icon: "",
},
{
	title: "fa-car_burst",
	icon: "",
},
{
	title: "fa-car_rear",
	icon: "",
},
{
	title: "fa-car_side",
	icon: "",
},
{
	title: "fa-caravan",
	icon: "",
},
{
	title: "fa-caret_down",
	icon: "",
},
{
	title: "fa-caret_left",
	icon: "",
},
{
	title: "fa-caret_right",
	icon: "",
},
{
	title: "fa-caret_square_o_down",
	icon: "",
},
{
	title: "fa-caret_square_o_left",
	icon: "",
},
{
	title: "fa-caret_square_o_right",
	icon: "",
},
{
	title: "fa-caret_square_o_up",
	icon: "",
},
{
	title: "fa-caret_up",
	icon: "",
},
{
	title: "fa-carrot",
	icon: "",
},
{
	title: "fa-cart_arrow_down",
	icon: "",
},
{
	title: "fa-cart_flatbed",
	icon: "",
},
{
	title: "fa-cart_flatbed_suitcase",
	icon: "",
},
{
	title: "fa-cart_plus",
	icon: "",
},
{
	title: "fa-cart_shopping",
	icon: "",
},
{
	title: "fa-cash_register",
	icon: "",
},
{
	title: "fa-cat",
	icon: "",
},
{
	title: "fa-cc",
	icon: "",
},
{
	title: "fa-cc_amazon_pay",
	icon: "",
},
{
	title: "fa-cc_amex",
	icon: "",
},
{
	title: "fa-cc_apple_pay",
	icon: "",
},
{
	title: "fa-cc_diners_club",
	icon: "",
},
{
	title: "fa-cc_discover",
	icon: "",
},
{
	title: "fa-cc_jcb",
	icon: "",
},
{
	title: "fa-cc_mastercard",
	icon: "",
},
{
	title: "fa-cc_paypal",
	icon: "",
},
{
	title: "fa-cc_stripe",
	icon: "",
},
{
	title: "fa-cc_visa",
	icon: "",
},
{
	title: "fa-centercode",
	icon: "",
},
{
	title: "fa-centos",
	icon: "",
},
{
	title: "fa-certificate",
	icon: "",
},
{
	title: "fa-chain",
	icon: "",
},
{
	title: "fa-chain_broken",
	icon: "",
},
{
	title: "fa-chair",
	icon: "",
},
{
	title: "fa-chalkboard",
	icon: "",
},
{
	title: "fa-chalkboard_user",
	icon: "",
},
{
	title: "fa-champagne_glasses",
	icon: "",
},
{
	title: "fa-charging_station",
	icon: "",
},
{
	title: "fa-chart_area",
	icon: "",
},
{
	title: "fa-chart_bar",
	icon: "",
},
{
	title: "fa-chart_line",
	icon: "",
},
{
	title: "fa-chart_pie",
	icon: "",
},
{
	title: "fa-check",
	icon: "",
},
{
	title: "fa-check_circle",
	icon: "",
},
{
	title: "fa-check_circle_o",
	icon: "",
},
{
	title: "fa-check_double",
	icon: "",
},
{
	title: "fa-check_square",
	icon: "",
},
{
	title: "fa-check_square_o",
	icon: "",
},
{
	title: "fa-check_to_slot",
	icon: "",
},
{
	title: "fa-cheese",
	icon: "",
},
{
	title: "fa-chess",
	icon: "",
},
{
	title: "fa-chess_bishop",
	icon: "",
},
{
	title: "fa-chess_board",
	icon: "",
},
{
	title: "fa-chess_king",
	icon: "",
},
{
	title: "fa-chess_knight",
	icon: "",
},
{
	title: "fa-chess_pawn",
	icon: "",
},
{
	title: "fa-chess_queen",
	icon: "",
},
{
	title: "fa-chess_rook",
	icon: "",
},
{
	title: "fa-chevron_circle_down",
	icon: "",
},
{
	title: "fa-chevron_circle_left",
	icon: "",
},
{
	title: "fa-chevron_circle_right",
	icon: "",
},
{
	title: "fa-chevron_circle_up",
	icon: "",
},
{
	title: "fa-chevron_down",
	icon: "",
},
{
	title: "fa-chevron_left",
	icon: "",
},
{
	title: "fa-chevron_right",
	icon: "",
},
{
	title: "fa-chevron_up",
	icon: "",
},
{
	title: "fa-child",
	icon: "",
},
{
	title: "fa-chrome",
	icon: "",
},
{
	title: "fa-chromecast",
	icon: "",
},
{
	title: "fa-church",
	icon: "",
},
{
	title: "fa-circle",
	icon: "",
},
{
	title: "fa-circle_arrow_down",
	icon: "",
},
{
	title: "fa-circle_arrow_left",
	icon: "",
},
{
	title: "fa-circle_arrow_right",
	icon: "",
},
{
	title: "fa-circle_arrow_up",
	icon: "",
},
{
	title: "fa-circle_check",
	icon: "",
},
{
	title: "fa-circle_chevron_down",
	icon: "",
},
{
	title: "fa-circle_chevron_left",
	icon: "",
},
{
	title: "fa-circle_chevron_right",
	icon: "",
},
{
	title: "fa-circle_chevron_up",
	icon: "",
},
{
	title: "fa-circle_dollar_to_slot",
	icon: "",
},
{
	title: "fa-circle_dot",
	icon: "",
},
{
	title: "fa-circle_down",
	icon: "",
},
{
	title: "fa-circle_exclamation",
	icon: "",
},
{
	title: "fa-circle_h",
	icon: "",
},
{
	title: "fa-circle_half_stroke",
	icon: "",
},
{
	title: "fa-circle_info",
	icon: "",
},
{
	title: "fa-circle_left",
	icon: "",
},
{
	title: "fa-circle_minus",
	icon: "",
},
{
	title: "fa-circle_notch",
	icon: "",
},
{
	title: "fa-circle_o",
	icon: "",
},
{
	title: "fa-circle_o_notch",
	icon: "",
},
{
	title: "fa-circle_pause",
	icon: "",
},
{
	title: "fa-circle_play",
	icon: "",
},
{
	title: "fa-circle_plus",
	icon: "",
},
{
	title: "fa-circle_question",
	icon: "",
},
{
	title: "fa-circle_radiation",
	icon: "",
},
{
	title: "fa-circle_right",
	icon: "",
},
{
	title: "fa-circle_stop",
	icon: "",
},
{
	title: "fa-circle_thin",
	icon: "",
},
{
	title: "fa-circle_up",
	icon: "",
},
{
	title: "fa-circle_user",
	icon: "",
},
{
	title: "fa-circle_xmark",
	icon: "",
},
{
	title: "fa-city",
	icon: "",
},
{
	title: "fa-clipboard",
	icon: "",
},
{
	title: "fa-clipboard_alt",
	icon: "",
},
{
	title: "fa-clipboard_check",
	icon: "",
},
{
	title: "fa-clipboard_list",
	icon: "",
},
{
	title: "fa-clipboard_user",
	icon: "",
},
{
	title: "fa-clock",
	icon: "",
},
{
	title: "fa-clock_o",
	icon: "",
},
{
	title: "fa-clock_rotate_left",
	icon: "",
},
{
	title: "fa-clone",
	icon: "",
},
{
	title: "fa-close",
	icon: "",
},
{
	title: "fa-closed_captioning",
	icon: "",
},
{
	title: "fa-cloud",
	icon: "",
},
{
	title: "fa-cloud_arrow_down",
	icon: "",
},
{
	title: "fa-cloud_arrow_up",
	icon: "",
},
{
	title: "fa-cloud_bolt",
	icon: "",
},
{
	title: "fa-cloud_download",
	icon: "",
},
{
	title: "fa-cloud_meatball",
	icon: "",
},
{
	title: "fa-cloud_moon",
	icon: "",
},
{
	title: "fa-cloud_moon_rain",
	icon: "",
},
{
	title: "fa-cloud_rain",
	icon: "",
},
{
	title: "fa-cloud_showers_heavy",
	icon: "",
},
{
	title: "fa-cloud_sun",
	icon: "",
},
{
	title: "fa-cloud_sun_rain",
	icon: "",
},
{
	title: "fa-cloud_upload",
	icon: "",
},
{
	title: "fa-cloudscale",
	icon: "",
},
{
	title: "fa-cloudsmith",
	icon: "",
},
{
	title: "fa-cloudversify",
	icon: "",
},
{
	title: "fa-cny",
	icon: "",
},
{
	title: "fa-code",
	icon: "",
},
{
	title: "fa-code_branch",
	icon: "",
},
{
	title: "fa-code_commit",
	icon: "",
},
{
	title: "fa-code_fork",
	icon: "",
},
{
	title: "fa-code_merge",
	icon: "",
},
{
	title: "fa-codepen",
	icon: "",
},
{
	title: "fa-codiepie",
	icon: "",
},
{
	title: "fa-coffee",
	icon: "",
},
{
	title: "fa-cog",
	icon: "",
},
{
	title: "fa-cogs",
	icon: "",
},
{
	title: "fa-coins",
	icon: "",
},
{
	title: "fa-columns",
	icon: "",
},
{
	title: "fa-comment",
	icon: "",
},
{
	title: "fa-comment_dollar",
	icon: "",
},
{
	title: "fa-comment_dots",
	icon: "",
},
{
	title: "fa-comment_medical",
	icon: "",
},
{
	title: "fa-comment_o",
	icon: "",
},
{
	title: "fa-comment_slash",
	icon: "",
},
{
	title: "fa-comment_sms",
	icon: "",
},
{
	title: "fa-commenting",
	icon: "",
},
{
	title: "fa-commenting_o",
	icon: "",
},
{
	title: "fa-comments",
	icon: "",
},
{
	title: "fa-comments_dollar",
	icon: "",
},
{
	title: "fa-comments_o",
	icon: "",
},
{
	title: "fa-compact_disc",
	icon: "",
},
{
	title: "fa-compass",
	icon: "",
},
{
	title: "fa-compass_drafting",
	icon: "",
},
{
	title: "fa-compress",
	icon: "",
},
{
	title: "fa-computer_mouse",
	icon: "",
},
{
	title: "fa-confluence",
	icon: "",
},
{
	title: "fa-connectdevelop",
	icon: "",
},
{
	title: "fa-contao",
	icon: "",
},
{
	title: "fa-cookie",
	icon: "",
},
{
	title: "fa-cookie_bite",
	icon: "",
},
{
	title: "fa-copy",
	icon: "",
},
{
	title: "fa-copyright",
	icon: "",
},
{
	title: "fa-cotton_bureau",
	icon: "",
},
{
	title: "fa-couch",
	icon: "",
},
{
	title: "fa-cow",
	icon: "",
},
{
	title: "fa-cpanel",
	icon: "",
},
{
	title: "fa-creative_commons",
	icon: "",
},
{
	title: "fa-creative_commons_by",
	icon: "",
},
{
	title: "fa-creative_commons_nc",
	icon: "",
},
{
	title: "fa-creative_commons_nc_eu",
	icon: "",
},
{
	title: "fa-creative_commons_nc_jp",
	icon: "",
},
{
	title: "fa-creative_commons_nd",
	icon: "",
},
{
	title: "fa-creative_commons_pd",
	icon: "",
},
{
	title: "fa-creative_commons_pd_alt",
	icon: "",
},
{
	title: "fa-creative_commons_remix",
	icon: "",
},
{
	title: "fa-creative_commons_sa",
	icon: "",
},
{
	title: "fa-creative_commons_sampling",
	icon: "",
},
{
	title: "fa-creative_commons_sampling_plus",
	icon: "",
},
{
	title: "fa-creative_commons_share",
	icon: "",
},
{
	title: "fa-creative_commons_zero",
	icon: "",
},
{
	title: "fa-credit_card",
	icon: "",
},
{
	title: "fa-credit_card_alt",
	icon: "",
},
{
	title: "fa-critical_role",
	icon: "",
},
{
	title: "fa-crop",
	icon: "",
},
{
	title: "fa-crop_simple",
	icon: "",
},
{
	title: "fa-cross",
	icon: "",
},
{
	title: "fa-crosshairs",
	icon: "",
},
{
	title: "fa-crow",
	icon: "",
},
{
	title: "fa-crown",
	icon: "",
},
{
	title: "fa-crutch",
	icon: "",
},
{
	title: "fa-css3",
	icon: "",
},
{
	title: "fa-css3_alt",
	icon: "",
},
{
	title: "fa-cube",
	icon: "",
},
{
	title: "fa-cubes",
	icon: "",
},
{
	title: "fa-cut",
	icon: "",
},
{
	title: "fa-cutlery",
	icon: "",
},
{
	title: "fa-cuttlefish",
	icon: "",
},
{
	title: "fa-d_and_d",
	icon: "",
},
{
	title: "fa-d_and_d_beyond",
	icon: "",
},
{
	title: "fa-dashboard",
	icon: "",
},
{
	title: "fa-dashcube",
	icon: "",
},
{
	title: "fa-database",
	icon: "",
},
{
	title: "fa-deaf",
	icon: "",
},
{
	title: "fa-deafness",
	icon: "",
},
{
	title: "fa-dedent",
	icon: "",
},
{
	title: "fa-delete_left",
	icon: "",
},
{
	title: "fa-delicious",
	icon: "",
},
{
	title: "fa-democrat",
	icon: "",
},
{
	title: "fa-deploydog",
	icon: "",
},
{
	title: "fa-deskpro",
	icon: "",
},
{
	title: "fa-desktop",
	icon: "",
},
{
	title: "fa-dev",
	icon: "",
},
{
	title: "fa-deviantart",
	icon: "",
},
{
	title: "fa-dharmachakra",
	icon: "",
},
{
	title: "fa-dhl",
	icon: "",
},
{
	title: "fa-diagram_project",
	icon: "",
},
{
	title: "fa-diamond",
	icon: "",
},
{
	title: "fa-diamond_turn_right",
	icon: "",
},
{
	title: "fa-diaspora",
	icon: "",
},
{
	title: "fa-dice",
	icon: "",
},
{
	title: "fa-dice_d20",
	icon: "",
},
{
	title: "fa-dice_d6",
	icon: "",
},
{
	title: "fa-dice_five",
	icon: "",
},
{
	title: "fa-dice_four",
	icon: "",
},
{
	title: "fa-dice_one",
	icon: "",
},
{
	title: "fa-dice_six",
	icon: "",
},
{
	title: "fa-dice_three",
	icon: "",
},
{
	title: "fa-dice_two",
	icon: "",
},
{
	title: "fa-digg",
	icon: "",
},
{
	title: "fa-digital_ocean",
	icon: "",
},
{
	title: "fa-discord",
	icon: "",
},
{
	title: "fa-discourse",
	icon: "",
},
{
	title: "fa-disease",
	icon: "",
},
{
	title: "fa-divide",
	icon: "",
},
{
	title: "fa-dna",
	icon: "",
},
{
	title: "fa-dochub",
	icon: "",
},
{
	title: "fa-docker",
	icon: "",
},
{
	title: "fa-dog",
	icon: "",
},
{
	title: "fa-dollar",
	icon: "",
},
{
	title: "fa-dollar_sign",
	icon: "",
},
{
	title: "fa-dolly",
	icon: "",
},
{
	title: "fa-door_closed",
	icon: "",
},
{
	title: "fa-door_open",
	icon: "",
},
{
	title: "fa-dot_circle_o",
	icon: "",
},
{
	title: "fa-dove",
	icon: "",
},
{
	title: "fa-down_left_and_up_right_to_center",
	icon: "",
},
{
	title: "fa-down_long",
	icon: "",
},
{
	title: "fa-download",
	icon: "",
},
{
	title: "fa-draft2digital",
	icon: "",
},
{
	title: "fa-dragon",
	icon: "",
},
{
	title: "fa-draw_polygon",
	icon: "",
},
{
	title: "fa-dribbble",
	icon: "",
},
{
	title: "fa-drivers_license",
	icon: "",
},
{
	title: "fa-drivers_license_o",
	icon: "",
},
{
	title: "fa-dropbox",
	icon: "",
},
{
	title: "fa-droplet",
	icon: "",
},
{
	title: "fa-droplet_slash",
	icon: "",
},
{
	title: "fa-drum",
	icon: "",
},
{
	title: "fa-drum_steelpan",
	icon: "",
},
{
	title: "fa-drumstick_bite",
	icon: "",
},
{
	title: "fa-drupal",
	icon: "",
},
{
	title: "fa-dumbbell",
	icon: "",
},
{
	title: "fa-dumpster",
	icon: "",
},
{
	title: "fa-dumpster_fire",
	icon: "",
},
{
	title: "fa-dungeon",
	icon: "",
},
{
	title: "fa-dyalog",
	icon: "",
},
{
	title: "fa-ear_deaf",
	icon: "",
},
{
	title: "fa-ear_listen",
	icon: "",
},
{
	title: "fa-earlybirds",
	icon: "",
},
{
	title: "fa-earth_africa",
	icon: "",
},
{
	title: "fa-earth_americas",
	icon: "",
},
{
	title: "fa-earth_asia",
	icon: "",
},
{
	title: "fa-earth_europe",
	icon: "",
},
{
	title: "fa-ebay",
	icon: "",
},
{
	title: "fa-edge",
	icon: "",
},
{
	title: "fa-edit",
	icon: "",
},
{
	title: "fa-eercast",
	icon: "",
},
{
	title: "fa-egg",
	icon: "",
},
{
	title: "fa-eject",
	icon: "",
},
{
	title: "fa-elementor",
	icon: "",
},
{
	title: "fa-ellipsis",
	icon: "",
},
{
	title: "fa-ellipsis_h",
	icon: "",
},
{
	title: "fa-ellipsis_v",
	icon: "",
},
{
	title: "fa-ellipsis_vertical",
	icon: "",
},
{
	title: "fa-ello",
	icon: "",
},
{
	title: "fa-ember",
	icon: "",
},
{
	title: "fa-empire",
	icon: "",
},
{
	title: "fa-envelope",
	icon: "",
},
{
	title: "fa-envelope_o",
	icon: "",
},
{
	title: "fa-envelope_open",
	icon: "",
},
{
	title: "fa-envelope_open_o",
	icon: "",
},
{
	title: "fa-envelope_open_text",
	icon: "",
},
{
	title: "fa-envelope_square",
	icon: "",
},
{
	title: "fa-envelopes_bulk",
	icon: "",
},
{
	title: "fa-envira",
	icon: "",
},
{
	title: "fa-equals",
	icon: "",
},
{
	title: "fa-eraser",
	icon: "",
},
{
	title: "fa-erlang",
	icon: "",
},
{
	title: "fa-ethereum",
	icon: "",
},
{
	title: "fa-ethernet",
	icon: "",
},
{
	title: "fa-etsy",
	icon: "",
},
{
	title: "fa-eur",
	icon: "",
},
{
	title: "fa-euro",
	icon: "",
},
{
	title: "fa-euro_sign",
	icon: "",
},
{
	title: "fa-evernote",
	icon: "",
},
{
	title: "fa-exchange",
	icon: "",
},
{
	title: "fa-exclamation",
	icon: "",
},
{
	title: "fa-exclamation_circle",
	icon: "",
},
{
	title: "fa-exclamation_triangle",
	icon: "",
},
{
	title: "fa-expand",
	icon: "",
},
{
	title: "fa-expeditedssl",
	icon: "",
},
{
	title: "fa-external_link",
	icon: "",
},
{
	title: "fa-external_link_square",
	icon: "",
},
{
	title: "fa-eye",
	icon: "",
},
{
	title: "fa-eye_dropper",
	icon: "",
},
{
	title: "fa-eye_low_vision",
	icon: "",
},
{
	title: "fa-eye_slash",
	icon: "",
},
{
	title: "fa-eyedropper",
	icon: "",
},
{
	title: "fa-fa",
	icon: "",
},
{
	title: "fa-face_angry",
	icon: "",
},
{
	title: "fa-face_dizzy",
	icon: "",
},
{
	title: "fa-face_flushed",
	icon: "",
},
{
	title: "fa-face_frown",
	icon: "",
},
{
	title: "fa-face_frown_open",
	icon: "",
},
{
	title: "fa-face_grimace",
	icon: "",
},
{
	title: "fa-face_grin",
	icon: "",
},
{
	title: "fa-face_grin_beam",
	icon: "",
},
{
	title: "fa-face_grin_beam_sweat",
	icon: "",
},
{
	title: "fa-face_grin_hearts",
	icon: "",
},
{
	title: "fa-face_grin_squint",
	icon: "",
},
{
	title: "fa-face_grin_squint_tears",
	icon: "",
},
{
	title: "fa-face_grin_stars",
	icon: "",
},
{
	title: "fa-face_grin_tears",
	icon: "",
},
{
	title: "fa-face_grin_tongue",
	icon: "",
},
{
	title: "fa-face_grin_tongue_squint",
	icon: "",
},
{
	title: "fa-face_grin_tongue_wink",
	icon: "",
},
{
	title: "fa-face_grin_wide",
	icon: "",
},
{
	title: "fa-face_grin_wink",
	icon: "",
},
{
	title: "fa-face_kiss",
	icon: "",
},
{
	title: "fa-face_kiss_beam",
	icon: "",
},
{
	title: "fa-face_kiss_wink_heart",
	icon: "",
},
{
	title: "fa-face_laugh",
	icon: "",
},
{
	title: "fa-face_laugh_beam",
	icon: "",
},
{
	title: "fa-face_laugh_squint",
	icon: "",
},
{
	title: "fa-face_laugh_wink",
	icon: "",
},
{
	title: "fa-face_meh",
	icon: "",
},
{
	title: "fa-face_meh_blank",
	icon: "",
},
{
	title: "fa-face_rolling_eyes",
	icon: "",
},
{
	title: "fa-face_sad_cry",
	icon: "",
},
{
	title: "fa-face_sad_tear",
	icon: "",
},
{
	title: "fa-face_smile",
	icon: "",
},
{
	title: "fa-face_smile_beam",
	icon: "",
},
{
	title: "fa-face_smile_wink",
	icon: "",
},
{
	title: "fa-face_surprise",
	icon: "",
},
{
	title: "fa-face_tired",
	icon: "",
},
{
	title: "fa-facebook",
	icon: "",
},
{
	title: "fa-facebook_f",
	icon: "",
},
{
	title: "fa-facebook_messenger",
	icon: "",
},
{
	title: "fa-facebook_official",
	icon: "",
},
{
	title: "fa-facebook_square",
	icon: "",
},
{
	title: "fa-fan",
	icon: "",
},
{
	title: "fa-fantasy_flight_games",
	icon: "",
},
{
	title: "fa-fast_backward",
	icon: "",
},
{
	title: "fa-fast_forward",
	icon: "",
},
{
	title: "fa-fax",
	icon: "",
},
{
	title: "fa-feather",
	icon: "",
},
{
	title: "fa-feather_pointed",
	icon: "",
},
{
	title: "fa-fedex",
	icon: "",
},
{
	title: "fa-fedora",
	icon: "",
},
{
	title: "fa-feed",
	icon: "",
},
{
	title: "fa-female",
	icon: "",
},
{
	title: "fa-fighter_jet",
	icon: "",
},
{
	title: "fa-figma",
	icon: "",
},
{
	title: "fa-file",
	icon: "",
},
{
	title: "fa-file_archive_o",
	icon: "",
},
{
	title: "fa-file_arrow_down",
	icon: "",
},
{
	title: "fa-file_arrow_up",
	icon: "",
},
{
	title: "fa-file_audio",
	icon: "",
},
{
	title: "fa-file_audio_o",
	icon: "",
},
{
	title: "fa-file_code",
	icon: "",
},
{
	title: "fa-file_code_o",
	icon: "",
},
{
	title: "fa-file_contract",
	icon: "",
},
{
	title: "fa-file_csv",
	icon: "",
},
{
	title: "fa-file_excel",
	icon: "",
},
{
	title: "fa-file_excel_o",
	icon: "",
},
{
	title: "fa-file_export",
	icon: "",
},
{
	title: "fa-file_image",
	icon: "",
},
{
	title: "fa-file_image_o",
	icon: "",
},
{
	title: "fa-file_import",
	icon: "",
},
{
	title: "fa-file_invoice",
	icon: "",
},
{
	title: "fa-file_invoice_dollar",
	icon: "",
},
{
	title: "fa-file_lines",
	icon: "",
},
{
	title: "fa-file_medical",
	icon: "",
},
{
	title: "fa-file_movie_o",
	icon: "",
},
{
	title: "fa-file_o",
	icon: "",
},
{
	title: "fa-file_pdf",
	icon: "",
},
{
	title: "fa-file_pdf_o",
	icon: "",
},
{
	title: "fa-file_pen",
	icon: "",
},
{
	title: "fa-file_photo_o",
	icon: "",
},
{
	title: "fa-file_picture_o",
	icon: "",
},
{
	title: "fa-file_powerpoint",
	icon: "",
},
{
	title: "fa-file_powerpoint_o",
	icon: "",
},
{
	title: "fa-file_prescription",
	icon: "",
},
{
	title: "fa-file_signature",
	icon: "",
},
{
	title: "fa-file_sound_o",
	icon: "",
},
{
	title: "fa-file_text",
	icon: "",
},
{
	title: "fa-file_text_o",
	icon: "",
},
{
	title: "fa-file_video",
	icon: "",
},
{
	title: "fa-file_video_o",
	icon: "",
},
{
	title: "fa-file_waveform",
	icon: "",
},
{
	title: "fa-file_word",
	icon: "",
},
{
	title: "fa-file_word_o",
	icon: "",
},
{
	title: "fa-file_zip_o",
	icon: "",
},
{
	title: "fa-file_zipper",
	icon: "",
},
{
	title: "fa-files_o",
	icon: "",
},
{
	title: "fa-fill",
	icon: "",
},
{
	title: "fa-fill_drip",
	icon: "",
},
{
	title: "fa-film",
	icon: "",
},
{
	title: "fa-filter",
	icon: "",
},
{
	title: "fa-filter_circle_dollar",
	icon: "",
},
{
	title: "fa-fingerprint",
	icon: "",
},
{
	title: "fa-fire",
	icon: "",
},
{
	title: "fa-fire_extinguisher",
	icon: "",
},
{
	title: "fa-fire_flame_curved",
	icon: "",
},
{
	title: "fa-fire_flame_simple",
	icon: "",
},
{
	title: "fa-firefox",
	icon: "",
},
{
	title: "fa-first_order",
	icon: "",
},
{
	title: "fa-first_order_alt",
	icon: "",
},
{
	title: "fa-firstdraft",
	icon: "",
},
{
	title: "fa-fish",
	icon: "",
},
{
	title: "fa-flag",
	icon: "",
},
{
	title: "fa-flag_checkered",
	icon: "",
},
{
	title: "fa-flag_o",
	icon: "",
},
{
	title: "fa-flag_usa",
	icon: "",
},
{
	title: "fa-flash",
	icon: "",
},
{
	title: "fa-flask",
	icon: "",
},
{
	title: "fa-flickr",
	icon: "",
},
{
	title: "fa-flipboard",
	icon: "",
},
{
	title: "fa-floppy_disk",
	icon: "",
},
{
	title: "fa-floppy_o",
	icon: "",
},
{
	title: "fa-fly",
	icon: "",
},
{
	title: "fa-folder",
	icon: "",
},
{
	title: "fa-folder_minus",
	icon: "",
},
{
	title: "fa-folder_o",
	icon: "",
},
{
	title: "fa-folder_open",
	icon: "",
},
{
	title: "fa-folder_open_o",
	icon: "",
},
{
	title: "fa-folder_plus",
	icon: "",
},
{
	title: "fa-folder_tree",
	icon: "",
},
{
	title: "fa-font",
	icon: "",
},
{
	title: "fa-font_awesome",
	icon: "",
},
{
	title: "fa-fonticons",
	icon: "",
},
{
	title: "fa-fonticons_fi",
	icon: "",
},
{
	title: "fa-football",
	icon: "",
},
{
	title: "fa-fort_awesome",
	icon: "",
},
{
	title: "fa-fort_awesome_alt",
	icon: "",
},
{
	title: "fa-forumbee",
	icon: "",
},
{
	title: "fa-forward",
	icon: "",
},
{
	title: "fa-forward_fast",
	icon: "",
},
{
	title: "fa-forward_step",
	icon: "",
},
{
	title: "fa-foursquare",
	icon: "",
},
{
	title: "fa-free_code_camp",
	icon: "",
},
{
	title: "fa-freebsd",
	icon: "",
},
{
	title: "fa-frog",
	icon: "",
},
{
	title: "fa-frown_o",
	icon: "",
},
{
	title: "fa-fulcrum",
	icon: "",
},
{
	title: "fa-futbol",
	icon: "",
},
{
	title: "fa-futbol_o",
	icon: "",
},
{
	title: "fa-galactic_republic",
	icon: "",
},
{
	title: "fa-galactic_senate",
	icon: "",
},
{
	title: "fa-gamepad",
	icon: "",
},
{
	title: "fa-gas_pump",
	icon: "",
},
{
	title: "fa-gauge",
	icon: "",
},
{
	title: "fa-gauge_high",
	icon: "",
},
{
	title: "fa-gauge_simple",
	icon: "",
},
{
	title: "fa-gauge_simple_high",
	icon: "",
},
{
	title: "fa-gavel",
	icon: "",
},
{
	title: "fa-gbp",
	icon: "",
},
{
	title: "fa-ge",
	icon: "",
},
{
	title: "fa-gear",
	icon: "",
},
{
	title: "fa-gears",
	icon: "",
},
{
	title: "fa-gem",
	icon: "",
},
{
	title: "fa-genderless",
	icon: "",
},
{
	title: "fa-get_pocket",
	icon: "",
},
{
	title: "fa-gg",
	icon: "",
},
{
	title: "fa-gg_circle",
	icon: "",
},
{
	title: "fa-ghost",
	icon: "",
},
{
	title: "fa-gift",
	icon: "",
},
{
	title: "fa-gifts",
	icon: "",
},
{
	title: "fa-git",
	icon: "",
},
{
	title: "fa-git_alt",
	icon: "",
},
{
	title: "fa-git_square",
	icon: "",
},
{
	title: "fa-github",
	icon: "",
},
{
	title: "fa-github_alt",
	icon: "",
},
{
	title: "fa-github_square",
	icon: "",
},
{
	title: "fa-gitkraken",
	icon: "",
},
{
	title: "fa-gitlab",
	icon: "",
},
{
	title: "fa-gitter",
	icon: "",
},
{
	title: "fa-gittip",
	icon: "",
},
{
	title: "fa-glass",
	icon: "",
},
{
	title: "fa-glasses",
	icon: "",
},
{
	title: "fa-glide",
	icon: "",
},
{
	title: "fa-glide_g",
	icon: "",
},
{
	title: "fa-globe",
	icon: "",
},
{
	title: "fa-gofore",
	icon: "",
},
{
	title: "fa-golf_ball_tee",
	icon: "",
},
{
	title: "fa-goodreads",
	icon: "",
},
{
	title: "fa-goodreads_g",
	icon: "",
},
{
	title: "fa-google",
	icon: "",
},
{
	title: "fa-google_drive",
	icon: "",
},
{
	title: "fa-google_play",
	icon: "",
},
{
	title: "fa-google_plus",
	icon: "",
},
{
	title: "fa-google_plus_circle",
	icon: "",
},
{
	title: "fa-google_plus_official",
	icon: "",
},
{
	title: "fa-google_plus_square",
	icon: "",
},
{
	title: "fa-google_wallet",
	icon: "",
},
{
	title: "fa-gopuram",
	icon: "",
},
{
	title: "fa-graduation_cap",
	icon: "",
},
{
	title: "fa-gratipay",
	icon: "",
},
{
	title: "fa-grav",
	icon: "",
},
{
	title: "fa-greater_than",
	icon: "",
},
{
	title: "fa-greater_than_equal",
	icon: "",
},
{
	title: "fa-grip",
	icon: "",
},
{
	title: "fa-grip_lines",
	icon: "",
},
{
	title: "fa-grip_lines_vertical",
	icon: "",
},
{
	title: "fa-grip_vertical",
	icon: "",
},
{
	title: "fa-gripfire",
	icon: "",
},
{
	title: "fa-group",
	icon: "",
},
{
	title: "fa-grunt",
	icon: "",
},
{
	title: "fa-guitar",
	icon: "",
},
{
	title: "fa-gulp",
	icon: "",
},
{
	title: "fa-h_square",
	icon: "",
},
{
	title: "fa-hacker_news",
	icon: "",
},
{
	title: "fa-hackerrank",
	icon: "",
},
{
	title: "fa-hammer",
	icon: "",
},
{
	title: "fa-hamsa",
	icon: "",
},
{
	title: "fa-hand",
	icon: "",
},
{
	title: "fa-hand_back_fist",
	icon: "",
},
{
	title: "fa-hand_dots",
	icon: "",
},
{
	title: "fa-hand_fist",
	icon: "",
},
{
	title: "fa-hand_grab_o",
	icon: "",
},
{
	title: "fa-hand_holding",
	icon: "",
},
{
	title: "fa-hand_holding_dollar",
	icon: "",
},
{
	title: "fa-hand_holding_droplet",
	icon: "",
},
{
	title: "fa-hand_holding_heart",
	icon: "",
},
{
	title: "fa-hand_lizard",
	icon: "",
},
{
	title: "fa-hand_lizard_o",
	icon: "",
},
{
	title: "fa-hand_middle_finger",
	icon: "",
},
{
	title: "fa-hand_o_down",
	icon: "",
},
{
	title: "fa-hand_o_left",
	icon: "",
},
{
	title: "fa-hand_o_right",
	icon: "",
},
{
	title: "fa-hand_o_up",
	icon: "",
},
{
	title: "fa-hand_paper_o",
	icon: "",
},
{
	title: "fa-hand_peace",
	icon: "",
},
{
	title: "fa-hand_peace_o",
	icon: "",
},
{
	title: "fa-hand_point_down",
	icon: "",
},
{
	title: "fa-hand_point_left",
	icon: "",
},
{
	title: "fa-hand_point_right",
	icon: "",
},
{
	title: "fa-hand_point_up",
	icon: "",
},
{
	title: "fa-hand_pointer",
	icon: "",
},
{
	title: "fa-hand_pointer_o",
	icon: "",
},
{
	title: "fa-hand_rock_o",
	icon: "",
},
{
	title: "fa-hand_scissors",
	icon: "",
},
{
	title: "fa-hand_scissors_o",
	icon: "",
},
{
	title: "fa-hand_spock",
	icon: "",
},
{
	title: "fa-hand_spock_o",
	icon: "",
},
{
	title: "fa-hand_stop_o",
	icon: "",
},
{
	title: "fa-hands",
	icon: "",
},
{
	title: "fa-hands_asl_interpreting",
	icon: "",
},
{
	title: "fa-hands_holding",
	icon: "",
},
{
	title: "fa-hands_praying",
	icon: "",
},
{
	title: "fa-handshake",
	icon: "",
},
{
	title: "fa-handshake_angle",
	icon: "",
},
{
	title: "fa-handshake_o",
	icon: "",
},
{
	title: "fa-handshake_simple",
	icon: "",
},
{
	title: "fa-hanukiah",
	icon: "",
},
{
	title: "fa-hard_drive",
	icon: "",
},
{
	title: "fa-hard_of_hearing",
	icon: "",
},
{
	title: "fa-hashtag",
	icon: "",
},
{
	title: "fa-hat_cowboy",
	icon: "",
},
{
	title: "fa-hat_cowboy_side",
	icon: "",
},
{
	title: "fa-hat_wizard",
	icon: "",
},
{
	title: "fa-hdd_o",
	icon: "",
},
{
	title: "fa-header",
	icon: "",
},
{
	title: "fa-heading",
	icon: "",
},
{
	title: "fa-headphones",
	icon: "",
},
{
	title: "fa-headphones_simple",
	icon: "",
},
{
	title: "fa-headset",
	icon: "",
},
{
	title: "fa-heard_o",
	icon: "",
},
{
	title: "fa-heart",
	icon: "",
},
{
	title: "fa-heart_crack",
	icon: "",
},
{
	title: "fa-heart_o",
	icon: "",
},
{
	title: "fa-heart_pulse",
	icon: "",
},
{
	title: "fa-heartbeat",
	icon: "",
},
{
	title: "fa-helicopter",
	icon: "",
},
{
	title: "fa-helmet_safety",
	icon: "",
},
{
	title: "fa-highlighter",
	icon: "",
},
{
	title: "fa-hippo",
	icon: "",
},
{
	title: "fa-hips",
	icon: "",
},
{
	title: "fa-hire_a_helper",
	icon: "",
},
{
	title: "fa-history",
	icon: "",
},
{
	title: "fa-hockey_puck",
	icon: "",
},
{
	title: "fa-holly_berry",
	icon: "",
},
{
	title: "fa-home",
	icon: "",
},
{
	title: "fa-hooli",
	icon: "",
},
{
	title: "fa-hornbill",
	icon: "",
},
{
	title: "fa-horse",
	icon: "",
},
{
	title: "fa-horse_head",
	icon: "",
},
{
	title: "fa-hospital",
	icon: "",
},
{
	title: "fa-hospital_o",
	icon: "",
},
{
	title: "fa-hospital_user",
	icon: "",
},
{
	title: "fa-hot_tub_person",
	icon: "",
},
{
	title: "fa-hotdog",
	icon: "",
},
{
	title: "fa-hotel",
	icon: "",
},
{
	title: "fa-hotel_building",
	icon: "",
},
{
	title: "fa-hotjar",
	icon: "",
},
{
	title: "fa-hourglass",
	icon: "",
},
{
	title: "fa-hourglass_1",
	icon: "",
},
{
	title: "fa-hourglass_2",
	icon: "",
},
{
	title: "fa-hourglass_3",
	icon: "",
},
{
	title: "fa-hourglass_end",
	icon: "",
},
{
	title: "fa-hourglass_half",
	icon: "",
},
{
	title: "fa-hourglass_o",
	icon: "",
},
{
	title: "fa-hourglass_start",
	icon: "",
},
{
	title: "fa-house",
	icon: "",
},
{
	title: "fa-house_chimney",
	icon: "",
},
{
	title: "fa-house_chimney_crack",
	icon: "",
},
{
	title: "fa-house_chimney_medical",
	icon: "",
},
{
	title: "fa-houzz",
	icon: "",
},
{
	title: "fa-hryvnia_sign",
	icon: "",
},
{
	title: "fa-html5",
	icon: "",
},
{
	title: "fa-hubspot",
	icon: "",
},
{
	title: "fa-hurricane",
	icon: "",
},
{
	title: "fa-i_cursor",
	icon: "",
},
{
	title: "fa-ice_cream",
	icon: "",
},
{
	title: "fa-icicles",
	icon: "",
},
{
	title: "fa-icons",
	icon: "",
},
{
	title: "fa-id_badge",
	icon: "",
},
{
	title: "fa-id_card",
	icon: "",
},
{
	title: "fa-id_card_clip",
	icon: "",
},
{
	title: "fa-id_card_o",
	icon: "",
},
{
	title: "fa-igloo",
	icon: "",
},
{
	title: "fa-ils",
	icon: "",
},
{
	title: "fa-image",
	icon: "",
},
{
	title: "fa-image_portrait",
	icon: "",
},
{
	title: "fa-images",
	icon: "",
},
{
	title: "fa-imdb",
	icon: "",
},
{
	title: "fa-inbox",
	icon: "",
},
{
	title: "fa-indent",
	icon: "",
},
{
	title: "fa-industry",
	icon: "",
},
{
	title: "fa-infinity",
	icon: "",
},
{
	title: "fa-info",
	icon: "",
},
{
	title: "fa-info_circle",
	icon: "",
},
{
	title: "fa-inr",
	icon: "",
},
{
	title: "fa-instagram",
	icon: "",
},
{
	title: "fa-institution",
	icon: "",
},
{
	title: "fa-intercom",
	icon: "",
},
{
	title: "fa-internet_explorer",
	icon: "",
},
{
	title: "fa-intersex",
	icon: "",
},
{
	title: "fa-invision",
	icon: "",
},
{
	title: "fa-ioxhost",
	icon: "",
},
{
	title: "fa-italic",
	icon: "",
},
{
	title: "fa-itch_io",
	icon: "",
},
{
	title: "fa-itunes",
	icon: "",
},
{
	title: "fa-itunes_note",
	icon: "",
},
{
	title: "fa-java",
	icon: "",
},
{
	title: "fa-jedi",
	icon: "",
},
{
	title: "fa-jedi_order",
	icon: "",
},
{
	title: "fa-jenkins",
	icon: "",
},
{
	title: "fa-jet_fighter",
	icon: "",
},
{
	title: "fa-jira",
	icon: "",
},
{
	title: "fa-joget",
	icon: "",
},
{
	title: "fa-joint",
	icon: "",
},
{
	title: "fa-joomla",
	icon: "",
},
{
	title: "fa-jpy",
	icon: "",
},
{
	title: "fa-js",
	icon: "",
},
{
	title: "fa-jsfiddle",
	icon: "",
},
{
	title: "fa-kaaba",
	icon: "",
},
{
	title: "fa-kaggle",
	icon: "",
},
{
	title: "fa-key",
	icon: "",
},
{
	title: "fa-keybase",
	icon: "",
},
{
	title: "fa-keyboard",
	icon: "",
},
{
	title: "fa-keyboard_o",
	icon: "",
},
{
	title: "fa-keycdn",
	icon: "",
},
{
	title: "fa-khanda",
	icon: "",
},
{
	title: "fa-kickstarter",
	icon: "",
},
{
	title: "fa-kickstarter_k",
	icon: "",
},
{
	title: "fa-kit_medical",
	icon: "",
},
{
	title: "fa-kiwi_bird",
	icon: "",
},
{
	title: "fa-korvue",
	icon: "",
},
{
	title: "fa-krw",
	icon: "",
},
{
	title: "fa-landmark",
	icon: "",
},
{
	title: "fa-landmark_dome",
	icon: "",
},
{
	title: "fa-language",
	icon: "",
},
{
	title: "fa-laptop",
	icon: "",
},
{
	title: "fa-laptop_code",
	icon: "",
},
{
	title: "fa-laptop_medical",
	icon: "",
},
{
	title: "fa-laravel",
	icon: "",
},
{
	title: "fa-lastfm",
	icon: "",
},
{
	title: "fa-lastfm_square",
	icon: "",
},
{
	title: "fa-layer_group",
	icon: "",
},
{
	title: "fa-leaf",
	icon: "",
},
{
	title: "fa-leanpub",
	icon: "",
},
{
	title: "fa-left_long",
	icon: "",
},
{
	title: "fa-left_right",
	icon: "",
},
{
	title: "fa-legal",
	icon: "",
},
{
	title: "fa-lemon",
	icon: "",
},
{
	title: "fa-lemon_o",
	icon: "",
},
{
	title: "fa-less",
	icon: "",
},
{
	title: "fa-less_than",
	icon: "",
},
{
	title: "fa-less_than_equal",
	icon: "",
},
{
	title: "fa-level_down",
	icon: "",
},
{
	title: "fa-level_up",
	icon: "",
},
{
	title: "fa-life_bouy",
	icon: "",
},
{
	title: "fa-life_buoy",
	icon: "",
},
{
	title: "fa-life_ring",
	icon: "",
},
{
	title: "fa-life_saver",
	icon: "",
},
{
	title: "fa-lightbulb",
	icon: "",
},
{
	title: "fa-lightbulb_o",
	icon: "",
},
{
	title: "fa-line",
	icon: "",
},
{
	title: "fa-line_chart",
	icon: "",
},
{
	title: "fa-link",
	icon: "",
},
{
	title: "fa-link_slash",
	icon: "",
},
{
	title: "fa-linkedin",
	icon: "",
},
{
	title: "fa-linkedin_in",
	icon: "",
},
{
	title: "fa-linkedin_square",
	icon: "",
},
{
	title: "fa-linode",
	icon: "",
},
{
	title: "fa-linux",
	icon: "",
},
{
	title: "fa-lira_sign",
	icon: "",
},
{
	title: "fa-list",
	icon: "",
},
{
	title: "fa-list_alt",
	icon: "",
},
{
	title: "fa-list_check",
	icon: "",
},
{
	title: "fa-list_ol",
	icon: "",
},
{
	title: "fa-list_ul",
	icon: "",
},
{
	title: "fa-location_arrow",
	icon: "",
},
{
	title: "fa-location_crosshairs",
	icon: "",
},
{
	title: "fa-location_dot",
	icon: "",
},
{
	title: "fa-location_pin",
	icon: "",
},
{
	title: "fa-lock",
	icon: "",
},
{
	title: "fa-lock_open",
	icon: "",
},
{
	title: "fa-long_arrow_down",
	icon: "",
},
{
	title: "fa-long_arrow_left",
	icon: "",
},
{
	title: "fa-long_arrow_right",
	icon: "",
},
{
	title: "fa-long_arrow_up",
	icon: "",
},
{
	title: "fa-low_vision",
	icon: "",
},
{
	title: "fa-lungs",
	icon: "",
},
{
	title: "fa-lyft",
	icon: "",
},
{
	title: "fa-magento",
	icon: "",
},
{
	title: "fa-magic",
	icon: "",
},
{
	title: "fa-magnet",
	icon: "",
},
{
	title: "fa-magnifying_glass",
	icon: "",
},
{
	title: "fa-magnifying_glass_dollar",
	icon: "",
},
{
	title: "fa-magnifying_glass_location",
	icon: "",
},
{
	title: "fa-magnifying_glass_minus",
	icon: "",
},
{
	title: "fa-magnifying_glass_plus",
	icon: "",
},
{
	title: "fa-mail_forward",
	icon: "",
},
{
	title: "fa-mail_reply",
	icon: "",
},
{
	title: "fa-mail_reply_all",
	icon: "",
},
{
	title: "fa-mailchimp",
	icon: "",
},
{
	title: "fa-male",
	icon: "",
},
{
	title: "fa-mandalorian",
	icon: "",
},
{
	title: "fa-map",
	icon: "",
},
{
	title: "fa-map_location",
	icon: "",
},
{
	title: "fa-map_location_dot",
	icon: "",
},
{
	title: "fa-map_marker",
	icon: "",
},
{
	title: "fa-map_o",
	icon: "",
},
{
	title: "fa-map_pin",
	icon: "",
},
{
	title: "fa-map_signs",
	icon: "",
},
{
	title: "fa-markdown",
	icon: "",
},
{
	title: "fa-marker",
	icon: "",
},
{
	title: "fa-mars",
	icon: "",
},
{
	title: "fa-mars_double",
	icon: "",
},
{
	title: "fa-mars_stroke",
	icon: "",
},
{
	title: "fa-mars_stroke_h",
	icon: "",
},
{
	title: "fa-mars_stroke_right",
	icon: "",
},
{
	title: "fa-mars_stroke_up",
	icon: "",
},
{
	title: "fa-mars_stroke_v",
	icon: "",
},
{
	title: "fa-martini_glass",
	icon: "",
},
{
	title: "fa-martini_glass_citrus",
	icon: "",
},
{
	title: "fa-martini_glass_empty",
	icon: "",
},
{
	title: "fa-mask",
	icon: "",
},
{
	title: "fa-masks_theater",
	icon: "",
},
{
	title: "fa-mastodon",
	icon: "",
},
{
	title: "fa-maxcdn",
	icon: "",
},
{
	title: "fa-maximize",
	icon: "",
},
{
	title: "fa-mdb",
	icon: "",
},
{
	title: "fa-meanpath",
	icon: "",
},
{
	title: "fa-medal",
	icon: "",
},
{
	title: "fa-medapps",
	icon: "",
},
{
	title: "fa-medium",
	icon: "",
},
{
	title: "fa-medkit",
	icon: "",
},
{
	title: "fa-medrt",
	icon: "",
},
{
	title: "fa-meetup",
	icon: "",
},
{
	title: "fa-megaport",
	icon: "",
},
{
	title: "fa-meh_o",
	icon: "",
},
{
	title: "fa-memory",
	icon: "",
},
{
	title: "fa-mendeley",
	icon: "",
},
{
	title: "fa-menorah",
	icon: "",
},
{
	title: "fa-mercury",
	icon: "",
},
{
	title: "fa-message",
	icon: "",
},
{
	title: "fa-meteor",
	icon: "",
},
{
	title: "fa-microchip",
	icon: "",
},
{
	title: "fa-microphone",
	icon: "",
},
{
	title: "fa-microphone_lines",
	icon: "",
},
{
	title: "fa-microphone_lines_slash",
	icon: "",
},
{
	title: "fa-microphone_slash",
	icon: "",
},
{
	title: "fa-microscope",
	icon: "",
},
{
	title: "fa-microsoft",
	icon: "",
},
{
	title: "fa-minimize",
	icon: "",
},
{
	title: "fa-minus",
	icon: "",
},
{
	title: "fa-minus_circle",
	icon: "",
},
{
	title: "fa-minus_square",
	icon: "",
},
{
	title: "fa-minus_square_o",
	icon: "",
},
{
	title: "fa-mitten",
	icon: "",
},
{
	title: "fa-mix",
	icon: "",
},
{
	title: "fa-mixcloud",
	icon: "",
},
{
	title: "fa-mizuni",
	icon: "",
},
{
	title: "fa-mobile",
	icon: "",
},
{
	title: "fa-mobile_button",
	icon: "",
},
{
	title: "fa-mobile_phone",
	icon: "",
},
{
	title: "fa-mobile_screen",
	icon: "",
},
{
	title: "fa-mobile_screen_button",
	icon: "",
},
{
	title: "fa-modx",
	icon: "",
},
{
	title: "fa-monero",
	icon: "",
},
{
	title: "fa-money",
	icon: "",
},
{
	title: "fa-money_bill",
	icon: "",
},
{
	title: "fa-money_bill_1",
	icon: "",
},
{
	title: "fa-money_bill_1_wave",
	icon: "",
},
{
	title: "fa-money_bill_wave",
	icon: "",
},
{
	title: "fa-money_check",
	icon: "",
},
{
	title: "fa-money_check_dollar",
	icon: "",
},
{
	title: "fa-monument",
	icon: "",
},
{
	title: "fa-moon",
	icon: "",
},
{
	title: "fa-moon_o",
	icon: "",
},
{
	title: "fa-mortar_board",
	icon: "",
},
{
	title: "fa-mortar_pestle",
	icon: "",
},
{
	title: "fa-mosque",
	icon: "",
},
{
	title: "fa-motorcycle",
	icon: "",
},
{
	title: "fa-mountain",
	icon: "",
},
{
	title: "fa-mouse_pointer",
	icon: "",
},
{
	title: "fa-mug_hot",
	icon: "",
},
{
	title: "fa-mug_saucer",
	icon: "",
},
{
	title: "fa-music",
	icon: "",
},
{
	title: "fa-napster",
	icon: "",
},
{
	title: "fa-navicon",
	icon: "",
},
{
	title: "fa-neos",
	icon: "",
},
{
	title: "fa-network_wired",
	icon: "",
},
{
	title: "fa-neuter",
	icon: "",
},
{
	title: "fa-newspaper",
	icon: "",
},
{
	title: "fa-newspaper_o",
	icon: "",
},
{
	title: "fa-nimblr",
	icon: "",
},
{
	title: "fa-node",
	icon: "",
},
{
	title: "fa-node_js",
	icon: "",
},
{
	title: "fa-not_equal",
	icon: "",
},
{
	title: "fa-note_sticky",
	icon: "",
},
{
	title: "fa-notes_medical",
	icon: "",
},
{
	title: "fa-npm",
	icon: "",
},
{
	title: "fa-ns8",
	icon: "",
},
{
	title: "fa-nutritionix",
	icon: "",
},
{
	title: "fa-object_group",
	icon: "",
},
{
	title: "fa-object_ungroup",
	icon: "",
},
{
	title: "fa-odnoklassniki",
	icon: "",
},
{
	title: "fa-odnoklassniki_square",
	icon: "",
},
{
	title: "fa-oil_can",
	icon: "",
},
{
	title: "fa-ok_sign",
	icon: "",
},
{
	title: "fa-old_republic",
	icon: "",
},
{
	title: "fa-om",
	icon: "",
},
{
	title: "fa-opencart",
	icon: "",
},
{
	title: "fa-openid",
	icon: "",
},
{
	title: "fa-opera",
	icon: "",
},
{
	title: "fa-optin_monster",
	icon: "",
},
{
	title: "fa-orcid",
	icon: "",
},
{
	title: "fa-osi",
	icon: "",
},
{
	title: "fa-otter",
	icon: "",
},
{
	title: "fa-outdent",
	icon: "",
},
{
	title: "fa-page4",
	icon: "",
},
{
	title: "fa-pagelines",
	icon: "",
},
{
	title: "fa-pager",
	icon: "",
},
{
	title: "fa-paint_brush",
	icon: "",
},
{
	title: "fa-paint_roller",
	icon: "",
},
{
	title: "fa-paintbrush",
	icon: "",
},
{
	title: "fa-palette",
	icon: "",
},
{
	title: "fa-palfed",
	icon: "",
},
{
	title: "fa-pallet",
	icon: "",
},
{
	title: "fa-paper_plane",
	icon: "",
},
{
	title: "fa-paper_plane_o",
	icon: "",
},
{
	title: "fa-paperclip",
	icon: "",
},
{
	title: "fa-parachute_box",
	icon: "",
},
{
	title: "fa-paragraph",
	icon: "",
},
{
	title: "fa-passport",
	icon: "",
},
{
	title: "fa-paste",
	icon: "",
},
{
	title: "fa-patreon",
	icon: "",
},
{
	title: "fa-pause",
	icon: "",
},
{
	title: "fa-pause_circle",
	icon: "",
},
{
	title: "fa-pause_circle_o",
	icon: "",
},
{
	title: "fa-paw",
	icon: "",
},
{
	title: "fa-paypal",
	icon: "",
},
{
	title: "fa-peace",
	icon: "",
},
{
	title: "fa-pen",
	icon: "",
},
{
	title: "fa-pen_clip",
	icon: "",
},
{
	title: "fa-pen_fancy",
	icon: "",
},
{
	title: "fa-pen_nib",
	icon: "",
},
{
	title: "fa-pen_ruler",
	icon: "",
},
{
	title: "fa-pen_to_square",
	icon: "",
},
{
	title: "fa-pencil",
	icon: "",
},
{
	title: "fa-pencil_square",
	icon: "",
},
{
	title: "fa-pencil_square_o",
	icon: "",
},
{
	title: "fa-people_carry_box",
	icon: "",
},
{
	title: "fa-pepper_hot",
	icon: "",
},
{
	title: "fa-percent",
	icon: "",
},
{
	title: "fa-periscope",
	icon: "",
},
{
	title: "fa-person",
	icon: "",
},
{
	title: "fa-person_biking",
	icon: "",
},
{
	title: "fa-person_booth",
	icon: "",
},
{
	title: "fa-person_digging",
	icon: "",
},
{
	title: "fa-person_dots_from_line",
	icon: "",
},
{
	title: "fa-person_dress",
	icon: "",
},
{
	title: "fa-person_hiking",
	icon: "",
},
{
	title: "fa-person_praying",
	icon: "",
},
{
	title: "fa-person_running",
	icon: "",
},
{
	title: "fa-person_skating",
	icon: "",
},
{
	title: "fa-person_skiing",
	icon: "",
},
{
	title: "fa-person_skiing_nordic",
	icon: "",
},
{
	title: "fa-person_snowboarding",
	icon: "",
},
{
	title: "fa-person_swimming",
	icon: "",
},
{
	title: "fa-person_walking",
	icon: "",
},
{
	title: "fa-person_walking_with_cane",
	icon: "",
},
{
	title: "fa-phabricator",
	icon: "",
},
{
	title: "fa-phoenix_framework",
	icon: "",
},
{
	title: "fa-phoenix_squadron",
	icon: "",
},
{
	title: "fa-phone",
	icon: "",
},
{
	title: "fa-phone_flip",
	icon: "",
},
{
	title: "fa-phone_slash",
	icon: "",
},
{
	title: "fa-phone_square",
	icon: "",
},
{
	title: "fa-phone_volume",
	icon: "",
},
{
	title: "fa-photo",
	icon: "",
},
{
	title: "fa-photo_film",
	icon: "",
},
{
	title: "fa-php",
	icon: "",
},
{
	title: "fa-picture_o",
	icon: "",
},
{
	title: "fa-pie_chart",
	icon: "",
},
{
	title: "fa-pied_piper",
	icon: "",
},
{
	title: "fa-pied_piper_alt",
	icon: "",
},
{
	title: "fa-pied_piper_hat",
	icon: "",
},
{
	title: "fa-pied_piper_pp",
	icon: "",
},
{
	title: "fa-piggy_bank",
	icon: "",
},
{
	title: "fa-pills",
	icon: "",
},
{
	title: "fa-pinterest",
	icon: "",
},
{
	title: "fa-pinterest_p",
	icon: "",
},
{
	title: "fa-pinterest_square",
	icon: "",
},
{
	title: "fa-pizza_slice",
	icon: "",
},
{
	title: "fa-place_of_worship",
	icon: "",
},
{
	title: "fa-plane",
	icon: "",
},
{
	title: "fa-plane_arrival",
	icon: "",
},
{
	title: "fa-plane_departure",
	icon: "",
},
{
	title: "fa-play",
	icon: "",
},
{
	title: "fa-play_circle",
	icon: "",
},
{
	title: "fa-play_circle_o",
	icon: "",
},
{
	title: "fa-playstation",
	icon: "",
},
{
	title: "fa-plug",
	icon: "",
},
{
	title: "fa-plus",
	icon: "",
},
{
	title: "fa-plus_circle",
	icon: "",
},
{
	title: "fa-plus_square",
	icon: "",
},
{
	title: "fa-plus_square_o",
	icon: "",
},
{
	title: "fa-podcast",
	icon: "",
},
{
	title: "fa-poo",
	icon: "",
},
{
	title: "fa-poo_storm",
	icon: "",
},
{
	title: "fa-poop",
	icon: "",
},
{
	title: "fa-power_off",
	icon: "",
},
{
	title: "fa-prescription",
	icon: "",
},
{
	title: "fa-prescription_bottle",
	icon: "",
},
{
	title: "fa-prescription_bottle_medical",
	icon: "",
},
{
	title: "fa-print",
	icon: "",
},
{
	title: "fa-product_hunt",
	icon: "",
},
{
	title: "fa-pushed",
	icon: "",
},
{
	title: "fa-puzzle_piece",
	icon: "",
},
{
	title: "fa-python",
	icon: "",
},
{
	title: "fa-qq",
	icon: "",
},
{
	title: "fa-qrcode",
	icon: "",
},
{
	title: "fa-question",
	icon: "",
},
{
	title: "fa-question_circle",
	icon: "",
},
{
	title: "fa-question_circle_o",
	icon: "",
},
{
	title: "fa-quinscape",
	icon: "",
},
{
	title: "fa-quora",
	icon: "",
},
{
	title: "fa-quote_left",
	icon: "",
},
{
	title: "fa-quote_right",
	icon: "",
},
{
	title: "fa-r_project",
	icon: "",
},
{
	title: "fa-ra",
	icon: "",
},
{
	title: "fa-radiation",
	icon: "",
},
{
	title: "fa-radio",
	icon: "",
},
{
	title: "fa-rainbow",
	icon: "",
},
{
	title: "fa-random",
	icon: "",
},
{
	title: "fa-raspberry_pi",
	icon: "",
},
{
	title: "fa-ravelry",
	icon: "",
},
{
	title: "fa-react",
	icon: "",
},
{
	title: "fa-reacteurope",
	icon: "",
},
{
	title: "fa-readme",
	icon: "",
},
{
	title: "fa-rebel",
	icon: "",
},
{
	title: "fa-receipt",
	icon: "",
},
{
	title: "fa-record_vinyl",
	icon: "",
},
{
	title: "fa-rectangle_ad",
	icon: "",
},
{
	title: "fa-rectangle_list",
	icon: "",
},
{
	title: "fa-rectangle_xmark",
	icon: "",
},
{
	title: "fa-recycle",
	icon: "",
},
{
	title: "fa-red_river",
	icon: "",
},
{
	title: "fa-reddit",
	icon: "",
},
{
	title: "fa-reddit_alien",
	icon: "",
},
{
	title: "fa-reddit_square",
	icon: "",
},
{
	title: "fa-redhat",
	icon: "",
},
{
	title: "fa-refresh",
	icon: "",
},
{
	title: "fa-registered",
	icon: "",
},
{
	title: "fa-remove",
	icon: "",
},
{
	title: "fa-remove_sign",
	icon: "",
},
{
	title: "fa-renren",
	icon: "",
},
{
	title: "fa-reorder",
	icon: "",
},
{
	title: "fa-repeat",
	icon: "",
},
{
	title: "fa-repeat_alt",
	icon: "",
},
{
	title: "fa-reply",
	icon: "",
},
{
	title: "fa-reply_all",
	icon: "",
},
{
	title: "fa-replyd",
	icon: "",
},
{
	title: "fa-republican",
	icon: "",
},
{
	title: "fa-researchgate",
	icon: "",
},
{
	title: "fa-resistance",
	icon: "",
},
{
	title: "fa-resolving",
	icon: "",
},
{
	title: "fa-restroom",
	icon: "",
},
{
	title: "fa-retweet",
	icon: "",
},
{
	title: "fa-rev",
	icon: "",
},
{
	title: "fa-ribbon",
	icon: "",
},
{
	title: "fa-right_from_bracket",
	icon: "",
},
{
	title: "fa-right_left",
	icon: "",
},
{
	title: "fa-right_to_bracket",
	icon: "",
},
{
	title: "fa-ring",
	icon: "",
},
{
	title: "fa-rmb",
	icon: "",
},
{
	title: "fa-road",
	icon: "",
},
{
	title: "fa-robot",
	icon: "",
},
{
	title: "fa-rocket",
	icon: "",
},
{
	title: "fa-rocketchat",
	icon: "",
},
{
	title: "fa-rockrms",
	icon: "",
},
{
	title: "fa-rotate",
	icon: "",
},
{
	title: "fa-rotate_left",
	icon: "",
},
{
	title: "fa-rotate_right",
	icon: "",
},
{
	title: "fa-rouble",
	icon: "",
},
{
	title: "fa-route",
	icon: "",
},
{
	title: "fa-rss",
	icon: "",
},
{
	title: "fa-rss_square",
	icon: "",
},
{
	title: "fa-rub",
	icon: "",
},
{
	title: "fa-ruble",
	icon: "",
},
{
	title: "fa-ruble_sign",
	icon: "",
},
{
	title: "fa-ruler",
	icon: "",
},
{
	title: "fa-ruler_combined",
	icon: "",
},
{
	title: "fa-ruler_horizontal",
	icon: "",
},
{
	title: "fa-ruler_vertical",
	icon: "",
},
{
	title: "fa-rupee",
	icon: "",
},
{
	title: "fa-rupee_sign",
	icon: "",
},
{
	title: "fa-s15",
	icon: "",
},
{
	title: "fa-sack_dollar",
	icon: "",
},
{
	title: "fa-safari",
	icon: "",
},
{
	title: "fa-salesforce",
	icon: "",
},
{
	title: "fa-sass",
	icon: "",
},
{
	title: "fa-satellite",
	icon: "",
},
{
	title: "fa-satellite_dish",
	icon: "",
},
{
	title: "fa-save",
	icon: "",
},
{
	title: "fa-scale_balanced",
	icon: "",
},
{
	title: "fa-scale_unbalanced",
	icon: "",
},
{
	title: "fa-scale_unbalanced_flip",
	icon: "",
},
{
	title: "fa-schlix",
	icon: "",
},
{
	title: "fa-school",
	icon: "",
},
{
	title: "fa-scissors",
	icon: "",
},
{
	title: "fa-screwdriver",
	icon: "",
},
{
	title: "fa-screwdriver_wrench",
	icon: "",
},
{
	title: "fa-scribd",
	icon: "",
},
{
	title: "fa-scroll",
	icon: "",
},
{
	title: "fa-scroll_torah",
	icon: "",
},
{
	title: "fa-sd_card",
	icon: "",
},
{
	title: "fa-search",
	icon: "",
},
{
	title: "fa-search_minus",
	icon: "",
},
{
	title: "fa-search_plus",
	icon: "",
},
{
	title: "fa-searchengin",
	icon: "",
},
{
	title: "fa-seedling",
	icon: "",
},
{
	title: "fa-sellcast",
	icon: "",
},
{
	title: "fa-sellsy",
	icon: "",
},
{
	title: "fa-send",
	icon: "",
},
{
	title: "fa-send_o",
	icon: "",
},
{
	title: "fa-server",
	icon: "",
},
{
	title: "fa-servicestack",
	icon: "",
},
{
	title: "fa-shapes",
	icon: "",
},
{
	title: "fa-share",
	icon: "",
},
{
	title: "fa-share_alt",
	icon: "",
},
{
	title: "fa-share_alt_square",
	icon: "",
},
{
	title: "fa-share_from_square",
	icon: "",
},
{
	title: "fa-share_nodes",
	icon: "",
},
{
	title: "fa-share_square",
	icon: "",
},
{
	title: "fa-share_square_o",
	icon: "",
},
{
	title: "fa-shekel",
	icon: "",
},
{
	title: "fa-shekel_sign",
	icon: "",
},
{
	title: "fa-sheqel",
	icon: "",
},
{
	title: "fa-shield",
	icon: "",
},
{
	title: "fa-shield_halved",
	icon: "",
},
{
	title: "fa-ship",
	icon: "",
},
{
	title: "fa-shirt",
	icon: "",
},
{
	title: "fa-shirtsinbulk",
	icon: "",
},
{
	title: "fa-shoe_prints",
	icon: "",
},
{
	title: "fa-shop",
	icon: "",
},
{
	title: "fa-shopping_bag",
	icon: "",
},
{
	title: "fa-shopping_basket",
	icon: "",
},
{
	title: "fa-shopping_cart",
	icon: "",
},
{
	title: "fa-shopware",
	icon: "",
},
{
	title: "fa-shower",
	icon: "",
},
{
	title: "fa-shuffle",
	icon: "",
},
{
	title: "fa-shuttle_space",
	icon: "",
},
{
	title: "fa-sign_hanging",
	icon: "",
},
{
	title: "fa-sign_in",
	icon: "",
},
{
	title: "fa-sign_language",
	icon: "",
},
{
	title: "fa-sign_out",
	icon: "",
},
{
	title: "fa-signal",
	icon: "",
},
{
	title: "fa-signature",
	icon: "",
},
{
	title: "fa-signing",
	icon: "",
},
{
	title: "fa-signs_post",
	icon: "",
},
{
	title: "fa-sim_card",
	icon: "",
},
{
	title: "fa-simplybuilt",
	icon: "",
},
{
	title: "fa-sistrix",
	icon: "",
},
{
	title: "fa-sitemap",
	icon: "",
},
{
	title: "fa-sith",
	icon: "",
},
{
	title: "fa-sketch",
	icon: "",
},
{
	title: "fa-skull",
	icon: "",
},
{
	title: "fa-skull_crossbones",
	icon: "",
},
{
	title: "fa-skyatlas",
	icon: "",
},
{
	title: "fa-skype",
	icon: "",
},
{
	title: "fa-slack",
	icon: "",
},
{
	title: "fa-slash",
	icon: "",
},
{
	title: "fa-sleigh",
	icon: "",
},
{
	title: "fa-sliders",
	icon: "",
},
{
	title: "fa-slideshare",
	icon: "",
},
{
	title: "fa-smile_o",
	icon: "",
},
{
	title: "fa-smog",
	icon: "",
},
{
	title: "fa-smoking",
	icon: "",
},
{
	title: "fa-snapchat",
	icon: "",
},
{
	title: "fa-snapchat_ghost",
	icon: "",
},
{
	title: "fa-snapchat_square",
	icon: "",
},
{
	title: "fa-snowflake",
	icon: "",
},
{
	title: "fa-snowflake_o",
	icon: "",
},
{
	title: "fa-snowman",
	icon: "",
},
{
	title: "fa-snowplow",
	icon: "",
},
{
	title: "fa-soccer_ball_o",
	icon: "",
},
{
	title: "fa-socks",
	icon: "",
},
{
	title: "fa-solar_panel",
	icon: "",
},
{
	title: "fa-sort",
	icon: "",
},
{
	title: "fa-sort_alpha_asc",
	icon: "",
},
{
	title: "fa-sort_alpha_desc",
	icon: "",
},
{
	title: "fa-sort_amount_asc",
	icon: "",
},
{
	title: "fa-sort_amount_desc",
	icon: "",
},
{
	title: "fa-sort_asc",
	icon: "",
},
{
	title: "fa-sort_desc",
	icon: "",
},
{
	title: "fa-sort_down",
	icon: "",
},
{
	title: "fa-sort_numeric_asc",
	icon: "",
},
{
	title: "fa-sort_numeric_desc",
	icon: "",
},
{
	title: "fa-sort_up",
	icon: "",
},
{
	title: "fa-soundcloud",
	icon: "",
},
{
	title: "fa-sourcetree",
	icon: "",
},
{
	title: "fa-spa",
	icon: "",
},
{
	title: "fa-space_shuttle",
	icon: "",
},
{
	title: "fa-spaghetti_monster_flying",
	icon: "",
},
{
	title: "fa-speakap",
	icon: "",
},
{
	title: "fa-speaker_deck",
	icon: "",
},
{
	title: "fa-spell_check",
	icon: "",
},
{
	title: "fa-spider",
	icon: "",
},
{
	title: "fa-spinner",
	icon: "",
},
{
	title: "fa-splotch",
	icon: "",
},
{
	title: "fa-spoon",
	icon: "",
},
{
	title: "fa-spotify",
	icon: "",
},
{
	title: "fa-spray_can",
	icon: "",
},
{
	title: "fa-spray_can_sparkles",
	icon: "",
},
{
	title: "fa-square",
	icon: "",
},
{
	title: "fa-square_arrow_up_right",
	icon: "",
},
{
	title: "fa-square_behance",
	icon: "",
},
{
	title: "fa-square_caret_down",
	icon: "",
},
{
	title: "fa-square_caret_left",
	icon: "",
},
{
	title: "fa-square_caret_right",
	icon: "",
},
{
	title: "fa-square_caret_up",
	icon: "",
},
{
	title: "fa-square_check",
	icon: "",
},
{
	title: "fa-square_dribbble",
	icon: "",
},
{
	title: "fa-square_envelope",
	icon: "",
},
{
	title: "fa-square_facebook",
	icon: "",
},
{
	title: "fa-square_font_awesome_stroke",
	icon: "",
},
{
	title: "fa-square_full",
	icon: "",
},
{
	title: "fa-square_git",
	icon: "",
},
{
	title: "fa-square_github",
	icon: "",
},
{
	title: "fa-square_google_plus",
	icon: "",
},
{
	title: "fa-square_h",
	icon: "",
},
{
	title: "fa-square_hacker_news",
	icon: "",
},
{
	title: "fa-square_js",
	icon: "",
},
{
	title: "fa-square_lastfm",
	icon: "",
},
{
	title: "fa-square_minus",
	icon: "",
},
{
	title: "fa-square_o",
	icon: "",
},
{
	title: "fa-square_odnoklassniki",
	icon: "",
},
{
	title: "fa-square_parking",
	icon: "",
},
{
	title: "fa-square_pen",
	icon: "",
},
{
	title: "fa-square_phone",
	icon: "",
},
{
	title: "fa-square_phone_flip",
	icon: "",
},
{
	title: "fa-square_pinterest",
	icon: "",
},
{
	title: "fa-square_plus",
	icon: "",
},
{
	title: "fa-square_poll_horizontal",
	icon: "",
},
{
	title: "fa-square_poll_vertical",
	icon: "",
},
{
	title: "fa-square_reddit",
	icon: "",
},
{
	title: "fa-square_root_variable",
	icon: "",
},
{
	title: "fa-square_rss",
	icon: "",
},
{
	title: "fa-square_share_nodes",
	icon: "",
},
{
	title: "fa-square_snapchat",
	icon: "",
},
{
	title: "fa-square_steam",
	icon: "",
},
{
	title: "fa-square_tumblr",
	icon: "",
},
{
	title: "fa-square_twitter",
	icon: "",
},
{
	title: "fa-square_up_right",
	icon: "",
},
{
	title: "fa-square_viadeo",
	icon: "",
},
{
	title: "fa-square_vimeo",
	icon: "",
},
{
	title: "fa-square_whatsapp",
	icon: "",
},
{
	title: "fa-square_xing",
	icon: "",
},
{
	title: "fa-square_xmark",
	icon: "",
},
{
	title: "fa-square_youtube",
	icon: "",
},
{
	title: "fa-squarespace",
	icon: "",
},
{
	title: "fa-stack_exchange",
	icon: "",
},
{
	title: "fa-stack_overflow",
	icon: "",
},
{
	title: "fa-stackpath",
	icon: "",
},
{
	title: "fa-stamp",
	icon: "",
},
{
	title: "fa-star",
	icon: "",
},
{
	title: "fa-star_and_crescent",
	icon: "",
},
{
	title: "fa-star_half",
	icon: "",
},
{
	title: "fa-star_half_empty",
	icon: "",
},
{
	title: "fa-star_half_full",
	icon: "",
},
{
	title: "fa-star_half_o",
	icon: "",
},
{
	title: "fa-star_half_stroke",
	icon: "",
},
{
	title: "fa-star_o",
	icon: "",
},
{
	title: "fa-star_of_david",
	icon: "",
},
{
	title: "fa-star_of_life",
	icon: "",
},
{
	title: "fa-staylinked",
	icon: "",
},
{
	title: "fa-steam",
	icon: "",
},
{
	title: "fa-steam_square",
	icon: "",
},
{
	title: "fa-steam_symbol",
	icon: "",
},
{
	title: "fa-step_backward",
	icon: "",
},
{
	title: "fa-step_forward",
	icon: "",
},
{
	title: "fa-sterling_sign",
	icon: "",
},
{
	title: "fa-stethoscope",
	icon: "",
},
{
	title: "fa-sticker_mule",
	icon: "",
},
{
	title: "fa-sticky_note",
	icon: "",
},
{
	title: "fa-sticky_note_o",
	icon: "",
},
{
	title: "fa-stop",
	icon: "",
},
{
	title: "fa-stop_circle",
	icon: "",
},
{
	title: "fa-stop_circle_o",
	icon: "",
},
{
	title: "fa-stopwatch",
	icon: "",
},
{
	title: "fa-store",
	icon: "",
},
{
	title: "fa-strava",
	icon: "",
},
{
	title: "fa-street_view",
	icon: "",
},
{
	title: "fa-strikethrough",
	icon: "",
},
{
	title: "fa-stripe",
	icon: "",
},
{
	title: "fa-stripe_s",
	icon: "",
},
{
	title: "fa-stroopwafel",
	icon: "",
},
{
	title: "fa-studiovinari",
	icon: "",
},
{
	title: "fa-stumbleupon",
	icon: "",
},
{
	title: "fa-stumbleupon_circle",
	icon: "",
},
{
	title: "fa-subscript",
	icon: "",
},
{
	title: "fa-subway",
	icon: "",
},
{
	title: "fa-suitcase",
	icon: "",
},
{
	title: "fa-suitcase_medical",
	icon: "",
},
{
	title: "fa-suitcase_rolling",
	icon: "",
},
{
	title: "fa-sun",
	icon: "",
},
{
	title: "fa-sun_o",
	icon: "",
},
{
	title: "fa-superpowers",
	icon: "",
},
{
	title: "fa-superscript",
	icon: "",
},
{
	title: "fa-supple",
	icon: "",
},
{
	title: "fa-support",
	icon: "",
},
{
	title: "fa-suse",
	icon: "",
},
{
	title: "fa-swatchbook",
	icon: "",
},
{
	title: "fa-swift",
	icon: "",
},
{
	title: "fa-symfony",
	icon: "",
},
{
	title: "fa-synagogue",
	icon: "",
},
{
	title: "fa-syringe",
	icon: "",
},
{
	title: "fa-table",
	icon: "",
},
{
	title: "fa-table_cells",
	icon: "",
},
{
	title: "fa-table_cells_large",
	icon: "",
},
{
	title: "fa-table_columns",
	icon: "",
},
{
	title: "fa-table_list",
	icon: "",
},
{
	title: "fa-table_tennis_paddle_ball",
	icon: "",
},
{
	title: "fa-tablet",
	icon: "",
},
{
	title: "fa-tablet_button",
	icon: "",
},
{
	title: "fa-tablet_screen_button",
	icon: "",
},
{
	title: "fa-tablets",
	icon: "",
},
{
	title: "fa-tachograph_digital",
	icon: "",
},
{
	title: "fa-tachometer",
	icon: "",
},
{
	title: "fa-tag",
	icon: "",
},
{
	title: "fa-tags",
	icon: "",
},
{
	title: "fa-tape",
	icon: "",
},
{
	title: "fa-tasks",
	icon: "",
},
{
	title: "fa-taxi",
	icon: "",
},
{
	title: "fa-teamspeak",
	icon: "",
},
{
	title: "fa-teeth",
	icon: "",
},
{
	title: "fa-teeth_open",
	icon: "",
},
{
	title: "fa-telegram",
	icon: "",
},
{
	title: "fa-television",
	icon: "",
},
{
	title: "fa-temperature_empty",
	icon: "",
},
{
	title: "fa-temperature_full",
	icon: "",
},
{
	title: "fa-temperature_half",
	icon: "",
},
{
	title: "fa-temperature_high",
	icon: "",
},
{
	title: "fa-temperature_low",
	icon: "",
},
{
	title: "fa-temperature_quarter",
	icon: "",
},
{
	title: "fa-temperature_three_quarters",
	icon: "",
},
{
	title: "fa-tencent_weibo",
	icon: "",
},
{
	title: "fa-tenge_sign",
	icon: "",
},
{
	title: "fa-terminal",
	icon: "",
},
{
	title: "fa-text_height",
	icon: "",
},
{
	title: "fa-text_slash",
	icon: "",
},
{
	title: "fa-text_width",
	icon: "",
},
{
	title: "fa-th",
	icon: "",
},
{
	title: "fa-th_large",
	icon: "",
},
{
	title: "fa-th_list",
	icon: "",
},
{
	title: "fa-the_red_yeti",
	icon: "",
},
{
	title: "fa-themeco",
	icon: "",
},
{
	title: "fa-themeisle",
	icon: "",
},
{
	title: "fa-thermometer",
	icon: "",
},
{
	title: "fa-thermometer_0",
	icon: "",
},
{
	title: "fa-thermometer_1",
	icon: "",
},
{
	title: "fa-thermometer_2",
	icon: "",
},
{
	title: "fa-thermometer_3",
	icon: "",
},
{
	title: "fa-thermometer_4",
	icon: "",
},
{
	title: "fa-thermometer_alt",
	icon: "",
},
{
	title: "fa-thermometer_empty",
	icon: "",
},
{
	title: "fa-thermometer_full",
	icon: "",
},
{
	title: "fa-thermometer_half",
	icon: "",
},
{
	title: "fa-thermometer_quarter",
	icon: "",
},
{
	title: "fa-thermometer_three_quarters",
	icon: "",
},
{
	title: "fa-think_peaks",
	icon: "",
},
{
	title: "fa-thumb_tack",
	icon: "",
},
{
	title: "fa-thumbs_down",
	icon: "",
},
{
	title: "fa-thumbs_o_down",
	icon: "",
},
{
	title: "fa-thumbs_o_up",
	icon: "",
},
{
	title: "fa-thumbs_up",
	icon: "",
},
{
	title: "fa-thumbtack",
	icon: "",
},
{
	title: "fa-ticket",
	icon: "",
},
{
	title: "fa-ticket_simple",
	icon: "",
},
{
	title: "fa-times",
	icon: "",
},
{
	title: "fa-times_circle",
	icon: "",
},
{
	title: "fa-times_circle_o",
	icon: "",
},
{
	title: "fa-times_rectangle",
	icon: "",
},
{
	title: "fa-times_rectangle_o",
	icon: "",
},
{
	title: "fa-tint",
	icon: "",
},
{
	title: "fa-toggle_down",
	icon: "",
},
{
	title: "fa-toggle_left",
	icon: "",
},
{
	title: "fa-toggle_off",
	icon: "",
},
{
	title: "fa-toggle_on",
	icon: "",
},
{
	title: "fa-toggle_right",
	icon: "",
},
{
	title: "fa-toggle_up",
	icon: "",
},
{
	title: "fa-toilet",
	icon: "",
},
{
	title: "fa-toilet_paper",
	icon: "",
},
{
	title: "fa-toolbox",
	icon: "",
},
{
	title: "fa-tooth",
	icon: "",
},
{
	title: "fa-torii_gate",
	icon: "",
},
{
	title: "fa-tornado",
	icon: "",
},
{
	title: "fa-tower_broadcast",
	icon: "",
},
{
	title: "fa-tractor",
	icon: "",
},
{
	title: "fa-trade_federation",
	icon: "",
},
{
	title: "fa-trademark",
	icon: "",
},
{
	title: "fa-traffic_light",
	icon: "",
},
{
	title: "fa-train",
	icon: "",
},
{
	title: "fa-train_subway",
	icon: "",
},
{
	title: "fa-transgender",
	icon: "",
},
{
	title: "fa-transgender_alt",
	icon: "",
},
{
	title: "fa-trash",
	icon: "",
},
{
	title: "fa-trash_arrow_up",
	icon: "",
},
{
	title: "fa-trash_can",
	icon: "",
},
{
	title: "fa-trash_can_arrow_up",
	icon: "",
},
{
	title: "fa-trash_o",
	icon: "",
},
{
	title: "fa-tree",
	icon: "",
},
{
	title: "fa-trello",
	icon: "",
},
{
	title: "fa-triangle_exclamation",
	icon: "",
},
{
	title: "fa-tripadvisor",
	icon: "",
},
{
	title: "fa-trophy",
	icon: "",
},
{
	title: "fa-truck",
	icon: "",
},
{
	title: "fa-truck_fast",
	icon: "",
},
{
	title: "fa-truck_medical",
	icon: "",
},
{
	title: "fa-truck_monster",
	icon: "",
},
{
	title: "fa-truck_moving",
	icon: "",
},
{
	title: "fa-truck_pickup",
	icon: "",
},
{
	title: "fa-truck_ramp_box",
	icon: "",
},
{
	title: "fa-try",
	icon: "",
},
{
	title: "fa-tty",
	icon: "",
},
{
	title: "fa-tumblr",
	icon: "",
},
{
	title: "fa-tumblr_square",
	icon: "",
},
{
	title: "fa-turkish_lira",
	icon: "",
},
{
	title: "fa-turn_down",
	icon: "",
},
{
	title: "fa-turn_up",
	icon: "",
},
{
	title: "fa-tv",
	icon: "",
},
{
	title: "fa-twitch",
	icon: "",
},
{
	title: "fa-twitter",
	icon: "",
},
{
	title: "fa-twitter_square",
	icon: "",
},
{
	title: "fa-typo3",
	icon: "",
},
{
	title: "fa-uber",
	icon: "",
},
{
	title: "fa-ubuntu",
	icon: "",
},
{
	title: "fa-uikit",
	icon: "",
},
{
	title: "fa-umbraco",
	icon: "",
},
{
	title: "fa-umbrella",
	icon: "",
},
{
	title: "fa-umbrella_beach",
	icon: "",
},
{
	title: "fa-underline",
	icon: "",
},
{
	title: "fa-undo",
	icon: "",
},
{
	title: "fa-uniregistry",
	icon: "",
},
{
	title: "fa-universal_access",
	icon: "",
},
{
	title: "fa-university",
	icon: "",
},
{
	title: "fa-unlink",
	icon: "",
},
{
	title: "fa-unlock",
	icon: "",
},
{
	title: "fa-unlock_alt",
	icon: "",
},
{
	title: "fa-unlock_keyhole",
	icon: "",
},
{
	title: "fa-unsorted",
	icon: "",
},
{
	title: "fa-untappd",
	icon: "",
},
{
	title: "fa-up_down",
	icon: "",
},
{
	title: "fa-up_down_left_right",
	icon: "",
},
{
	title: "fa-up_right_and_down_left_from_center",
	icon: "",
},
{
	title: "fa-up_right_from_square",
	icon: "",
},
{
	title: "fa-upload",
	icon: "",
},
{
	title: "fa-ups",
	icon: "",
},
{
	title: "fa-usb",
	icon: "",
},
{
	title: "fa-usd",
	icon: "",
},
{
	title: "fa-user",
	icon: "",
},
{
	title: "fa-user_astronaut",
	icon: "",
},
{
	title: "fa-user_check",
	icon: "",
},
{
	title: "fa-user_circle",
	icon: "",
},
{
	title: "fa-user_circle_o",
	icon: "",
},
{
	title: "fa-user_clock",
	icon: "",
},
{
	title: "fa-user_doctor",
	icon: "",
},
{
	title: "fa-user_gear",
	icon: "",
},
{
	title: "fa-user_graduate",
	icon: "",
},
{
	title: "fa-user_group",
	icon: "",
},
{
	title: "fa-user_injured",
	icon: "",
},
{
	title: "fa-user_large",
	icon: "",
},
{
	title: "fa-user_large_slash",
	icon: "",
},
{
	title: "fa-user_lock",
	icon: "",
},
{
	title: "fa-user_md",
	icon: "",
},
{
	title: "fa-user_minus",
	icon: "",
},
{
	title: "fa-user_ninja",
	icon: "",
},
{
	title: "fa-user_nurse",
	icon: "",
},
{
	title: "fa-user_o",
	icon: "",
},
{
	title: "fa-user_pen",
	icon: "",
},
{
	title: "fa-user_plus",
	icon: "",
},
{
	title: "fa-user_secret",
	icon: "",
},
{
	title: "fa-user_shield",
	icon: "",
},
{
	title: "fa-user_slash",
	icon: "",
},
{
	title: "fa-user_tag",
	icon: "",
},
{
	title: "fa-user_tie",
	icon: "",
},
{
	title: "fa-user_times",
	icon: "",
},
{
	title: "fa-user_xmark",
	icon: "",
},
{
	title: "fa-users",
	icon: "",
},
{
	title: "fa-users_gear",
	icon: "",
},
{
	title: "fa-usps",
	icon: "",
},
{
	title: "fa-ussunnah",
	icon: "",
},
{
	title: "fa-utensils",
	icon: "",
},
{
	title: "fa-vaadin",
	icon: "",
},
{
	title: "fa-van_shuttle",
	icon: "",
},
{
	title: "fa-vcard",
	icon: "",
},
{
	title: "fa-vcard_o",
	icon: "",
},
{
	title: "fa-vector_square",
	icon: "",
},
{
	title: "fa-venus",
	icon: "",
},
{
	title: "fa-venus_double",
	icon: "",
},
{
	title: "fa-venus_mars",
	icon: "",
},
{
	title: "fa-viacoin",
	icon: "",
},
{
	title: "fa-viadeo",
	icon: "",
},
{
	title: "fa-viadeo_square",
	icon: "",
},
{
	title: "fa-vial",
	icon: "",
},
{
	title: "fa-vials",
	icon: "",
},
{
	title: "fa-viber",
	icon: "",
},
{
	title: "fa-video",
	icon: "",
},
{
	title: "fa-video_camera",
	icon: "",
},
{
	title: "fa-video_slash",
	icon: "",
},
{
	title: "fa-vihara",
	icon: "",
},
{
	title: "fa-vimeo",
	icon: "",
},
{
	title: "fa-vimeo_square",
	icon: "",
},
{
	title: "fa-vimeo_v",
	icon: "",
},
{
	title: "fa-vine",
	icon: "",
},
{
	title: "fa-vk",
	icon: "",
},
{
	title: "fa-vnv",
	icon: "",
},
{
	title: "fa-voicemail",
	icon: "",
},
{
	title: "fa-volcano",
	icon: "",
},
{
	title: "fa-volleyball",
	icon: "",
},
{
	title: "fa-volume_control_phone",
	icon: "",
},
{
	title: "fa-volume_down",
	icon: "",
},
{
	title: "fa-volume_high",
	icon: "",
},
{
	title: "fa-volume_low",
	icon: "",
},
{
	title: "fa-volume_off",
	icon: "",
},
{
	title: "fa-volume_up",
	icon: "",
},
{
	title: "fa-volume_xmark",
	icon: "",
},
{
	title: "fa-vr_cardboard",
	icon: "",
},
{
	title: "fa-vuejs",
	icon: "",
},
{
	title: "fa-walkie_talkie",
	icon: "",
},
{
	title: "fa-wallet",
	icon: "",
},
{
	title: "fa-wand_magic",
	icon: "",
},
{
	title: "fa-wand_sparkles",
	icon: "",
},
{
	title: "fa-warehouse",
	icon: "",
},
{
	title: "fa-warning",
	icon: "",
},
{
	title: "fa-water",
	icon: "",
},
{
	title: "fa-water_ladder",
	icon: "",
},
{
	title: "fa-wave_square",
	icon: "",
},
{
	title: "fa-waze",
	icon: "",
},
{
	title: "fa-wechat",
	icon: "",
},
{
	title: "fa-weebly",
	icon: "",
},
{
	title: "fa-weibo",
	icon: "",
},
{
	title: "fa-weight_hanging",
	icon: "",
},
{
	title: "fa-weight_scale",
	icon: "",
},
{
	title: "fa-weixin",
	icon: "",
},
{
	title: "fa-whatsapp",
	icon: "",
},
{
	title: "fa-wheelchair",
	icon: "",
},
{
	title: "fa-wheelchair_alt",
	icon: "",
},
{
	title: "fa-whiskey_glass",
	icon: "",
},
{
	title: "fa-whmcs",
	icon: "",
},
{
	title: "fa-wifi",
	icon: "",
},
{
	title: "fa-wikipedia_w",
	icon: "",
},
{
	title: "fa-wind",
	icon: "",
},
{
	title: "fa-window_close",
	icon: "",
},
{
	title: "fa-window_close_o",
	icon: "",
},
{
	title: "fa-window_maximize",
	icon: "",
},
{
	title: "fa-window_minimize",
	icon: "",
},
{
	title: "fa-window_restore",
	icon: "",
},
{
	title: "fa-windows",
	icon: "",
},
{
	title: "fa-wine_bottle",
	icon: "",
},
{
	title: "fa-wine_glass",
	icon: "",
},
{
	title: "fa-wine_glass_empty",
	icon: "",
},
{
	title: "fa-wix",
	icon: "",
},
{
	title: "fa-wizards_of_the_coast",
	icon: "",
},
{
	title: "fa-wolf_pack_battalion",
	icon: "",
},
{
	title: "fa-won",
	icon: "",
},
{
	title: "fa-won_sign",
	icon: "",
},
{
	title: "fa-wordpress",
	icon: "",
},
{
	title: "fa-wordpress_simple",
	icon: "",
},
{
	title: "fa-wpbeginner",
	icon: "",
},
{
	title: "fa-wpexplorer",
	icon: "",
},
{
	title: "fa-wpforms",
	icon: "",
},
{
	title: "fa-wpressr",
	icon: "",
},
{
	title: "fa-wrench",
	icon: "",
},
{
	title: "fa-x_ray",
	icon: "",
},
{
	title: "fa-xbox",
	icon: "",
},
{
	title: "fa-xing",
	icon: "",
},
{
	title: "fa-xing_square",
	icon: "",
},
{
	title: "fa-xmark",
	icon: "",
},
{
	title: "fa-y_combinator",
	icon: "",
},
{
	title: "fa-y_combinator_square",
	icon: "",
},
{
	title: "fa-yahoo",
	icon: "",
},
{
	title: "fa-yammer",
	icon: "",
},
{
	title: "fa-yandex",
	icon: "",
},
{
	title: "fa-yandex_international",
	icon: "",
},
{
	title: "fa-yarn",
	icon: "",
},
{
	title: "fa-yc",
	icon: "",
},
{
	title: "fa-yc_square",
	icon: "",
},
{
	title: "fa-yelp",
	icon: "",
},
{
	title: "fa-yen",
	icon: "",
},
{
	title: "fa-yen_sign",
	icon: "",
},
{
	title: "fa-yin_yang",
	icon: "",
},
{
	title: "fa-yoast",
	icon: "",
},
{
	title: "fa-youtube",
	icon: "",
},
{
	title: "fa-youtube_play",
	icon: "",
},
{
	title: "fa-youtube_square",
	icon: "",
},
{
	title: "fa-zhihu",
	icon: "",
},
{
	title: "fae-apple_fruit",
	icon: "",
},
{
	title: "fae-atom",
	icon: "",
},
{
	title: "fae-bacteria",
	icon: "",
},
{
	title: "fae-banana",
	icon: "",
},
{
	title: "fae-bath",
	icon: "",
},
{
	title: "fae-bed",
	icon: "",
},
{
	title: "fae-benzene",
	icon: "",
},
{
	title: "fae-bigger",
	icon: "",
},
{
	title: "fae-biohazard",
	icon: "",
},
{
	title: "fae-blogger_circle",
	icon: "",
},
{
	title: "fae-blogger_square",
	icon: "",
},
{
	title: "fae-bones",
	icon: "",
},
{
	title: "fae-book_open",
	icon: "",
},
{
	title: "fae-book_open_o",
	icon: "",
},
{
	title: "fae-brain",
	icon: "",
},
{
	title: "fae-bread",
	icon: "",
},
{
	title: "fae-butterfly",
	icon: "",
},
{
	title: "fae-carot",
	icon: "",
},
{
	title: "fae-cc_by",
	icon: "",
},
{
	title: "fae-cc_cc",
	icon: "",
},
{
	title: "fae-cc_nc",
	icon: "",
},
{
	title: "fae-cc_nc_eu",
	icon: "",
},
{
	title: "fae-cc_nc_jp",
	icon: "",
},
{
	title: "fae-cc_nd",
	icon: "",
},
{
	title: "fae-cc_remix",
	icon: "",
},
{
	title: "fae-cc_sa",
	icon: "",
},
{
	title: "fae-cc_share",
	icon: "",
},
{
	title: "fae-cc_zero",
	icon: "",
},
{
	title: "fae-checklist_o",
	icon: "",
},
{
	title: "fae-cheese",
	icon: "",
},
{
	title: "fae-cherry",
	icon: "",
},
{
	title: "fae-chess_bishop",
	icon: "",
},
{
	title: "fae-chess_horse",
	icon: "",
},
{
	title: "fae-chess_king",
	icon: "",
},
{
	title: "fae-chess_pawn",
	icon: "",
},
{
	title: "fae-chess_queen",
	icon: "",
},
{
	title: "fae-chess_tower",
	icon: "",
},
{
	title: "fae-chicken_thigh",
	icon: "",
},
{
	title: "fae-chilli",
	icon: "",
},
{
	title: "fae-chip",
	icon: "",
},
{
	title: "fae-cicling",
	icon: "",
},
{
	title: "fae-cloud",
	icon: "",
},
{
	title: "fae-cockroach",
	icon: "",
},
{
	title: "fae-coffe_beans",
	icon: "",
},
{
	title: "fae-coins",
	icon: "",
},
{
	title: "fae-comb",
	icon: "",
},
{
	title: "fae-comet",
	icon: "",
},
{
	title: "fae-crown",
	icon: "",
},
{
	title: "fae-cup_coffe",
	icon: "",
},
{
	title: "fae-dice",
	icon: "",
},
{
	title: "fae-disco",
	icon: "",
},
{
	title: "fae-dna",
	icon: "",
},
{
	title: "fae-donut",
	icon: "",
},
{
	title: "fae-dress",
	icon: "",
},
{
	title: "fae-drop",
	icon: "",
},
{
	title: "fae-ello",
	icon: "",
},
{
	title: "fae-envelope_open",
	icon: "",
},
{
	title: "fae-envelope_open_o",
	icon: "",
},
{
	title: "fae-equal",
	icon: "",
},
{
	title: "fae-equal_bigger",
	icon: "",
},
{
	title: "fae-feedly",
	icon: "",
},
{
	title: "fae-file_export",
	icon: "",
},
{
	title: "fae-file_import",
	icon: "",
},
{
	title: "fae-fingerprint",
	icon: "",
},
{
	title: "fae-floppy",
	icon: "",
},
{
	title: "fae-footprint",
	icon: "",
},
{
	title: "fae-freecodecamp",
	icon: "",
},
{
	title: "fae-galaxy",
	icon: "",
},
{
	title: "fae-galery",
	icon: "",
},
{
	title: "fae-gift_card",
	icon: "",
},
{
	title: "fae-glass",
	icon: "",
},
{
	title: "fae-google_drive",
	icon: "",
},
{
	title: "fae-google_play",
	icon: "",
},
{
	title: "fae-gps",
	icon: "",
},
{
	title: "fae-grav",
	icon: "",
},
{
	title: "fae-guitar",
	icon: "",
},
{
	title: "fae-gut",
	icon: "",
},
{
	title: "fae-halter",
	icon: "",
},
{
	title: "fae-hamburger",
	icon: "",
},
{
	title: "fae-hat",
	icon: "",
},
{
	title: "fae-hexagon",
	icon: "",
},
{
	title: "fae-high_heel",
	icon: "",
},
{
	title: "fae-hotdog",
	icon: "",
},
{
	title: "fae-ice_cream",
	icon: "",
},
{
	title: "fae-id_card",
	icon: "",
},
{
	title: "fae-imdb",
	icon: "",
},
{
	title: "fae-infinity",
	icon: "",
},
{
	title: "fae-injection",
	icon: "",
},
{
	title: "fae-isle",
	icon: "",
},
{
	title: "fae-java",
	icon: "",
},
{
	title: "fae-layers",
	icon: "",
},
{
	title: "fae-lips",
	icon: "",
},
{
	title: "fae-lipstick",
	icon: "",
},
{
	title: "fae-liver",
	icon: "",
},
{
	title: "fae-lollipop",
	icon: "",
},
{
	title: "fae-loyalty_card",
	icon: "",
},
{
	title: "fae-lung",
	icon: "",
},
{
	title: "fae-makeup_brushes",
	icon: "",
},
{
	title: "fae-maximize",
	icon: "",
},
{
	title: "fae-meat",
	icon: "",
},
{
	title: "fae-medicine",
	icon: "",
},
{
	title: "fae-microscope",
	icon: "",
},
{
	title: "fae-milk_bottle",
	icon: "",
},
{
	title: "fae-minimize",
	icon: "",
},
{
	title: "fae-molecule",
	icon: "",
},
{
	title: "fae-moon_cloud",
	icon: "",
},
{
	title: "fae-mountains",
	icon: "",
},
{
	title: "fae-mushroom",
	icon: "",
},
{
	title: "fae-mustache",
	icon: "",
},
{
	title: "fae-mysql",
	icon: "",
},
{
	title: "fae-nintendo",
	icon: "",
},
{
	title: "fae-orange",
	icon: "",
},
{
	title: "fae-palette_color",
	icon: "",
},
{
	title: "fae-peach",
	icon: "",
},
{
	title: "fae-pear",
	icon: "",
},
{
	title: "fae-pi",
	icon: "",
},
{
	title: "fae-pizza",
	icon: "",
},
{
	title: "fae-planet",
	icon: "",
},
{
	title: "fae-plant",
	icon: "",
},
{
	title: "fae-playstation",
	icon: "",
},
{
	title: "fae-poison",
	icon: "",
},
{
	title: "fae-popcorn",
	icon: "",
},
{
	title: "fae-popsicle",
	icon: "",
},
{
	title: "fae-pulse",
	icon: "",
},
{
	title: "fae-python",
	icon: "",
},
{
	title: "fae-quora_circle",
	icon: "",
},
{
	title: "fae-quora_square",
	icon: "",
},
{
	title: "fae-radioactive",
	icon: "",
},
{
	title: "fae-raining",
	icon: "",
},
{
	title: "fae-real_heart",
	icon: "",
},
{
	title: "fae-refrigerator",
	icon: "",
},
{
	title: "fae-restore",
	icon: "",
},
{
	title: "fae-ring",
	icon: "",
},
{
	title: "fae-ruby",
	icon: "",
},
{
	title: "fae-ruby_o",
	icon: "",
},
{
	title: "fae-ruler",
	icon: "",
},
{
	title: "fae-shirt",
	icon: "",
},
{
	title: "fae-slash",
	icon: "",
},
{
	title: "fae-smaller",
	icon: "",
},
{
	title: "fae-snowing",
	icon: "",
},
{
	title: "fae-soda",
	icon: "",
},
{
	title: "fae-sofa",
	icon: "",
},
{
	title: "fae-soup",
	icon: "",
},
{
	title: "fae-spermatozoon",
	icon: "",
},
{
	title: "fae-spin_double",
	icon: "",
},
{
	title: "fae-stomach",
	icon: "",
},
{
	title: "fae-storm",
	icon: "",
},
{
	title: "fae-sun_cloud",
	icon: "",
},
{
	title: "fae-sushi",
	icon: "",
},
{
	title: "fae-tacos",
	icon: "",
},
{
	title: "fae-telegram",
	icon: "",
},
{
	title: "fae-telegram_circle",
	icon: "",
},
{
	title: "fae-telescope",
	icon: "",
},
{
	title: "fae-thermometer",
	icon: "",
},
{
	title: "fae-thermometer_high",
	icon: "",
},
{
	title: "fae-thermometer_low",
	icon: "",
},
{
	title: "fae-thin_close",
	icon: "",
},
{
	title: "fae-toilet",
	icon: "",
},
{
	title: "fae-tools",
	icon: "",
},
{
	title: "fae-tooth",
	icon: "",
},
{
	title: "fae-tree",
	icon: "",
},
{
	title: "fae-triangle_ruler",
	icon: "",
},
{
	title: "fae-umbrella",
	icon: "",
},
{
	title: "fae-uterus",
	icon: "",
},
{
	title: "fae-virus",
	icon: "",
},
{
	title: "fae-w3c",
	icon: "",
},
{
	title: "fae-walking",
	icon: "",
},
{
	title: "fae-wallet",
	icon: "",
},
{
	title: "fae-wind",
	icon: "",
},
{
	title: "fae-xbox",
	icon: "",
},
{
	title: "iec-power",
	icon: "⏻",
},
{
	title: "iec-power_off",
	icon: "⭘",
},
{
	title: "iec-power_on",
	icon: "⏽",
},
{
	title: "iec-sleep_mode",
	icon: "⏾",
},
{
	title: "iec-toggle_power",
	icon: "⏼",
},
{
	title: "indent-dotted_guide",
	icon: "",
},
{
	title: "indent-line",
	icon: "",
},
{
	title: "indentation-line",
	icon: "",
},
{
	title: "linux-almalinux",
	icon: "",
},
{
	title: "linux-alpine",
	icon: "",
},
{
	title: "linux-aosc",
	icon: "",
},
{
	title: "linux-apple",
	icon: "",
},
{
	title: "linux-archcraft",
	icon: "",
},
{
	title: "linux-archlabs",
	icon: "",
},
{
	title: "linux-archlinux",
	icon: "",
},
{
	title: "linux-arcolinux",
	icon: "",
},
{
	title: "linux-arduino",
	icon: "",
},
{
	title: "linux-artix",
	icon: "",
},
{
	title: "linux-awesome",
	icon: "",
},
{
	title: "linux-biglinux",
	icon: "",
},
{
	title: "linux-bspwm",
	icon: "",
},
{
	title: "linux-budgie",
	icon: "",
},
{
	title: "linux-centos",
	icon: "",
},
{
	title: "linux-cinnamon",
	icon: "",
},
{
	title: "linux-codeberg",
	icon: "",
},
{
	title: "linux-coreos",
	icon: "",
},
{
	title: "linux-crystal",
	icon: "",
},
{
	title: "linux-debian",
	icon: "",
},
{
	title: "linux-deepin",
	icon: "",
},
{
	title: "linux-devuan",
	icon: "",
},
{
	title: "linux-docker",
	icon: "",
},
{
	title: "linux-dwm",
	icon: "",
},
{
	title: "linux-elementary",
	icon: "",
},
{
	title: "linux-endeavour",
	icon: "",
},
{
	title: "linux-enlightenment",
	icon: "",
},
{
	title: "linux-fdroid",
	icon: "",
},
{
	title: "linux-fedora",
	icon: "",
},
{
	title: "linux-fedora_inverse",
	icon: "",
},
{
	title: "linux-ferris",
	icon: "",
},
{
	title: "linux-flathub",
	icon: "",
},
{
	title: "linux-fluxbox",
	icon: "",
},
{
	title: "linux-forgejo",
	icon: "",
},
{
	title: "linux-fosdem",
	icon: "",
},
{
	title: "linux-freebsd",
	icon: "",
},
{
	title: "linux-freecad",
	icon: "",
},
{
	title: "linux-freedesktop",
	icon: "",
},
{
	title: "linux-garuda",
	icon: "",
},
{
	title: "linux-gentoo",
	icon: "",
},
{
	title: "linux-gimp",
	icon: "",
},
{
	title: "linux-gitea",
	icon: "",
},
{
	title: "linux-gnome",
	icon: "",
},
{
	title: "linux-gnu_guix",
	icon: "",
},
{
	title: "linux-gtk",
	icon: "",
},
{
	title: "linux-hyperbola",
	icon: "",
},
{
	title: "linux-hyprland",
	icon: "",
},
{
	title: "linux-i3",
	icon: "",
},
{
	title: "linux-illumos",
	icon: "",
},
{
	title: "linux-inkscape",
	icon: "",
},
{
	title: "linux-jwm",
	icon: "",
},
{
	title: "linux-kali_linux",
	icon: "",
},
{
	title: "linux-kde",
	icon: "",
},
{
	title: "linux-kde_neon",
	icon: "",
},
{
	title: "linux-kde_plasma",
	icon: "",
},
{
	title: "linux-kdenlive",
	icon: "",
},
{
	title: "linux-kicad",
	icon: "",
},
{
	title: "linux-krita",
	icon: "",
},
{
	title: "linux-kubuntu",
	icon: "",
},
{
	title: "linux-kubuntu_inverse",
	icon: "",
},
{
	title: "linux-leap",
	icon: "",
},
{
	title: "linux-libreoffice",
	icon: "",
},
{
	title: "linux-libreofficebase",
	icon: "",
},
{
	title: "linux-libreofficecalc",
	icon: "",
},
{
	title: "linux-libreofficedraw",
	icon: "",
},
{
	title: "linux-libreofficeimpress",
	icon: "",
},
{
	title: "linux-libreofficemath",
	icon: "",
},
{
	title: "linux-libreofficewriter",
	icon: "",
},
{
	title: "linux-linuxmint",
	icon: "",
},
{
	title: "linux-linuxmint_inverse",
	icon: "",
},
{
	title: "linux-locos",
	icon: "",
},
{
	title: "linux-lxde",
	icon: "",
},
{
	title: "linux-lxle",
	icon: "",
},
{
	title: "linux-lxqt",
	icon: "",
},
{
	title: "linux-mageia",
	icon: "",
},
{
	title: "linux-mandriva",
	icon: "",
},
{
	title: "linux-manjaro",
	icon: "",
},
{
	title: "linux-mate",
	icon: "",
},
{
	title: "linux-mpv",
	icon: "",
},
{
	title: "linux-mxlinux",
	icon: "",
},
{
	title: "linux-neovim",
	icon: "",
},
{
	title: "linux-nixos",
	icon: "",
},
{
	title: "linux-nobara",
	icon: "",
},
{
	title: "linux-octoprint",
	icon: "",
},
{
	title: "linux-openbsd",
	icon: "",
},
{
	title: "linux-openscad",
	icon: "",
},
{
	title: "linux-opensuse",
	icon: "",
},
{
	title: "linux-osh",
	icon: "",
},
{
	title: "linux-oshwa",
	icon: "",
},
{
	title: "linux-osi",
	icon: "",
},
{
	title: "linux-parabola",
	icon: "",
},
{
	title: "linux-parrot",
	icon: "",
},
{
	title: "linux-pop_os",
	icon: "",
},
{
	title: "linux-postmarketos",
	icon: "",
},
{
	title: "linux-prusaslicer",
	icon: "",
},
{
	title: "linux-puppy",
	icon: "",
},
{
	title: "linux-qt",
	icon: "",
},
{
	title: "linux-qtile",
	icon: "",
},
{
	title: "linux-qubesos",
	icon: "",
},
{
	title: "linux-raspberry_pi",
	icon: "",
},
{
	title: "linux-redhat",
	icon: "",
},
{
	title: "linux-reprap",
	icon: "",
},
{
	title: "linux-riscv",
	icon: "",
},
{
	title: "linux-river",
	icon: "",
},
{
	title: "linux-rocky_linux",
	icon: "",
},
{
	title: "linux-sabayon",
	icon: "",
},
{
	title: "linux-slackware",
	icon: "",
},
{
	title: "linux-slackware_inverse",
	icon: "",
},
{
	title: "linux-snappy",
	icon: "",
},
{
	title: "linux-solus",
	icon: "",
},
{
	title: "linux-sway",
	icon: "",
},
{
	title: "linux-tails",
	icon: "",
},
{
	title: "linux-thunderbird",
	icon: "",
},
{
	title: "linux-tor",
	icon: "",
},
{
	title: "linux-trisquel",
	icon: "",
},
{
	title: "linux-tumbleweed",
	icon: "",
},
{
	title: "linux-tux",
	icon: "",
},
{
	title: "linux-typst",
	icon: "",
},
{
	title: "linux-ubuntu",
	icon: "",
},
{
	title: "linux-ubuntu_inverse",
	icon: "",
},
{
	title: "linux-vanilla",
	icon: "",
},
{
	title: "linux-void",
	icon: "",
},
{
	title: "linux-vscodium",
	icon: "",
},
{
	title: "linux-wayland",
	icon: "",
},
{
	title: "linux-wikimedia",
	icon: "",
},
{
	title: "linux-xerolinux",
	icon: "",
},
{
	title: "linux-xfce",
	icon: "",
},
{
	title: "linux-xmonad",
	icon: "",
},
{
	title: "linux-xorg",
	icon: "",
},
{
	title: "linux-zorin",
	icon: "",
},
{
	title: "md-ab_testing",
	icon: "󰇉",
},
{
	title: "md-abacus",
	icon: "󱛠",
},
{
	title: "md-abjad_arabic",
	icon: "󱌨",
},
{
	title: "md-abjad_hebrew",
	icon: "󱌩",
},
{
	title: "md-abugida_devanagari",
	icon: "󱌪",
},
{
	title: "md-abugida_thai",
	icon: "󱌫",
},
{
	title: "md-access_point",
	icon: "󰀃",
},
{
	title: "md-access_point_check",
	icon: "󱔸",
},
{
	title: "md-access_point_minus",
	icon: "󱔹",
},
{
	title: "md-access_point_network",
	icon: "󰀂",
},
{
	title: "md-access_point_network_off",
	icon: "󰯡",
},
{
	title: "md-access_point_off",
	icon: "󱔑",
},
{
	title: "md-access_point_plus",
	icon: "󱔺",
},
{
	title: "md-access_point_remove",
	icon: "󱔻",
},
{
	title: "md-account",
	icon: "󰀄",
},
{
	title: "md-account_alert",
	icon: "󰀅",
},
{
	title: "md-account_alert_outline",
	icon: "󰭐",
},
{
	title: "md-account_arrow_down",
	icon: "󱡨",
},
{
	title: "md-account_arrow_down_outline",
	icon: "󱡩",
},
{
	title: "md-account_arrow_left",
	icon: "󰭑",
},
{
	title: "md-account_arrow_left_outline",
	icon: "󰭒",
},
{
	title: "md-account_arrow_right",
	icon: "󰭓",
},
{
	title: "md-account_arrow_right_outline",
	icon: "󰭔",
},
{
	title: "md-account_arrow_up",
	icon: "󱡧",
},
{
	title: "md-account_arrow_up_outline",
	icon: "󱡪",
},
{
	title: "md-account_box",
	icon: "󰀆",
},
{
	title: "md-account_box_multiple",
	icon: "󰤴",
},
{
	title: "md-account_box_multiple_outline",
	icon: "󱀊",
},
{
	title: "md-account_box_outline",
	icon: "󰀇",
},
{
	title: "md-account_cancel",
	icon: "󱋟",
},
{
	title: "md-account_cancel_outline",
	icon: "󱋠",
},
{
	title: "md-account_cash",
	icon: "󱂗",
},
{
	title: "md-account_cash_outline",
	icon: "󱂘",
},
{
	title: "md-account_check",
	icon: "󰀈",
},
{
	title: "md-account_check_outline",
	icon: "󰯢",
},
{
	title: "md-account_child",
	icon: "󰪉",
},
{
	title: "md-account_child_circle",
	icon: "󰪊",
},
{
	title: "md-account_child_outline",
	icon: "󱃈",
},
{
	title: "md-account_circle",
	icon: "󰀉",
},
{
	title: "md-account_circle_outline",
	icon: "󰭕",
},
{
	title: "md-account_clock",
	icon: "󰭖",
},
{
	title: "md-account_clock_outline",
	icon: "󰭗",
},
{
	title: "md-account_cog",
	icon: "󱍰",
},
{
	title: "md-account_cog_outline",
	icon: "󱍱",
},
{
	title: "md-account_convert",
	icon: "󰀊",
},
{
	title: "md-account_convert_outline",
	icon: "󱌁",
},
{
	title: "md-account_cowboy_hat",
	icon: "󰺛",
},
{
	title: "md-account_cowboy_hat_outline",
	icon: "󱟳",
},
{
	title: "md-account_details",
	icon: "󰘱",
},
{
	title: "md-account_details_outline",
	icon: "󱍲",
},
{
	title: "md-account_edit",
	icon: "󰚼",
},
{
	title: "md-account_edit_outline",
	icon: "󰿻",
},
{
	title: "md-account_eye",
	icon: "󰐠",
},
{
	title: "md-account_eye_outline",
	icon: "󱉻",
},
{
	title: "md-account_filter",
	icon: "󰤶",
},
{
	title: "md-account_filter_outline",
	icon: "󰾝",
},
{
	title: "md-account_group",
	icon: "󰡉",
},
{
	title: "md-account_group_outline",
	icon: "󰭘",
},
{
	title: "md-account_hard_hat",
	icon: "󰖵",
},
{
	title: "md-account_hard_hat_outline",
	icon: "󱨟",
},
{
	title: "md-account_heart",
	icon: "󰢙",
},
{
	title: "md-account_heart_outline",
	icon: "󰯣",
},
{
	title: "md-account_injury",
	icon: "󱠕",
},
{
	title: "md-account_injury_outline",
	icon: "󱠖",
},
{
	title: "md-account_key",
	icon: "󰀋",
},
{
	title: "md-account_key_outline",
	icon: "󰯤",
},
{
	title: "md-account_lock",
	icon: "󱅞",
},
{
	title: "md-account_lock_open",
	icon: "󱥠",
},
{
	title: "md-account_lock_open_outline",
	icon: "󱥡",
},
{
	title: "md-account_lock_outline",
	icon: "󱅟",
},
{
	title: "md-account_minus",
	icon: "󰀍",
},
{
	title: "md-account_minus_outline",
	icon: "󰫬",
},
{
	title: "md-account_multiple",
	icon: "󰀎",
},
{
	title: "md-account_multiple_check",
	icon: "󰣅",
},
{
	title: "md-account_multiple_check_outline",
	icon: "󱇾",
},
{
	title: "md-account_multiple_minus",
	icon: "󰗓",
},
{
	title: "md-account_multiple_minus_outline",
	icon: "󰯥",
},
{
	title: "md-account_multiple_outline",
	icon: "󰀏",
},
{
	title: "md-account_multiple_plus",
	icon: "󰀐",
},
{
	title: "md-account_multiple_plus_outline",
	icon: "󰠀",
},
{
	title: "md-account_multiple_remove",
	icon: "󱈊",
},
{
	title: "md-account_multiple_remove_outline",
	icon: "󱈋",
},
{
	title: "md-account_music",
	icon: "󰠃",
},
{
	title: "md-account_music_outline",
	icon: "󰳩",
},
{
	title: "md-account_network",
	icon: "󰀑",
},
{
	title: "md-account_network_outline",
	icon: "󰯦",
},
{
	title: "md-account_off",
	icon: "󰀒",
},
{
	title: "md-account_off_outline",
	icon: "󰯧",
},
{
	title: "md-account_outline",
	icon: "󰀓",
},
{
	title: "md-account_plus",
	icon: "󰀔",
},
{
	title: "md-account_plus_outline",
	icon: "󰠁",
},
{
	title: "md-account_question",
	icon: "󰭙",
},
{
	title: "md-account_question_outline",
	icon: "󰭚",
},
{
	title: "md-account_reactivate",
	icon: "󱔫",
},
{
	title: "md-account_reactivate_outline",
	icon: "󱔬",
},
{
	title: "md-account_remove",
	icon: "󰀕",
},
{
	title: "md-account_remove_outline",
	icon: "󰫭",
},
{
	title: "md-account_school",
	icon: "󱨠",
},
{
	title: "md-account_school_outline",
	icon: "󱨡",
},
{
	title: "md-account_search",
	icon: "󰀖",
},
{
	title: "md-account_search_outline",
	icon: "󰤵",
},
{
	title: "md-account_settings",
	icon: "󰘰",
},
{
	title: "md-account_settings_outline",
	icon: "󱃉",
},
{
	title: "md-account_star",
	icon: "󰀗",
},
{
	title: "md-account_star_outline",
	icon: "󰯨",
},
{
	title: "md-account_supervisor",
	icon: "󰪋",
},
{
	title: "md-account_supervisor_circle",
	icon: "󰪌",
},
{
	title: "md-account_supervisor_circle_outline",
	icon: "󱓬",
},
{
	title: "md-account_supervisor_outline",
	icon: "󱄭",
},
{
	title: "md-account_switch",
	icon: "󰀙",
},
{
	title: "md-account_switch_outline",
	icon: "󰓋",
},
{
	title: "md-account_sync",
	icon: "󱤛",
},
{
	title: "md-account_sync_outline",
	icon: "󱤜",
},
{
	title: "md-account_tie",
	icon: "󰳣",
},
{
	title: "md-account_tie_hat",
	icon: "󱢘",
},
{
	title: "md-account_tie_hat_outline",
	icon: "󱢙",
},
{
	title: "md-account_tie_outline",
	icon: "󱃊",
},
{
	title: "md-account_tie_voice",
	icon: "󱌈",
},
{
	title: "md-account_tie_voice_off",
	icon: "󱌊",
},
{
	title: "md-account_tie_voice_off_outline",
	icon: "󱌋",
},
{
	title: "md-account_tie_voice_outline",
	icon: "󱌉",
},
{
	title: "md-account_tie_woman",
	icon: "󱪌",
},
{
	title: "md-account_voice",
	icon: "󰗋",
},
{
	title: "md-account_voice_off",
	icon: "󰻔",
},
{
	title: "md-account_wrench",
	icon: "󱢚",
},
{
	title: "md-account_wrench_outline",
	icon: "󱢛",
},
{
	title: "md-adjust",
	icon: "󰀚",
},
{
	title: "md-advertisements",
	icon: "󱤪",
},
{
	title: "md-advertisements_off",
	icon: "󱤫",
},
{
	title: "md-air_conditioner",
	icon: "󰀛",
},
{
	title: "md-air_filter",
	icon: "󰵃",
},
{
	title: "md-air_horn",
	icon: "󰶬",
},
{
	title: "md-air_humidifier",
	icon: "󱂙",
},
{
	title: "md-air_humidifier_off",
	icon: "󱑦",
},
{
	title: "md-air_purifier",
	icon: "󰵄",
},
{
	title: "md-airbag",
	icon: "󰯩",
},
{
	title: "md-airballoon",
	icon: "󰀜",
},
{
	title: "md-airballoon_outline",
	icon: "󱀋",
},
{
	title: "md-airplane",
	icon: "󰀝",
},
{
	title: "md-airplane_alert",
	icon: "󱡺",
},
{
	title: "md-airplane_check",
	icon: "󱡻",
},
{
	title: "md-airplane_clock",
	icon: "󱡼",
},
{
	title: "md-airplane_cog",
	icon: "󱡽",
},
{
	title: "md-airplane_edit",
	icon: "󱡾",
},
{
	title: "md-airplane_landing",
	icon: "󰗔",
},
{
	title: "md-airplane_marker",
	icon: "󱡿",
},
{
	title: "md-airplane_minus",
	icon: "󱢀",
},
{
	title: "md-airplane_off",
	icon: "󰀞",
},
{
	title: "md-airplane_plus",
	icon: "󱢁",
},
{
	title: "md-airplane_remove",
	icon: "󱢂",
},
{
	title: "md-airplane_search",
	icon: "󱢃",
},
{
	title: "md-airplane_settings",
	icon: "󱢄",
},
{
	title: "md-airplane_takeoff",
	icon: "󰗕",
},
{
	title: "md-airport",
	icon: "󰡋",
},
{
	title: "md-alarm",
	icon: "󰀠",
},
{
	title: "md-alarm_bell",
	icon: "󰞎",
},
{
	title: "md-alarm_check",
	icon: "󰀡",
},
{
	title: "md-alarm_light",
	icon: "󰞏",
},
{
	title: "md-alarm_light_off",
	icon: "󱜞",
},
{
	title: "md-alarm_light_off_outline",
	icon: "󱜟",
},
{
	title: "md-alarm_light_outline",
	icon: "󰯪",
},
{
	title: "md-alarm_multiple",
	icon: "󰀢",
},
{
	title: "md-alarm_note",
	icon: "󰹱",
},
{
	title: "md-alarm_note_off",
	icon: "󰹲",
},
{
	title: "md-alarm_off",
	icon: "󰀣",
},
{
	title: "md-alarm_panel",
	icon: "󱗄",
},
{
	title: "md-alarm_panel_outline",
	icon: "󱗅",
},
{
	title: "md-alarm_plus",
	icon: "󰀤",
},
{
	title: "md-alarm_snooze",
	icon: "󰚎",
},
{
	title: "md-album",
	icon: "󰀥",
},
{
	title: "md-alert",
	icon: "󰀦",
},
{
	title: "md-alert_box",
	icon: "󰀧",
},
{
	title: "md-alert_box_outline",
	icon: "󰳤",
},
{
	title: "md-alert_circle",
	icon: "󰀨",
},
{
	title: "md-alert_circle_check",
	icon: "󱇭",
},
{
	title: "md-alert_circle_check_outline",
	icon: "󱇮",
},
{
	title: "md-alert_circle_outline",
	icon: "󰗖",
},
{
	title: "md-alert_decagram",
	icon: "󰚽",
},
{
	title: "md-alert_decagram_outline",
	icon: "󰳥",
},
{
	title: "md-alert_minus",
	icon: "󱒻",
},
{
	title: "md-alert_minus_outline",
	icon: "󱒾",
},
{
	title: "md-alert_octagon",
	icon: "󰀩",
},
{
	title: "md-alert_octagon_outline",
	icon: "󰳦",
},
{
	title: "md-alert_octagram",
	icon: "󰝧",
},
{
	title: "md-alert_octagram_outline",
	icon: "󰳧",
},
{
	title: "md-alert_outline",
	icon: "󰀪",
},
{
	title: "md-alert_plus",
	icon: "󱒺",
},
{
	title: "md-alert_plus_outline",
	icon: "󱒽",
},
{
	title: "md-alert_remove",
	icon: "󱒼",
},
{
	title: "md-alert_remove_outline",
	icon: "󱒿",
},
{
	title: "md-alert_rhombus",
	icon: "󱇎",
},
{
	title: "md-alert_rhombus_outline",
	icon: "󱇏",
},
{
	title: "md-alien",
	icon: "󰢚",
},
{
	title: "md-alien_outline",
	icon: "󱃋",
},
{
	title: "md-align_horizontal_center",
	icon: "󱇃",
},
{
	title: "md-align_horizontal_distribute",
	icon: "󱥢",
},
{
	title: "md-align_horizontal_left",
	icon: "󱇂",
},
{
	title: "md-align_horizontal_right",
	icon: "󱇄",
},
{
	title: "md-align_vertical_bottom",
	icon: "󱇅",
},
{
	title: "md-align_vertical_center",
	icon: "󱇆",
},
{
	title: "md-align_vertical_distribute",
	icon: "󱥣",
},
{
	title: "md-align_vertical_top",
	icon: "󱇇",
},
{
	title: "md-all_inclusive",
	icon: "󰚾",
},
{
	title: "md-all_inclusive_box",
	icon: "󱢍",
},
{
	title: "md-all_inclusive_box_outline",
	icon: "󱢎",
},
{
	title: "md-allergy",
	icon: "󱉘",
},
{
	title: "md-alpha",
	icon: "󰀫",
},
{
	title: "md-alpha_a",
	icon: "󰫮",
},
{
	title: "md-alpha_a_box",
	icon: "󰬈",
},
{
	title: "md-alpha_a_box_outline",
	icon: "󰯫",
},
{
	title: "md-alpha_a_circle",
	icon: "󰯬",
},
{
	title: "md-alpha_a_circle_outline",
	icon: "󰯭",
},
{
	title: "md-alpha_b",
	icon: "󰫯",
},
{
	title: "md-alpha_b_box",
	icon: "󰬉",
},
{
	title: "md-alpha_b_box_outline",
	icon: "󰯮",
},
{
	title: "md-alpha_b_circle",
	icon: "󰯯",
},
{
	title: "md-alpha_b_circle_outline",
	icon: "󰯰",
},
{
	title: "md-alpha_c",
	icon: "󰫰",
},
{
	title: "md-alpha_c_box",
	icon: "󰬊",
},
{
	title: "md-alpha_c_box_outline",
	icon: "󰯱",
},
{
	title: "md-alpha_c_circle",
	icon: "󰯲",
},
{
	title: "md-alpha_c_circle_outline",
	icon: "󰯳",
},
{
	title: "md-alpha_d",
	icon: "󰫱",
},
{
	title: "md-alpha_d_box",
	icon: "󰬋",
},
{
	title: "md-alpha_d_box_outline",
	icon: "󰯴",
},
{
	title: "md-alpha_d_circle",
	icon: "󰯵",
},
{
	title: "md-alpha_d_circle_outline",
	icon: "󰯶",
},
{
	title: "md-alpha_e",
	icon: "󰫲",
},
{
	title: "md-alpha_e_box",
	icon: "󰬌",
},
{
	title: "md-alpha_e_box_outline",
	icon: "󰯷",
},
{
	title: "md-alpha_e_circle",
	icon: "󰯸",
},
{
	title: "md-alpha_e_circle_outline",
	icon: "󰯹",
},
{
	title: "md-alpha_f",
	icon: "󰫳",
},
{
	title: "md-alpha_f_box",
	icon: "󰬍",
},
{
	title: "md-alpha_f_box_outline",
	icon: "󰯺",
},
{
	title: "md-alpha_f_circle",
	icon: "󰯻",
},
{
	title: "md-alpha_f_circle_outline",
	icon: "󰯼",
},
{
	title: "md-alpha_g",
	icon: "󰫴",
},
{
	title: "md-alpha_g_box",
	icon: "󰬎",
},
{
	title: "md-alpha_g_box_outline",
	icon: "󰯽",
},
{
	title: "md-alpha_g_circle",
	icon: "󰯾",
},
{
	title: "md-alpha_g_circle_outline",
	icon: "󰯿",
},
{
	title: "md-alpha_h",
	icon: "󰫵",
},
{
	title: "md-alpha_h_box",
	icon: "󰬏",
},
{
	title: "md-alpha_h_box_outline",
	icon: "󰰀",
},
{
	title: "md-alpha_h_circle",
	icon: "󰰁",
},
{
	title: "md-alpha_h_circle_outline",
	icon: "󰰂",
},
{
	title: "md-alpha_i",
	icon: "󰫶",
},
{
	title: "md-alpha_i_box",
	icon: "󰬐",
},
{
	title: "md-alpha_i_box_outline",
	icon: "󰰃",
},
{
	title: "md-alpha_i_circle",
	icon: "󰰄",
},
{
	title: "md-alpha_i_circle_outline",
	icon: "󰰅",
},
{
	title: "md-alpha_j",
	icon: "󰫷",
},
{
	title: "md-alpha_j_box",
	icon: "󰬑",
},
{
	title: "md-alpha_j_box_outline",
	icon: "󰰆",
},
{
	title: "md-alpha_j_circle",
	icon: "󰰇",
},
{
	title: "md-alpha_j_circle_outline",
	icon: "󰰈",
},
{
	title: "md-alpha_k",
	icon: "󰫸",
},
{
	title: "md-alpha_k_box",
	icon: "󰬒",
},
{
	title: "md-alpha_k_box_outline",
	icon: "󰰉",
},
{
	title: "md-alpha_k_circle",
	icon: "󰰊",
},
{
	title: "md-alpha_k_circle_outline",
	icon: "󰰋",
},
{
	title: "md-alpha_l",
	icon: "󰫹",
},
{
	title: "md-alpha_l_box",
	icon: "󰬓",
},
{
	title: "md-alpha_l_box_outline",
	icon: "󰰌",
},
{
	title: "md-alpha_l_circle",
	icon: "󰰍",
},
{
	title: "md-alpha_l_circle_outline",
	icon: "󰰎",
},
{
	title: "md-alpha_m",
	icon: "󰫺",
},
{
	title: "md-alpha_m_box",
	icon: "󰬔",
},
{
	title: "md-alpha_m_box_outline",
	icon: "󰰏",
},
{
	title: "md-alpha_m_circle",
	icon: "󰰐",
},
{
	title: "md-alpha_m_circle_outline",
	icon: "󰰑",
},
{
	title: "md-alpha_n",
	icon: "󰫻",
},
{
	title: "md-alpha_n_box",
	icon: "󰬕",
},
{
	title: "md-alpha_n_box_outline",
	icon: "󰰒",
},
{
	title: "md-alpha_n_circle",
	icon: "󰰓",
},
{
	title: "md-alpha_n_circle_outline",
	icon: "󰰔",
},
{
	title: "md-alpha_o",
	icon: "󰫼",
},
{
	title: "md-alpha_o_box",
	icon: "󰬖",
},
{
	title: "md-alpha_o_box_outline",
	icon: "󰰕",
},
{
	title: "md-alpha_o_circle",
	icon: "󰰖",
},
{
	title: "md-alpha_o_circle_outline",
	icon: "󰰗",
},
{
	title: "md-alpha_p",
	icon: "󰫽",
},
{
	title: "md-alpha_p_box",
	icon: "󰬗",
},
{
	title: "md-alpha_p_box_outline",
	icon: "󰰘",
},
{
	title: "md-alpha_p_circle",
	icon: "󰰙",
},
{
	title: "md-alpha_p_circle_outline",
	icon: "󰰚",
},
{
	title: "md-alpha_q",
	icon: "󰫾",
},
{
	title: "md-alpha_q_box",
	icon: "󰬘",
},
{
	title: "md-alpha_q_box_outline",
	icon: "󰰛",
},
{
	title: "md-alpha_q_circle",
	icon: "󰰜",
},
{
	title: "md-alpha_q_circle_outline",
	icon: "󰰝",
},
{
	title: "md-alpha_r",
	icon: "󰫿",
},
{
	title: "md-alpha_r_box",
	icon: "󰬙",
},
{
	title: "md-alpha_r_box_outline",
	icon: "󰰞",
},
{
	title: "md-alpha_r_circle",
	icon: "󰰟",
},
{
	title: "md-alpha_r_circle_outline",
	icon: "󰰠",
},
{
	title: "md-alpha_s",
	icon: "󰬀",
},
{
	title: "md-alpha_s_box",
	icon: "󰬚",
},
{
	title: "md-alpha_s_box_outline",
	icon: "󰰡",
},
{
	title: "md-alpha_s_circle",
	icon: "󰰢",
},
{
	title: "md-alpha_s_circle_outline",
	icon: "󰰣",
},
{
	title: "md-alpha_t",
	icon: "󰬁",
},
{
	title: "md-alpha_t_box",
	icon: "󰬛",
},
{
	title: "md-alpha_t_box_outline",
	icon: "󰰤",
},
{
	title: "md-alpha_t_circle",
	icon: "󰰥",
},
{
	title: "md-alpha_t_circle_outline",
	icon: "󰰦",
},
{
	title: "md-alpha_u",
	icon: "󰬂",
},
{
	title: "md-alpha_u_box",
	icon: "󰬜",
},
{
	title: "md-alpha_u_box_outline",
	icon: "󰰧",
},
{
	title: "md-alpha_u_circle",
	icon: "󰰨",
},
{
	title: "md-alpha_u_circle_outline",
	icon: "󰰩",
},
{
	title: "md-alpha_v",
	icon: "󰬃",
},
{
	title: "md-alpha_v_box",
	icon: "󰬝",
},
{
	title: "md-alpha_v_box_outline",
	icon: "󰰪",
},
{
	title: "md-alpha_v_circle",
	icon: "󰰫",
},
{
	title: "md-alpha_v_circle_outline",
	icon: "󰰬",
},
{
	title: "md-alpha_w",
	icon: "󰬄",
},
{
	title: "md-alpha_w_box",
	icon: "󰬞",
},
{
	title: "md-alpha_w_box_outline",
	icon: "󰰭",
},
{
	title: "md-alpha_w_circle",
	icon: "󰰮",
},
{
	title: "md-alpha_w_circle_outline",
	icon: "󰰯",
},
{
	title: "md-alpha_x",
	icon: "󰬅",
},
{
	title: "md-alpha_x_box",
	icon: "󰬟",
},
{
	title: "md-alpha_x_box_outline",
	icon: "󰰰",
},
{
	title: "md-alpha_x_circle",
	icon: "󰰱",
},
{
	title: "md-alpha_x_circle_outline",
	icon: "󰰲",
},
{
	title: "md-alpha_y",
	icon: "󰬆",
},
{
	title: "md-alpha_y_box",
	icon: "󰬠",
},
{
	title: "md-alpha_y_box_outline",
	icon: "󰰳",
},
{
	title: "md-alpha_y_circle",
	icon: "󰰴",
},
{
	title: "md-alpha_y_circle_outline",
	icon: "󰰵",
},
{
	title: "md-alpha_z",
	icon: "󰬇",
},
{
	title: "md-alpha_z_box",
	icon: "󰬡",
},
{
	title: "md-alpha_z_box_outline",
	icon: "󰰶",
},
{
	title: "md-alpha_z_circle",
	icon: "󰰷",
},
{
	title: "md-alpha_z_circle_outline",
	icon: "󰰸",
},
{
	title: "md-alphabet_aurebesh",
	icon: "󱌬",
},
{
	title: "md-alphabet_cyrillic",
	icon: "󱌭",
},
{
	title: "md-alphabet_greek",
	icon: "󱌮",
},
{
	title: "md-alphabet_latin",
	icon: "󱌯",
},
{
	title: "md-alphabet_piqad",
	icon: "󱌰",
},
{
	title: "md-alphabet_tengwar",
	icon: "󱌷",
},
{
	title: "md-alphabetical",
	icon: "󰀬",
},
{
	title: "md-alphabetical_off",
	icon: "󱀌",
},
{
	title: "md-alphabetical_variant",
	icon: "󱀍",
},
{
	title: "md-alphabetical_variant_off",
	icon: "󱀎",
},
{
	title: "md-altimeter",
	icon: "󰗗",
},
{
	title: "md-ambulance",
	icon: "󰀯",
},
{
	title: "md-ammunition",
	icon: "󰳨",
},
{
	title: "md-ampersand",
	icon: "󰪍",
},
{
	title: "md-amplifier",
	icon: "󰀰",
},
{
	title: "md-amplifier_off",
	icon: "󱆵",
},
{
	title: "md-anchor",
	icon: "󰀱",
},
{
	title: "md-android",
	icon: "󰀲",
},
{
	title: "md-android_messages",
	icon: "󰵅",
},
{
	title: "md-android_studio",
	icon: "󰀴",
},
{
	title: "md-angle_acute",
	icon: "󰤷",
},
{
	title: "md-angle_obtuse",
	icon: "󰤸",
},
{
	title: "md-angle_right",
	icon: "󰤹",
},
{
	title: "md-angular",
	icon: "󰚲",
},
{
	title: "md-angularjs",
	icon: "󰚿",
},
{
	title: "md-animation",
	icon: "󰗘",
},
{
	title: "md-animation_outline",
	icon: "󰪏",
},
{
	title: "md-animation_play",
	icon: "󰤺",
},
{
	title: "md-animation_play_outline",
	icon: "󰪐",
},
{
	title: "md-ansible",
	icon: "󱂚",
},
{
	title: "md-antenna",
	icon: "󱄙",
},
{
	title: "md-anvil",
	icon: "󰢛",
},
{
	title: "md-apache_kafka",
	icon: "󱀏",
},
{
	title: "md-api",
	icon: "󱂛",
},
{
	title: "md-api_off",
	icon: "󱉗",
},
{
	title: "md-apple",
	icon: "󰀵",
},
{
	title: "md-apple_finder",
	icon: "󰀶",
},
{
	title: "md-apple_icloud",
	icon: "󰀸",
},
{
	title: "md-apple_ios",
	icon: "󰀷",
},
{
	title: "md-apple_keyboard_caps",
	icon: "󰘲",
},
{
	title: "md-apple_keyboard_command",
	icon: "󰘳",
},
{
	title: "md-apple_keyboard_control",
	icon: "󰘴",
},
{
	title: "md-apple_keyboard_option",
	icon: "󰘵",
},
{
	title: "md-apple_keyboard_shift",
	icon: "󰘶",
},
{
	title: "md-apple_safari",
	icon: "󰀹",
},
{
	title: "md-application",
	icon: "󰣆",
},
{
	title: "md-application_array",
	icon: "󱃵",
},
{
	title: "md-application_array_outline",
	icon: "󱃶",
},
{
	title: "md-application_braces",
	icon: "󱃷",
},
{
	title: "md-application_braces_outline",
	icon: "󱃸",
},
{
	title: "md-application_brackets",
	icon: "󰲋",
},
{
	title: "md-application_brackets_outline",
	icon: "󰲌",
},
{
	title: "md-application_cog",
	icon: "󰙵",
},
{
	title: "md-application_cog_outline",
	icon: "󱕷",
},
{
	title: "md-application_edit",
	icon: "󰂮",
},
{
	title: "md-application_edit_outline",
	icon: "󰘙",
},
{
	title: "md-application_export",
	icon: "󰶭",
},
{
	title: "md-application_import",
	icon: "󰶮",
},
{
	title: "md-application_outline",
	icon: "󰘔",
},
{
	title: "md-application_parentheses",
	icon: "󱃹",
},
{
	title: "md-application_parentheses_outline",
	icon: "󱃺",
},
{
	title: "md-application_settings",
	icon: "󰭠",
},
{
	title: "md-application_settings_outline",
	icon: "󱕕",
},
{
	title: "md-application_variable",
	icon: "󱃻",
},
{
	title: "md-application_variable_outline",
	icon: "󱃼",
},
{
	title: "md-approximately_equal",
	icon: "󰾞",
},
{
	title: "md-approximately_equal_box",
	icon: "󰾟",
},
{
	title: "md-apps",
	icon: "󰀻",
},
{
	title: "md-apps_box",
	icon: "󰵆",
},
{
	title: "md-arch",
	icon: "󰣇",
},
{
	title: "md-archive",
	icon: "󰀼",
},
{
	title: "md-archive_alert",
	icon: "󱓽",
},
{
	title: "md-archive_alert_outline",
	icon: "󱓾",
},
{
	title: "md-archive_arrow_down",
	icon: "󱉙",
},
{
	title: "md-archive_arrow_down_outline",
	icon: "󱉚",
},
{
	title: "md-archive_arrow_up",
	icon: "󱉛",
},
{
	title: "md-archive_arrow_up_outline",
	icon: "󱉜",
},
{
	title: "md-archive_cancel",
	icon: "󱝋",
},
{
	title: "md-archive_cancel_outline",
	icon: "󱝌",
},
{
	title: "md-archive_check",
	icon: "󱝍",
},
{
	title: "md-archive_check_outline",
	icon: "󱝎",
},
{
	title: "md-archive_clock",
	icon: "󱝏",
},
{
	title: "md-archive_clock_outline",
	icon: "󱝐",
},
{
	title: "md-archive_cog",
	icon: "󱝑",
},
{
	title: "md-archive_cog_outline",
	icon: "󱝒",
},
{
	title: "md-archive_edit",
	icon: "󱝓",
},
{
	title: "md-archive_edit_outline",
	icon: "󱝔",
},
{
	title: "md-archive_eye",
	icon: "󱝕",
},
{
	title: "md-archive_eye_outline",
	icon: "󱝖",
},
{
	title: "md-archive_lock",
	icon: "󱝗",
},
{
	title: "md-archive_lock_open",
	icon: "󱝘",
},
{
	title: "md-archive_lock_open_outline",
	icon: "󱝙",
},
{
	title: "md-archive_lock_outline",
	icon: "󱝚",
},
{
	title: "md-archive_marker",
	icon: "󱝛",
},
{
	title: "md-archive_marker_outline",
	icon: "󱝜",
},
{
	title: "md-archive_minus",
	icon: "󱝝",
},
{
	title: "md-archive_minus_outline",
	icon: "󱝞",
},
{
	title: "md-archive_music",
	icon: "󱝟",
},
{
	title: "md-archive_music_outline",
	icon: "󱝠",
},
{
	title: "md-archive_off",
	icon: "󱝡",
},
{
	title: "md-archive_off_outline",
	icon: "󱝢",
},
{
	title: "md-archive_outline",
	icon: "󱈎",
},
{
	title: "md-archive_plus",
	icon: "󱝣",
},
{
	title: "md-archive_plus_outline",
	icon: "󱝤",
},
{
	title: "md-archive_refresh",
	icon: "󱝥",
},
{
	title: "md-archive_refresh_outline",
	icon: "󱝦",
},
{
	title: "md-archive_remove",
	icon: "󱝧",
},
{
	title: "md-archive_remove_outline",
	icon: "󱝨",
},
{
	title: "md-archive_search",
	icon: "󱝩",
},
{
	title: "md-archive_search_outline",
	icon: "󱝪",
},
{
	title: "md-archive_settings",
	icon: "󱝫",
},
{
	title: "md-archive_settings_outline",
	icon: "󱝬",
},
{
	title: "md-archive_star",
	icon: "󱝭",
},
{
	title: "md-archive_star_outline",
	icon: "󱝮",
},
{
	title: "md-archive_sync",
	icon: "󱝯",
},
{
	title: "md-archive_sync_outline",
	icon: "󱝰",
},
{
	title: "md-arm_flex",
	icon: "󰿗",
},
{
	title: "md-arm_flex_outline",
	icon: "󰿖",
},
{
	title: "md-arrange_bring_forward",
	icon: "󰀽",
},
{
	title: "md-arrange_bring_to_front",
	icon: "󰀾",
},
{
	title: "md-arrange_send_backward",
	icon: "󰀿",
},
{
	title: "md-arrange_send_to_back",
	icon: "󰁀",
},
{
	title: "md-arrow_all",
	icon: "󰁁",
},
{
	title: "md-arrow_bottom_left",
	icon: "󰁂",
},
{
	title: "md-arrow_bottom_left_bold_box",
	icon: "󱥤",
},
{
	title: "md-arrow_bottom_left_bold_box_outline",
	icon: "󱥥",
},
{
	title: "md-arrow_bottom_left_bold_outline",
	icon: "󰦷",
},
{
	title: "md-arrow_bottom_left_thick",
	icon: "󰦸",
},
{
	title: "md-arrow_bottom_left_thin",
	icon: "󱦶",
},
{
	title: "md-arrow_bottom_left_thin_circle_outline",
	icon: "󱖖",
},
{
	title: "md-arrow_bottom_right",
	icon: "󰁃",
},
{
	title: "md-arrow_bottom_right_bold_box",
	icon: "󱥦",
},
{
	title: "md-arrow_bottom_right_bold_box_outline",
	icon: "󱥧",
},
{
	title: "md-arrow_bottom_right_bold_outline",
	icon: "󰦹",
},
{
	title: "md-arrow_bottom_right_thick",
	icon: "󰦺",
},
{
	title: "md-arrow_bottom_right_thin",
	icon: "󱦷",
},
{
	title: "md-arrow_bottom_right_thin_circle_outline",
	icon: "󱖕",
},
{
	title: "md-arrow_collapse",
	icon: "󰘕",
},
{
	title: "md-arrow_collapse_all",
	icon: "󰁄",
},
{
	title: "md-arrow_collapse_down",
	icon: "󰞒",
},
{
	title: "md-arrow_collapse_horizontal",
	icon: "󰡌",
},
{
	title: "md-arrow_collapse_left",
	icon: "󰞓",
},
{
	title: "md-arrow_collapse_right",
	icon: "󰞔",
},
{
	title: "md-arrow_collapse_up",
	icon: "󰞕",
},
{
	title: "md-arrow_collapse_vertical",
	icon: "󰡍",
},
{
	title: "md-arrow_decision",
	icon: "󰦻",
},
{
	title: "md-arrow_decision_auto",
	icon: "󰦼",
},
{
	title: "md-arrow_decision_auto_outline",
	icon: "󰦽",
},
{
	title: "md-arrow_decision_outline",
	icon: "󰦾",
},
{
	title: "md-arrow_down",
	icon: "󰁅",
},
{
	title: "md-arrow_down_bold",
	icon: "󰜮",
},
{
	title: "md-arrow_down_bold_box",
	icon: "󰜯",
},
{
	title: "md-arrow_down_bold_box_outline",
	icon: "󰜰",
},
{
	title: "md-arrow_down_bold_circle",
	icon: "󰁇",
},
{
	title: "md-arrow_down_bold_circle_outline",
	icon: "󰁈",
},
{
	title: "md-arrow_down_bold_hexagon_outline",
	icon: "󰁉",
},
{
	title: "md-arrow_down_bold_outline",
	icon: "󰦿",
},
{
	title: "md-arrow_down_box",
	icon: "󰛀",
},
{
	title: "md-arrow_down_circle",
	icon: "󰳛",
},
{
	title: "md-arrow_down_circle_outline",
	icon: "󰳜",
},
{
	title: "md-arrow_down_drop_circle",
	icon: "󰁊",
},
{
	title: "md-arrow_down_drop_circle_outline",
	icon: "󰁋",
},
{
	title: "md-arrow_down_left",
	icon: "󱞡",
},
{
	title: "md-arrow_down_left_bold",
	icon: "󱞢",
},
{
	title: "md-arrow_down_right",
	icon: "󱞣",
},
{
	title: "md-arrow_down_right_bold",
	icon: "󱞤",
},
{
	title: "md-arrow_down_thick",
	icon: "󰁆",
},
{
	title: "md-arrow_down_thin",
	icon: "󱦳",
},
{
	title: "md-arrow_down_thin_circle_outline",
	icon: "󱖙",
},
{
	title: "md-arrow_expand",
	icon: "󰘖",
},
{
	title: "md-arrow_expand_all",
	icon: "󰁌",
},
{
	title: "md-arrow_expand_down",
	icon: "󰞖",
},
{
	title: "md-arrow_expand_horizontal",
	icon: "󰡎",
},
{
	title: "md-arrow_expand_left",
	icon: "󰞗",
},
{
	title: "md-arrow_expand_right",
	icon: "󰞘",
},
{
	title: "md-arrow_expand_up",
	icon: "󰞙",
},
{
	title: "md-arrow_expand_vertical",
	icon: "󰡏",
},
{
	title: "md-arrow_horizontal_lock",
	icon: "󱅛",
},
{
	title: "md-arrow_left",
	icon: "󰁍",
},
{
	title: "md-arrow_left_bold",
	icon: "󰜱",
},
{
	title: "md-arrow_left_bold_box",
	icon: "󰜲",
},
{
	title: "md-arrow_left_bold_box_outline",
	icon: "󰜳",
},
{
	title: "md-arrow_left_bold_circle",
	icon: "󰁏",
},
{
	title: "md-arrow_left_bold_circle_outline",
	icon: "󰁐",
},
{
	title: "md-arrow_left_bold_hexagon_outline",
	icon: "󰁑",
},
{
	title: "md-arrow_left_bold_outline",
	icon: "󰧀",
},
{
	title: "md-arrow_left_bottom",
	icon: "󱞥",
},
{
	title: "md-arrow_left_bottom_bold",
	icon: "󱞦",
},
{
	title: "md-arrow_left_box",
	icon: "󰛁",
},
{
	title: "md-arrow_left_circle",
	icon: "󰳝",
},
{
	title: "md-arrow_left_circle_outline",
	icon: "󰳞",
},
{
	title: "md-arrow_left_drop_circle",
	icon: "󰁒",
},
{
	title: "md-arrow_left_drop_circle_outline",
	icon: "󰁓",
},
{
	title: "md-arrow_left_right",
	icon: "󰹳",
},
{
	title: "md-arrow_left_right_bold",
	icon: "󰹴",
},
{
	title: "md-arrow_left_right_bold_outline",
	icon: "󰧁",
},
{
	title: "md-arrow_left_thick",
	icon: "󰁎",
},
{
	title: "md-arrow_left_thin",
	icon: "󱦱",
},
{
	title: "md-arrow_left_thin_circle_outline",
	icon: "󱖚",
},
{
	title: "md-arrow_left_top",
	icon: "󱞧",
},
{
	title: "md-arrow_left_top_bold",
	icon: "󱞨",
},
{
	title: "md-arrow_projectile",
	icon: "󱡀",
},
{
	title: "md-arrow_projectile_multiple",
	icon: "󱠿",
},
{
	title: "md-arrow_right",
	icon: "󰁔",
},
{
	title: "md-arrow_right_bold",
	icon: "󰜴",
},
{
	title: "md-arrow_right_bold_box",
	icon: "󰜵",
},
{
	title: "md-arrow_right_bold_box_outline",
	icon: "󰜶",
},
{
	title: "md-arrow_right_bold_circle",
	icon: "󰁖",
},
{
	title: "md-arrow_right_bold_circle_outline",
	icon: "󰁗",
},
{
	title: "md-arrow_right_bold_hexagon_outline",
	icon: "󰁘",
},
{
	title: "md-arrow_right_bold_outline",
	icon: "󰧂",
},
{
	title: "md-arrow_right_bottom",
	icon: "󱞩",
},
{
	title: "md-arrow_right_bottom_bold",
	icon: "󱞪",
},
{
	title: "md-arrow_right_box",
	icon: "󰛂",
},
{
	title: "md-arrow_right_circle",
	icon: "󰳟",
},
{
	title: "md-arrow_right_circle_outline",
	icon: "󰳠",
},
{
	title: "md-arrow_right_drop_circle",
	icon: "󰁙",
},
{
	title: "md-arrow_right_drop_circle_outline",
	icon: "󰁚",
},
{
	title: "md-arrow_right_thick",
	icon: "󰁕",
},
{
	title: "md-arrow_right_thin",
	icon: "󱦰",
},
{
	title: "md-arrow_right_thin_circle_outline",
	icon: "󱖘",
},
{
	title: "md-arrow_right_top",
	icon: "󱞫",
},
{
	title: "md-arrow_right_top_bold",
	icon: "󱞬",
},
{
	title: "md-arrow_split_horizontal",
	icon: "󰤻",
},
{
	title: "md-arrow_split_vertical",
	icon: "󰤼",
},
{
	title: "md-arrow_top_left",
	icon: "󰁛",
},
{
	title: "md-arrow_top_left_bold_box",
	icon: "󱥨",
},
{
	title: "md-arrow_top_left_bold_box_outline",
	icon: "󱥩",
},
{
	title: "md-arrow_top_left_bold_outline",
	icon: "󰧃",
},
{
	title: "md-arrow_top_left_bottom_right",
	icon: "󰹵",
},
{
	title: "md-arrow_top_left_bottom_right_bold",
	icon: "󰹶",
},
{
	title: "md-arrow_top_left_thick",
	icon: "󰧄",
},
{
	title: "md-arrow_top_left_thin",
	icon: "󱦵",
},
{
	title: "md-arrow_top_left_thin_circle_outline",
	icon: "󱖓",
},
{
	title: "md-arrow_top_right",
	icon: "󰁜",
},
{
	title: "md-arrow_top_right_bold_box",
	icon: "󱥪",
},
{
	title: "md-arrow_top_right_bold_box_outline",
	icon: "󱥫",
},
{
	title: "md-arrow_top_right_bold_outline",
	icon: "󰧅",
},
{
	title: "md-arrow_top_right_bottom_left",
	icon: "󰹷",
},
{
	title: "md-arrow_top_right_bottom_left_bold",
	icon: "󰹸",
},
{
	title: "md-arrow_top_right_thick",
	icon: "󰧆",
},
{
	title: "md-arrow_top_right_thin",
	icon: "󱦴",
},
{
	title: "md-arrow_top_right_thin_circle_outline",
	icon: "󱖔",
},
{
	title: "md-arrow_u_down_left",
	icon: "󱞭",
},
{
	title: "md-arrow_u_down_left_bold",
	icon: "󱞮",
},
{
	title: "md-arrow_u_down_right",
	icon: "󱞯",
},
{
	title: "md-arrow_u_down_right_bold",
	icon: "󱞰",
},
{
	title: "md-arrow_u_left_bottom",
	icon: "󱞱",
},
{
	title: "md-arrow_u_left_bottom_bold",
	icon: "󱞲",
},
{
	title: "md-arrow_u_left_top",
	icon: "󱞳",
},
{
	title: "md-arrow_u_left_top_bold",
	icon: "󱞴",
},
{
	title: "md-arrow_u_right_bottom",
	icon: "󱞵",
},
{
	title: "md-arrow_u_right_bottom_bold",
	icon: "󱞶",
},
{
	title: "md-arrow_u_right_top",
	icon: "󱞷",
},
{
	title: "md-arrow_u_right_top_bold",
	icon: "󱞸",
},
{
	title: "md-arrow_u_up_left",
	icon: "󱞹",
},
{
	title: "md-arrow_u_up_left_bold",
	icon: "󱞺",
},
{
	title: "md-arrow_u_up_right",
	icon: "󱞻",
},
{
	title: "md-arrow_u_up_right_bold",
	icon: "󱞼",
},
{
	title: "md-arrow_up",
	icon: "󰁝",
},
{
	title: "md-arrow_up_bold",
	icon: "󰜷",
},
{
	title: "md-arrow_up_bold_box",
	icon: "󰜸",
},
{
	title: "md-arrow_up_bold_box_outline",
	icon: "󰜹",
},
{
	title: "md-arrow_up_bold_circle",
	icon: "󰁟",
},
{
	title: "md-arrow_up_bold_circle_outline",
	icon: "󰁠",
},
{
	title: "md-arrow_up_bold_hexagon_outline",
	icon: "󰁡",
},
{
	title: "md-arrow_up_bold_outline",
	icon: "󰧇",
},
{
	title: "md-arrow_up_box",
	icon: "󰛃",
},
{
	title: "md-arrow_up_circle",
	icon: "󰳡",
},
{
	title: "md-arrow_up_circle_outline",
	icon: "󰳢",
},
{
	title: "md-arrow_up_down",
	icon: "󰹹",
},
{
	title: "md-arrow_up_down_bold",
	icon: "󰹺",
},
{
	title: "md-arrow_up_down_bold_outline",
	icon: "󰧈",
},
{
	title: "md-arrow_up_drop_circle",
	icon: "󰁢",
},
{
	title: "md-arrow_up_drop_circle_outline",
	icon: "󰁣",
},
{
	title: "md-arrow_up_left",
	icon: "󱞽",
},
{
	title: "md-arrow_up_left_bold",
	icon: "󱞾",
},
{
	title: "md-arrow_up_right",
	icon: "󱞿",
},
{
	title: "md-arrow_up_right_bold",
	icon: "󱟀",
},
{
	title: "md-arrow_up_thick",
	icon: "󰁞",
},
{
	title: "md-arrow_up_thin",
	icon: "󱦲",
},
{
	title: "md-arrow_up_thin_circle_outline",
	icon: "󱖗",
},
{
	title: "md-arrow_vertical_lock",
	icon: "󱅜",
},
{
	title: "md-artstation",
	icon: "󰭛",
},
{
	title: "md-aspect_ratio",
	icon: "󰨤",
},
{
	title: "md-assistant",
	icon: "󰁤",
},
{
	title: "md-asterisk",
	icon: "󰛄",
},
{
	title: "md-asterisk_circle_outline",
	icon: "󱨧",
},
{
	title: "md-at",
	icon: "󰁥",
},
{
	title: "md-atlassian",
	icon: "󰠄",
},
{
	title: "md-atm",
	icon: "󰵇",
},
{
	title: "md-atom",
	icon: "󰝨",
},
{
	title: "md-atom_variant",
	icon: "󰹻",
},
{
	title: "md-attachment",
	icon: "󰁦",
},
{
	title: "md-attachment_check",
	icon: "󱫁",
},
{
	title: "md-attachment_lock",
	icon: "󱧄",
},
{
	title: "md-attachment_minus",
	icon: "󱫂",
},
{
	title: "md-attachment_off",
	icon: "󱫃",
},
{
	title: "md-attachment_plus",
	icon: "󱫄",
},
{
	title: "md-attachment_remove",
	icon: "󱫅",
},
{
	title: "md-audio_input_rca",
	icon: "󱡫",
},
{
	title: "md-audio_input_stereo_minijack",
	icon: "󱡬",
},
{
	title: "md-audio_input_xlr",
	icon: "󱡭",
},
{
	title: "md-audio_video",
	icon: "󰤽",
},
{
	title: "md-audio_video_off",
	icon: "󱆶",
},
{
	title: "md-augmented_reality",
	icon: "󰡐",
},
{
	title: "md-auto_download",
	icon: "󱍾",
},
{
	title: "md-auto_fix",
	icon: "󰁨",
},
{
	title: "md-auto_upload",
	icon: "󰁩",
},
{
	title: "md-autorenew",
	icon: "󰁪",
},
{
	title: "md-autorenew_off",
	icon: "󱧧",
},
{
	title: "md-av_timer",
	icon: "󰁫",
},
{
	title: "md-aws",
	icon: "󰸏",
},
{
	title: "md-axe",
	icon: "󰣈",
},
{
	title: "md-axe_battle",
	icon: "󱡂",
},
{
	title: "md-axis",
	icon: "󰵈",
},
{
	title: "md-axis_arrow",
	icon: "󰵉",
},
{
	title: "md-axis_arrow_info",
	icon: "󱐎",
},
{
	title: "md-axis_arrow_lock",
	icon: "󰵊",
},
{
	title: "md-axis_lock",
	icon: "󰵋",
},
{
	title: "md-axis_x_arrow",
	icon: "󰵌",
},
{
	title: "md-axis_x_arrow_lock",
	icon: "󰵍",
},
{
	title: "md-axis_x_rotate_clockwise",
	icon: "󰵎",
},
{
	title: "md-axis_x_rotate_counterclockwise",
	icon: "󰵏",
},
{
	title: "md-axis_x_y_arrow_lock",
	icon: "󰵐",
},
{
	title: "md-axis_y_arrow",
	icon: "󰵑",
},
{
	title: "md-axis_y_arrow_lock",
	icon: "󰵒",
},
{
	title: "md-axis_y_rotate_clockwise",
	icon: "󰵓",
},
{
	title: "md-axis_y_rotate_counterclockwise",
	icon: "󰵔",
},
{
	title: "md-axis_z_arrow",
	icon: "󰵕",
},
{
	title: "md-axis_z_arrow_lock",
	icon: "󰵖",
},
{
	title: "md-axis_z_rotate_clockwise",
	icon: "󰵗",
},
{
	title: "md-axis_z_rotate_counterclockwise",
	icon: "󰵘",
},
{
	title: "md-babel",
	icon: "󰨥",
},
{
	title: "md-baby",
	icon: "󰁬",
},
{
	title: "md-baby_bottle",
	icon: "󰼹",
},
{
	title: "md-baby_bottle_outline",
	icon: "󰼺",
},
{
	title: "md-baby_buggy",
	icon: "󱏠",
},
{
	title: "md-baby_carriage",
	icon: "󰚏",
},
{
	title: "md-baby_carriage_off",
	icon: "󰾠",
},
{
	title: "md-baby_face",
	icon: "󰹼",
},
{
	title: "md-baby_face_outline",
	icon: "󰹽",
},
{
	title: "md-backburger",
	icon: "󰁭",
},
{
	title: "md-backspace",
	icon: "󰁮",
},
{
	title: "md-backspace_outline",
	icon: "󰭜",
},
{
	title: "md-backspace_reverse",
	icon: "󰹾",
},
{
	title: "md-backspace_reverse_outline",
	icon: "󰹿",
},
{
	title: "md-backup_restore",
	icon: "󰁯",
},
{
	title: "md-bacteria",
	icon: "󰻕",
},
{
	title: "md-bacteria_outline",
	icon: "󰻖",
},
{
	title: "md-badge_account",
	icon: "󰶧",
},
{
	title: "md-badge_account_alert",
	icon: "󰶨",
},
{
	title: "md-badge_account_alert_outline",
	icon: "󰶩",
},
{
	title: "md-badge_account_horizontal",
	icon: "󰸍",
},
{
	title: "md-badge_account_horizontal_outline",
	icon: "󰸎",
},
{
	title: "md-badge_account_outline",
	icon: "󰶪",
},
{
	title: "md-badminton",
	icon: "󰡑",
},
{
	title: "md-bag_carry_on",
	icon: "󰼻",
},
{
	title: "md-bag_carry_on_check",
	icon: "󰵥",
},
{
	title: "md-bag_carry_on_off",
	icon: "󰼼",
},
{
	title: "md-bag_checked",
	icon: "󰼽",
},
{
	title: "md-bag_personal",
	icon: "󰸐",
},
{
	title: "md-bag_personal_off",
	icon: "󰸑",
},
{
	title: "md-bag_personal_off_outline",
	icon: "󰸒",
},
{
	title: "md-bag_personal_outline",
	icon: "󰸓",
},
{
	title: "md-bag_suitcase",
	icon: "󱖋",
},
{
	title: "md-bag_suitcase_off",
	icon: "󱖍",
},
{
	title: "md-bag_suitcase_off_outline",
	icon: "󱖎",
},
{
	title: "md-bag_suitcase_outline",
	icon: "󱖌",
},
{
	title: "md-baguette",
	icon: "󰼾",
},
{
	title: "md-balcony",
	icon: "󱠗",
},
{
	title: "md-balloon",
	icon: "󰨦",
},
{
	title: "md-ballot",
	icon: "󰧉",
},
{
	title: "md-ballot_outline",
	icon: "󰧊",
},
{
	title: "md-ballot_recount",
	icon: "󰰹",
},
{
	title: "md-ballot_recount_outline",
	icon: "󰰺",
},
{
	title: "md-bandage",
	icon: "󰶯",
},
{
	title: "md-bank",
	icon: "󰁰",
},
{
	title: "md-bank_check",
	icon: "󱙕",
},
{
	title: "md-bank_minus",
	icon: "󰶰",
},
{
	title: "md-bank_off",
	icon: "󱙖",
},
{
	title: "md-bank_off_outline",
	icon: "󱙗",
},
{
	title: "md-bank_outline",
	icon: "󰺀",
},
{
	title: "md-bank_plus",
	icon: "󰶱",
},
{
	title: "md-bank_remove",
	icon: "󰶲",
},
{
	title: "md-bank_transfer",
	icon: "󰨧",
},
{
	title: "md-bank_transfer_in",
	icon: "󰨨",
},
{
	title: "md-bank_transfer_out",
	icon: "󰨩",
},
{
	title: "md-barcode",
	icon: "󰁱",
},
{
	title: "md-barcode_off",
	icon: "󱈶",
},
{
	title: "md-barcode_scan",
	icon: "󰁲",
},
{
	title: "md-barley",
	icon: "󰁳",
},
{
	title: "md-barley_off",
	icon: "󰭝",
},
{
	title: "md-barn",
	icon: "󰭞",
},
{
	title: "md-barrel",
	icon: "󰁴",
},
{
	title: "md-barrel_outline",
	icon: "󱨨",
},
{
	title: "md-baseball",
	icon: "󰡒",
},
{
	title: "md-baseball_bat",
	icon: "󰡓",
},
{
	title: "md-baseball_diamond",
	icon: "󱗬",
},
{
	title: "md-baseball_diamond_outline",
	icon: "󱗭",
},
{
	title: "md-bash",
	icon: "󱆃",
},
{
	title: "md-basket",
	icon: "󰁶",
},
{
	title: "md-basket_check",
	icon: "󱣥",
},
{
	title: "md-basket_check_outline",
	icon: "󱣦",
},
{
	title: "md-basket_fill",
	icon: "󰁷",
},
{
	title: "md-basket_minus",
	icon: "󱔣",
},
{
	title: "md-basket_minus_outline",
	icon: "󱔤",
},
{
	title: "md-basket_off",
	icon: "󱔥",
},
{
	title: "md-basket_off_outline",
	icon: "󱔦",
},
{
	title: "md-basket_outline",
	icon: "󱆁",
},
{
	title: "md-basket_plus",
	icon: "󱔧",
},
{
	title: "md-basket_plus_outline",
	icon: "󱔨",
},
{
	title: "md-basket_remove",
	icon: "󱔩",
},
{
	title: "md-basket_remove_outline",
	icon: "󱔪",
},
{
	title: "md-basket_unfill",
	icon: "󰁸",
},
{
	title: "md-basketball",
	icon: "󰠆",
},
{
	title: "md-basketball_hoop",
	icon: "󰰻",
},
{
	title: "md-basketball_hoop_outline",
	icon: "󰰼",
},
{
	title: "md-bat",
	icon: "󰭟",
},
{
	title: "md-bathtub",
	icon: "󱠘",
},
{
	title: "md-bathtub_outline",
	icon: "󱠙",
},
{
	title: "md-battery",
	icon: "󰁹",
},
{
	title: "md-battery_10",
	icon: "󰁺",
},
{
	title: "md-battery_10_bluetooth",
	icon: "󰤾",
},
{
	title: "md-battery_20",
	icon: "󰁻",
},
{
	title: "md-battery_20_bluetooth",
	icon: "󰤿",
},
{
	title: "md-battery_30",
	icon: "󰁼",
},
{
	title: "md-battery_30_bluetooth",
	icon: "󰥀",
},
{
	title: "md-battery_40",
	icon: "󰁽",
},
{
	title: "md-battery_40_bluetooth",
	icon: "󰥁",
},
{
	title: "md-battery_50",
	icon: "󰁾",
},
{
	title: "md-battery_50_bluetooth",
	icon: "󰥂",
},
{
	title: "md-battery_60",
	icon: "󰁿",
},
{
	title: "md-battery_60_bluetooth",
	icon: "󰥃",
},
{
	title: "md-battery_70",
	icon: "󰂀",
},
{
	title: "md-battery_70_bluetooth",
	icon: "󰥄",
},
{
	title: "md-battery_80",
	icon: "󰂁",
},
{
	title: "md-battery_80_bluetooth",
	icon: "󰥅",
},
{
	title: "md-battery_90",
	icon: "󰂂",
},
{
	title: "md-battery_90_bluetooth",
	icon: "󰥆",
},
{
	title: "md-battery_alert",
	icon: "󰂃",
},
{
	title: "md-battery_alert_bluetooth",
	icon: "󰥇",
},
{
	title: "md-battery_alert_variant",
	icon: "󱃌",
},
{
	title: "md-battery_alert_variant_outline",
	icon: "󱃍",
},
{
	title: "md-battery_arrow_down",
	icon: "󱟞",
},
{
	title: "md-battery_arrow_down_outline",
	icon: "󱟟",
},
{
	title: "md-battery_arrow_up",
	icon: "󱟠",
},
{
	title: "md-battery_arrow_up_outline",
	icon: "󱟡",
},
{
	title: "md-battery_bluetooth",
	icon: "󰥈",
},
{
	title: "md-battery_bluetooth_variant",
	icon: "󰥉",
},
{
	title: "md-battery_charging",
	icon: "󰂄",
},
{
	title: "md-battery_charging_10",
	icon: "󰢜",
},
{
	title: "md-battery_charging_100",
	icon: "󰂅",
},
{
	title: "md-battery_charging_20",
	icon: "󰂆",
},
{
	title: "md-battery_charging_30",
	icon: "󰂇",
},
{
	title: "md-battery_charging_40",
	icon: "󰂈",
},
{
	title: "md-battery_charging_50",
	icon: "󰢝",
},
{
	title: "md-battery_charging_60",
	icon: "󰂉",
},
{
	title: "md-battery_charging_70",
	icon: "󰢞",
},
{
	title: "md-battery_charging_80",
	icon: "󰂊",
},
{
	title: "md-battery_charging_90",
	icon: "󰂋",
},
{
	title: "md-battery_charging_high",
	icon: "󱊦",
},
{
	title: "md-battery_charging_low",
	icon: "󱊤",
},
{
	title: "md-battery_charging_medium",
	icon: "󱊥",
},
{
	title: "md-battery_charging_outline",
	icon: "󰢟",
},
{
	title: "md-battery_charging_wireless",
	icon: "󰠇",
},
{
	title: "md-battery_charging_wireless_10",
	icon: "󰠈",
},
{
	title: "md-battery_charging_wireless_20",
	icon: "󰠉",
},
{
	title: "md-battery_charging_wireless_30",
	icon: "󰠊",
},
{
	title: "md-battery_charging_wireless_40",
	icon: "󰠋",
},
{
	title: "md-battery_charging_wireless_50",
	icon: "󰠌",
},
{
	title: "md-battery_charging_wireless_60",
	icon: "󰠍",
},
{
	title: "md-battery_charging_wireless_70",
	icon: "󰠎",
},
{
	title: "md-battery_charging_wireless_80",
	icon: "󰠏",
},
{
	title: "md-battery_charging_wireless_90",
	icon: "󰠐",
},
{
	title: "md-battery_charging_wireless_alert",
	icon: "󰠑",
},
{
	title: "md-battery_charging_wireless_outline",
	icon: "󰠒",
},
{
	title: "md-battery_check",
	icon: "󱟢",
},
{
	title: "md-battery_check_outline",
	icon: "󱟣",
},
{
	title: "md-battery_clock",
	icon: "󱧥",
},
{
	title: "md-battery_clock_outline",
	icon: "󱧦",
},
{
	title: "md-battery_heart",
	icon: "󱈏",
},
{
	title: "md-battery_heart_outline",
	icon: "󱈐",
},
{
	title: "md-battery_heart_variant",
	icon: "󱈑",
},
{
	title: "md-battery_high",
	icon: "󱊣",
},
{
	title: "md-battery_lock",
	icon: "󱞜",
},
{
	title: "md-battery_lock_open",
	icon: "󱞝",
},
{
	title: "md-battery_low",
	icon: "󱊡",
},
{
	title: "md-battery_medium",
	icon: "󱊢",
},
{
	title: "md-battery_minus",
	icon: "󱟤",
},
{
	title: "md-battery_minus_outline",
	icon: "󱟥",
},
{
	title: "md-battery_minus_variant",
	icon: "󰂌",
},
{
	title: "md-battery_negative",
	icon: "󰂍",
},
{
	title: "md-battery_off",
	icon: "󱉝",
},
{
	title: "md-battery_off_outline",
	icon: "󱉞",
},
{
	title: "md-battery_outline",
	icon: "󰂎",
},
{
	title: "md-battery_plus",
	icon: "󱟦",
},
{
	title: "md-battery_plus_outline",
	icon: "󱟧",
},
{
	title: "md-battery_plus_variant",
	icon: "󰂏",
},
{
	title: "md-battery_positive",
	icon: "󰂐",
},
{
	title: "md-battery_remove",
	icon: "󱟨",
},
{
	title: "md-battery_remove_outline",
	icon: "󱟩",
},
{
	title: "md-battery_sync",
	icon: "󱠴",
},
{
	title: "md-battery_sync_outline",
	icon: "󱠵",
},
{
	title: "md-battery_unknown",
	icon: "󰂑",
},
{
	title: "md-battery_unknown_bluetooth",
	icon: "󰥊",
},
{
	title: "md-beach",
	icon: "󰂒",
},
{
	title: "md-beaker",
	icon: "󰳪",
},
{
	title: "md-beaker_alert",
	icon: "󱈩",
},
{
	title: "md-beaker_alert_outline",
	icon: "󱈪",
},
{
	title: "md-beaker_check",
	icon: "󱈫",
},
{
	title: "md-beaker_check_outline",
	icon: "󱈬",
},
{
	title: "md-beaker_minus",
	icon: "󱈭",
},
{
	title: "md-beaker_minus_outline",
	icon: "󱈮",
},
{
	title: "md-beaker_outline",
	icon: "󰚐",
},
{
	title: "md-beaker_plus",
	icon: "󱈯",
},
{
	title: "md-beaker_plus_outline",
	icon: "󱈰",
},
{
	title: "md-beaker_question",
	icon: "󱈱",
},
{
	title: "md-beaker_question_outline",
	icon: "󱈲",
},
{
	title: "md-beaker_remove",
	icon: "󱈳",
},
{
	title: "md-beaker_remove_outline",
	icon: "󱈴",
},
{
	title: "md-bed",
	icon: "󰋣",
},
{
	title: "md-bed_double",
	icon: "󰿔",
},
{
	title: "md-bed_double_outline",
	icon: "󰿓",
},
{
	title: "md-bed_empty",
	icon: "󰢠",
},
{
	title: "md-bed_king",
	icon: "󰿒",
},
{
	title: "md-bed_king_outline",
	icon: "󰿑",
},
{
	title: "md-bed_outline",
	icon: "󰂙",
},
{
	title: "md-bed_queen",
	icon: "󰿐",
},
{
	title: "md-bed_queen_outline",
	icon: "󰿛",
},
{
	title: "md-bed_single",
	icon: "󱁭",
},
{
	title: "md-bed_single_outline",
	icon: "󱁮",
},
{
	title: "md-bee",
	icon: "󰾡",
},
{
	title: "md-bee_flower",
	icon: "󰾢",
},
{
	title: "md-beehive_off_outline",
	icon: "󱏭",
},
{
	title: "md-beehive_outline",
	icon: "󱃎",
},
{
	title: "md-beekeeper",
	icon: "󱓢",
},
{
	title: "md-beer",
	icon: "󰂘",
},
{
	title: "md-beer_outline",
	icon: "󱌌",
},
{
	title: "md-bell",
	icon: "󰂚",
},
{
	title: "md-bell_alert",
	icon: "󰵙",
},
{
	title: "md-bell_alert_outline",
	icon: "󰺁",
},
{
	title: "md-bell_badge",
	icon: "󱅫",
},
{
	title: "md-bell_badge_outline",
	icon: "󰅸",
},
{
	title: "md-bell_cancel",
	icon: "󱏧",
},
{
	title: "md-bell_cancel_outline",
	icon: "󱏨",
},
{
	title: "md-bell_check",
	icon: "󱇥",
},
{
	title: "md-bell_check_outline",
	icon: "󱇦",
},
{
	title: "md-bell_circle",
	icon: "󰵚",
},
{
	title: "md-bell_circle_outline",
	icon: "󰵛",
},
{
	title: "md-bell_cog",
	icon: "󱨩",
},
{
	title: "md-bell_cog_outline",
	icon: "󱨪",
},
{
	title: "md-bell_minus",
	icon: "󱏩",
},
{
	title: "md-bell_minus_outline",
	icon: "󱏪",
},
{
	title: "md-bell_off",
	icon: "󰂛",
},
{
	title: "md-bell_off_outline",
	icon: "󰪑",
},
{
	title: "md-bell_outline",
	icon: "󰂜",
},
{
	title: "md-bell_plus",
	icon: "󰂝",
},
{
	title: "md-bell_plus_outline",
	icon: "󰪒",
},
{
	title: "md-bell_remove",
	icon: "󱏫",
},
{
	title: "md-bell_remove_outline",
	icon: "󱏬",
},
{
	title: "md-bell_ring",
	icon: "󰂞",
},
{
	title: "md-bell_ring_outline",
	icon: "󰂟",
},
{
	title: "md-bell_sleep",
	icon: "󰂠",
},
{
	title: "md-bell_sleep_outline",
	icon: "󰪓",
},
{
	title: "md-beta",
	icon: "󰂡",
},
{
	title: "md-betamax",
	icon: "󰧋",
},
{
	title: "md-biathlon",
	icon: "󰸔",
},
{
	title: "md-bicycle",
	icon: "󱂜",
},
{
	title: "md-bicycle_basket",
	icon: "󱈵",
},
{
	title: "md-bicycle_cargo",
	icon: "󱢜",
},
{
	title: "md-bicycle_electric",
	icon: "󱖴",
},
{
	title: "md-bicycle_penny_farthing",
	icon: "󱗩",
},
{
	title: "md-bike",
	icon: "󰂣",
},
{
	title: "md-bike_fast",
	icon: "󱄟",
},
{
	title: "md-billboard",
	icon: "󱀐",
},
{
	title: "md-billiards",
	icon: "󰭡",
},
{
	title: "md-billiards_rack",
	icon: "󰭢",
},
{
	title: "md-binoculars",
	icon: "󰂥",
},
{
	title: "md-bio",
	icon: "󰂦",
},
{
	title: "md-biohazard",
	icon: "󰂧",
},
{
	title: "md-bird",
	icon: "󱗆",
},
{
	title: "md-bitbucket",
	icon: "󰂨",
},
{
	title: "md-bitcoin",
	icon: "󰠓",
},
{
	title: "md-black_mesa",
	icon: "󰂩",
},
{
	title: "md-blender",
	icon: "󰳫",
},
{
	title: "md-blender_outline",
	icon: "󱠚",
},
{
	title: "md-blender_software",
	icon: "󰂫",
},
{
	title: "md-blinds",
	icon: "󰂬",
},
{
	title: "md-blinds_horizontal",
	icon: "󱨫",
},
{
	title: "md-blinds_horizontal_closed",
	icon: "󱨬",
},
{
	title: "md-blinds_open",
	icon: "󱀑",
},
{
	title: "md-blinds_vertical",
	icon: "󱨭",
},
{
	title: "md-blinds_vertical_closed",
	icon: "󱨮",
},
{
	title: "md-block_helper",
	icon: "󰂭",
},
{
	title: "md-blood_bag",
	icon: "󰳬",
},
{
	title: "md-bluetooth",
	icon: "󰂯",
},
{
	title: "md-bluetooth_audio",
	icon: "󰂰",
},
{
	title: "md-bluetooth_connect",
	icon: "󰂱",
},
{
	title: "md-bluetooth_off",
	icon: "󰂲",
},
{
	title: "md-bluetooth_settings",
	icon: "󰂳",
},
{
	title: "md-bluetooth_transfer",
	icon: "󰂴",
},
{
	title: "md-blur",
	icon: "󰂵",
},
{
	title: "md-blur_linear",
	icon: "󰂶",
},
{
	title: "md-blur_off",
	icon: "󰂷",
},
{
	title: "md-blur_radial",
	icon: "󰂸",
},
{
	title: "md-bolt",
	icon: "󰶳",
},
{
	title: "md-bomb",
	icon: "󰚑",
},
{
	title: "md-bomb_off",
	icon: "󰛅",
},
{
	title: "md-bone",
	icon: "󰂹",
},
{
	title: "md-bone_off",
	icon: "󱧠",
},
{
	title: "md-book",
	icon: "󰂺",
},
{
	title: "md-book_account",
	icon: "󱎭",
},
{
	title: "md-book_account_outline",
	icon: "󱎮",
},
{
	title: "md-book_alert",
	icon: "󱙼",
},
{
	title: "md-book_alert_outline",
	icon: "󱙽",
},
{
	title: "md-book_alphabet",
	icon: "󰘝",
},
{
	title: "md-book_arrow_down",
	icon: "󱙾",
},
{
	title: "md-book_arrow_down_outline",
	icon: "󱙿",
},
{
	title: "md-book_arrow_left",
	icon: "󱚀",
},
{
	title: "md-book_arrow_left_outline",
	icon: "󱚁",
},
{
	title: "md-book_arrow_right",
	icon: "󱚂",
},
{
	title: "md-book_arrow_right_outline",
	icon: "󱚃",
},
{
	title: "md-book_arrow_up",
	icon: "󱚄",
},
{
	title: "md-book_arrow_up_outline",
	icon: "󱚅",
},
{
	title: "md-book_cancel",
	icon: "󱚆",
},
{
	title: "md-book_cancel_outline",
	icon: "󱚇",
},
{
	title: "md-book_check",
	icon: "󱓳",
},
{
	title: "md-book_check_outline",
	icon: "󱓴",
},
{
	title: "md-book_clock",
	icon: "󱚈",
},
{
	title: "md-book_clock_outline",
	icon: "󱚉",
},
{
	title: "md-book_cog",
	icon: "󱚊",
},
{
	title: "md-book_cog_outline",
	icon: "󱚋",
},
{
	title: "md-book_cross",
	icon: "󰂢",
},
{
	title: "md-book_edit",
	icon: "󱚌",
},
{
	title: "md-book_edit_outline",
	icon: "󱚍",
},
{
	title: "md-book_education",
	icon: "󱛉",
},
{
	title: "md-book_education_outline",
	icon: "󱛊",
},
{
	title: "md-book_heart",
	icon: "󱨝",
},
{
	title: "md-book_heart_outline",
	icon: "󱨞",
},
{
	title: "md-book_information_variant",
	icon: "󱁯",
},
{
	title: "md-book_lock",
	icon: "󰞚",
},
{
	title: "md-book_lock_open",
	icon: "󰞛",
},
{
	title: "md-book_lock_open_outline",
	icon: "󱚎",
},
{
	title: "md-book_lock_outline",
	icon: "󱚏",
},
{
	title: "md-book_marker",
	icon: "󱚐",
},
{
	title: "md-book_marker_outline",
	icon: "󱚑",
},
{
	title: "md-book_minus",
	icon: "󰗙",
},
{
	title: "md-book_minus_multiple",
	icon: "󰪔",
},
{
	title: "md-book_minus_multiple_outline",
	icon: "󰤋",
},
{
	title: "md-book_minus_outline",
	icon: "󱚒",
},
{
	title: "md-book_multiple",
	icon: "󰂻",
},
{
	title: "md-book_multiple_outline",
	icon: "󰐶",
},
{
	title: "md-book_music",
	icon: "󰁧",
},
{
	title: "md-book_music_outline",
	icon: "󱚓",
},
{
	title: "md-book_off",
	icon: "󱚔",
},
{
	title: "md-book_off_outline",
	icon: "󱚕",
},
{
	title: "md-book_open",
	icon: "󰂽",
},
{
	title: "md-book_open_blank_variant",
	icon: "󰂾",
},
{
	title: "md-book_open_outline",
	icon: "󰭣",
},
{
	title: "md-book_open_page_variant",
	icon: "󰗚",
},
{
	title: "md-book_open_page_variant_outline",
	icon: "󱗖",
},
{
	title: "md-book_open_variant",
	icon: "󱓷",
},
{
	title: "md-book_outline",
	icon: "󰭤",
},
{
	title: "md-book_play",
	icon: "󰺂",
},
{
	title: "md-book_play_outline",
	icon: "󰺃",
},
{
	title: "md-book_plus",
	icon: "󰗛",
},
{
	title: "md-book_plus_multiple",
	icon: "󰪕",
},
{
	title: "md-book_plus_multiple_outline",
	icon: "󰫞",
},
{
	title: "md-book_plus_outline",
	icon: "󱚖",
},
{
	title: "md-book_refresh",
	icon: "󱚗",
},
{
	title: "md-book_refresh_outline",
	icon: "󱚘",
},
{
	title: "md-book_remove",
	icon: "󰪗",
},
{
	title: "md-book_remove_multiple",
	icon: "󰪖",
},
{
	title: "md-book_remove_multiple_outline",
	icon: "󰓊",
},
{
	title: "md-book_remove_outline",
	icon: "󱚙",
},
{
	title: "md-book_search",
	icon: "󰺄",
},
{
	title: "md-book_search_outline",
	icon: "󰺅",
},
{
	title: "md-book_settings",
	icon: "󱚚",
},
{
	title: "md-book_settings_outline",
	icon: "󱚛",
},
{
	title: "md-book_sync",
	icon: "󱚜",
},
{
	title: "md-book_sync_outline",
	icon: "󱛈",
},
{
	title: "md-book_variant",
	icon: "󰂿",
},
{
	title: "md-book_variant_multiple",
	icon: "󰂼",
},
{
	title: "md-bookmark",
	icon: "󰃀",
},
{
	title: "md-bookmark_box_multiple",
	icon: "󱥬",
},
{
	title: "md-bookmark_box_multiple_outline",
	icon: "󱥭",
},
{
	title: "md-bookmark_check",
	icon: "󰃁",
},
{
	title: "md-bookmark_check_outline",
	icon: "󱍻",
},
{
	title: "md-bookmark_minus",
	icon: "󰧌",
},
{
	title: "md-bookmark_minus_outline",
	icon: "󰧍",
},
{
	title: "md-bookmark_multiple",
	icon: "󰸕",
},
{
	title: "md-bookmark_multiple_outline",
	icon: "󰸖",
},
{
	title: "md-bookmark_music",
	icon: "󰃂",
},
{
	title: "md-bookmark_music_outline",
	icon: "󱍹",
},
{
	title: "md-bookmark_off",
	icon: "󰧎",
},
{
	title: "md-bookmark_off_outline",
	icon: "󰧏",
},
{
	title: "md-bookmark_outline",
	icon: "󰃃",
},
{
	title: "md-bookmark_plus",
	icon: "󰃅",
},
{
	title: "md-bookmark_plus_outline",
	icon: "󰃄",
},
{
	title: "md-bookmark_remove",
	icon: "󰃆",
},
{
	title: "md-bookmark_remove_outline",
	icon: "󱍺",
},
{
	title: "md-bookshelf",
	icon: "󱉟",
},
{
	title: "md-boom_gate",
	icon: "󰺆",
},
{
	title: "md-boom_gate_alert",
	icon: "󰺇",
},
{
	title: "md-boom_gate_alert_outline",
	icon: "󰺈",
},
{
	title: "md-boom_gate_arrow_down",
	icon: "󰺉",
},
{
	title: "md-boom_gate_arrow_down_outline",
	icon: "󰺊",
},
{
	title: "md-boom_gate_arrow_up",
	icon: "󰺌",
},
{
	title: "md-boom_gate_arrow_up_outline",
	icon: "󰺍",
},
{
	title: "md-boom_gate_outline",
	icon: "󰺋",
},
{
	title: "md-boom_gate_up",
	icon: "󱟹",
},
{
	title: "md-boom_gate_up_outline",
	icon: "󱟺",
},
{
	title: "md-boombox",
	icon: "󰗜",
},
{
	title: "md-boomerang",
	icon: "󱃏",
},
{
	title: "md-bootstrap",
	icon: "󰛆",
},
{
	title: "md-border_all",
	icon: "󰃇",
},
{
	title: "md-border_all_variant",
	icon: "󰢡",
},
{
	title: "md-border_bottom",
	icon: "󰃈",
},
{
	title: "md-border_bottom_variant",
	icon: "󰢢",
},
{
	title: "md-border_color",
	icon: "󰃉",
},
{
	title: "md-border_horizontal",
	icon: "󰃊",
},
{
	title: "md-border_inside",
	icon: "󰃋",
},
{
	title: "md-border_left",
	icon: "󰃌",
},
{
	title: "md-border_left_variant",
	icon: "󰢣",
},
{
	title: "md-border_none",
	icon: "󰃍",
},
{
	title: "md-border_none_variant",
	icon: "󰢤",
},
{
	title: "md-border_outside",
	icon: "󰃎",
},
{
	title: "md-border_right",
	icon: "󰃏",
},
{
	title: "md-border_right_variant",
	icon: "󰢥",
},
{
	title: "md-border_style",
	icon: "󰃐",
},
{
	title: "md-border_top",
	icon: "󰃑",
},
{
	title: "md-border_top_variant",
	icon: "󰢦",
},
{
	title: "md-border_vertical",
	icon: "󰃒",
},
{
	title: "md-bottle_soda",
	icon: "󱁰",
},
{
	title: "md-bottle_soda_classic",
	icon: "󱁱",
},
{
	title: "md-bottle_soda_classic_outline",
	icon: "󱍣",
},
{
	title: "md-bottle_soda_outline",
	icon: "󱁲",
},
{
	title: "md-bottle_tonic",
	icon: "󱄮",
},
{
	title: "md-bottle_tonic_outline",
	icon: "󱄯",
},
{
	title: "md-bottle_tonic_plus",
	icon: "󱄰",
},
{
	title: "md-bottle_tonic_plus_outline",
	icon: "󱄱",
},
{
	title: "md-bottle_tonic_skull",
	icon: "󱄲",
},
{
	title: "md-bottle_tonic_skull_outline",
	icon: "󱄳",
},
{
	title: "md-bottle_wine",
	icon: "󰡔",
},
{
	title: "md-bottle_wine_outline",
	icon: "󱌐",
},
{
	title: "md-bow_arrow",
	icon: "󱡁",
},
{
	title: "md-bow_tie",
	icon: "󰙸",
},
{
	title: "md-bowl",
	icon: "󰊎",
},
{
	title: "md-bowl_mix",
	icon: "󰘗",
},
{
	title: "md-bowl_mix_outline",
	icon: "󰋤",
},
{
	title: "md-bowl_outline",
	icon: "󰊩",
},
{
	title: "md-bowling",
	icon: "󰃓",
},
{
	title: "md-box",
	icon: "󰃔",
},
{
	title: "md-box_cutter",
	icon: "󰃕",
},
{
	title: "md-box_cutter_off",
	icon: "󰭊",
},
{
	title: "md-box_shadow",
	icon: "󰘷",
},
{
	title: "md-boxing_glove",
	icon: "󰭥",
},
{
	title: "md-braille",
	icon: "󰧐",
},
{
	title: "md-brain",
	icon: "󰧑",
},
{
	title: "md-bread_slice",
	icon: "󰳮",
},
{
	title: "md-bread_slice_outline",
	icon: "󰳯",
},
{
	title: "md-bridge",
	icon: "󰘘",
},
{
	title: "md-briefcase",
	icon: "󰃖",
},
{
	title: "md-briefcase_account",
	icon: "󰳰",
},
{
	title: "md-briefcase_account_outline",
	icon: "󰳱",
},
{
	title: "md-briefcase_arrow_left_right",
	icon: "󱪍",
},
{
	title: "md-briefcase_arrow_left_right_outline",
	icon: "󱪎",
},
{
	title: "md-briefcase_arrow_up_down",
	icon: "󱪏",
},
{
	title: "md-briefcase_arrow_up_down_outline",
	icon: "󱪐",
},
{
	title: "md-briefcase_check",
	icon: "󰃗",
},
{
	title: "md-briefcase_check_outline",
	icon: "󱌞",
},
{
	title: "md-briefcase_clock",
	icon: "󱃐",
},
{
	title: "md-briefcase_clock_outline",
	icon: "󱃑",
},
{
	title: "md-briefcase_download",
	icon: "󰃘",
},
{
	title: "md-briefcase_download_outline",
	icon: "󰰽",
},
{
	title: "md-briefcase_edit",
	icon: "󰪘",
},
{
	title: "md-briefcase_edit_outline",
	icon: "󰰾",
},
{
	title: "md-briefcase_eye",
	icon: "󱟙",
},
{
	title: "md-briefcase_eye_outline",
	icon: "󱟚",
},
{
	title: "md-briefcase_minus",
	icon: "󰨪",
},
{
	title: "md-briefcase_minus_outline",
	icon: "󰰿",
},
{
	title: "md-briefcase_off",
	icon: "󱙘",
},
{
	title: "md-briefcase_off_outline",
	icon: "󱙙",
},
{
	title: "md-briefcase_outline",
	icon: "󰠔",
},
{
	title: "md-briefcase_plus",
	icon: "󰨫",
},
{
	title: "md-briefcase_plus_outline",
	icon: "󰱀",
},
{
	title: "md-briefcase_remove",
	icon: "󰨬",
},
{
	title: "md-briefcase_remove_outline",
	icon: "󰱁",
},
{
	title: "md-briefcase_search",
	icon: "󰨭",
},
{
	title: "md-briefcase_search_outline",
	icon: "󰱂",
},
{
	title: "md-briefcase_upload",
	icon: "󰃙",
},
{
	title: "md-briefcase_upload_outline",
	icon: "󰱃",
},
{
	title: "md-briefcase_variant",
	icon: "󱒔",
},
{
	title: "md-briefcase_variant_off",
	icon: "󱙚",
},
{
	title: "md-briefcase_variant_off_outline",
	icon: "󱙛",
},
{
	title: "md-briefcase_variant_outline",
	icon: "󱒕",
},
{
	title: "md-brightness_1",
	icon: "󰃚",
},
{
	title: "md-brightness_2",
	icon: "󰃛",
},
{
	title: "md-brightness_3",
	icon: "󰃜",
},
{
	title: "md-brightness_4",
	icon: "󰃝",
},
{
	title: "md-brightness_5",
	icon: "󰃞",
},
{
	title: "md-brightness_6",
	icon: "󰃟",
},
{
	title: "md-brightness_7",
	icon: "󰃠",
},
{
	title: "md-brightness_auto",
	icon: "󰃡",
},
{
	title: "md-brightness_percent",
	icon: "󰳲",
},
{
	title: "md-broadcast",
	icon: "󱜠",
},
{
	title: "md-broadcast_off",
	icon: "󱜡",
},
{
	title: "md-broom",
	icon: "󰃢",
},
{
	title: "md-brush",
	icon: "󰃣",
},
{
	title: "md-brush_off",
	icon: "󱝱",
},
{
	title: "md-brush_outline",
	icon: "󱨍",
},
{
	title: "md-brush_variant",
	icon: "󱠓",
},
{
	title: "md-bucket",
	icon: "󱐕",
},
{
	title: "md-bucket_outline",
	icon: "󱐖",
},
{
	title: "md-buffet",
	icon: "󰕸",
},
{
	title: "md-bug",
	icon: "󰃤",
},
{
	title: "md-bug_check",
	icon: "󰨮",
},
{
	title: "md-bug_check_outline",
	icon: "󰨯",
},
{
	title: "md-bug_outline",
	icon: "󰨰",
},
{
	title: "md-bugle",
	icon: "󰶴",
},
{
	title: "md-bulkhead_light",
	icon: "󱨯",
},
{
	title: "md-bulldozer",
	icon: "󰬢",
},
{
	title: "md-bullet",
	icon: "󰳳",
},
{
	title: "md-bulletin_board",
	icon: "󰃥",
},
{
	title: "md-bullhorn",
	icon: "󰃦",
},
{
	title: "md-bullhorn_outline",
	icon: "󰬣",
},
{
	title: "md-bullhorn_variant",
	icon: "󱥮",
},
{
	title: "md-bullhorn_variant_outline",
	icon: "󱥯",
},
{
	title: "md-bullseye",
	icon: "󰗝",
},
{
	title: "md-bullseye_arrow",
	icon: "󰣉",
},
{
	title: "md-bulma",
	icon: "󱋧",
},
{
	title: "md-bunk_bed",
	icon: "󱌂",
},
{
	title: "md-bunk_bed_outline",
	icon: "󰂗",
},
{
	title: "md-bus",
	icon: "󰃧",
},
{
	title: "md-bus_alert",
	icon: "󰪙",
},
{
	title: "md-bus_articulated_end",
	icon: "󰞜",
},
{
	title: "md-bus_articulated_front",
	icon: "󰞝",
},
{
	title: "md-bus_clock",
	icon: "󰣊",
},
{
	title: "md-bus_double_decker",
	icon: "󰞞",
},
{
	title: "md-bus_electric",
	icon: "󱤝",
},
{
	title: "md-bus_marker",
	icon: "󱈒",
},
{
	title: "md-bus_multiple",
	icon: "󰼿",
},
{
	title: "md-bus_school",
	icon: "󰞟",
},
{
	title: "md-bus_side",
	icon: "󰞠",
},
{
	title: "md-bus_stop",
	icon: "󱀒",
},
{
	title: "md-bus_stop_covered",
	icon: "󱀓",
},
{
	title: "md-bus_stop_uncovered",
	icon: "󱀔",
},
{
	title: "md-butterfly",
	icon: "󱖉",
},
{
	title: "md-butterfly_outline",
	icon: "󱖊",
},
{
	title: "md-cabin_a_frame",
	icon: "󱢌",
},
{
	title: "md-cable_data",
	icon: "󱎔",
},
{
	title: "md-cached",
	icon: "󰃨",
},
{
	title: "md-cactus",
	icon: "󰶵",
},
{
	title: "md-cake",
	icon: "󰃩",
},
{
	title: "md-cake_layered",
	icon: "󰃪",
},
{
	title: "md-cake_variant",
	icon: "󰃫",
},
{
	title: "md-cake_variant_outline",
	icon: "󱟰",
},
{
	title: "md-calculator",
	icon: "󰃬",
},
{
	title: "md-calculator_variant",
	icon: "󰪚",
},
{
	title: "md-calculator_variant_outline",
	icon: "󱖦",
},
{
	title: "md-calendar",
	icon: "󰃭",
},
{
	title: "md-calendar_account",
	icon: "󰻗",
},
{
	title: "md-calendar_account_outline",
	icon: "󰻘",
},
{
	title: "md-calendar_alert",
	icon: "󰨱",
},
{
	title: "md-calendar_arrow_left",
	icon: "󱄴",
},
{
	title: "md-calendar_arrow_right",
	icon: "󱄵",
},
{
	title: "md-calendar_blank",
	icon: "󰃮",
},
{
	title: "md-calendar_blank_multiple",
	icon: "󱁳",
},
{
	title: "md-calendar_blank_outline",
	icon: "󰭦",
},
{
	title: "md-calendar_check",
	icon: "󰃯",
},
{
	title: "md-calendar_check_outline",
	icon: "󰱄",
},
{
	title: "md-calendar_clock",
	icon: "󰃰",
},
{
	title: "md-calendar_clock_outline",
	icon: "󱛡",
},
{
	title: "md-calendar_collapse_horizontal",
	icon: "󱢝",
},
{
	title: "md-calendar_cursor",
	icon: "󱕻",
},
{
	title: "md-calendar_edit",
	icon: "󰢧",
},
{
	title: "md-calendar_end",
	icon: "󱙬",
},
{
	title: "md-calendar_expand_horizontal",
	icon: "󱢞",
},
{
	title: "md-calendar_export",
	icon: "󰬤",
},
{
	title: "md-calendar_heart",
	icon: "󰧒",
},
{
	title: "md-calendar_import",
	icon: "󰬥",
},
{
	title: "md-calendar_lock",
	icon: "󱙁",
},
{
	title: "md-calendar_lock_outline",
	icon: "󱙂",
},
{
	title: "md-calendar_minus",
	icon: "󰵜",
},
{
	title: "md-calendar_month",
	icon: "󰸗",
},
{
	title: "md-calendar_month_outline",
	icon: "󰸘",
},
{
	title: "md-calendar_multiple",
	icon: "󰃱",
},
{
	title: "md-calendar_multiple_check",
	icon: "󰃲",
},
{
	title: "md-calendar_multiselect",
	icon: "󰨲",
},
{
	title: "md-calendar_outline",
	icon: "󰭧",
},
{
	title: "md-calendar_plus",
	icon: "󰃳",
},
{
	title: "md-calendar_question",
	icon: "󰚒",
},
{
	title: "md-calendar_range",
	icon: "󰙹",
},
{
	title: "md-calendar_range_outline",
	icon: "󰭨",
},
{
	title: "md-calendar_refresh",
	icon: "󰇡",
},
{
	title: "md-calendar_refresh_outline",
	icon: "󰈃",
},
{
	title: "md-calendar_remove",
	icon: "󰃴",
},
{
	title: "md-calendar_remove_outline",
	icon: "󰱅",
},
{
	title: "md-calendar_search",
	icon: "󰥌",
},
{
	title: "md-calendar_star",
	icon: "󰧓",
},
{
	title: "md-calendar_start",
	icon: "󱙭",
},
{
	title: "md-calendar_sync",
	icon: "󰺎",
},
{
	title: "md-calendar_sync_outline",
	icon: "󰺏",
},
{
	title: "md-calendar_text",
	icon: "󰃵",
},
{
	title: "md-calendar_text_outline",
	icon: "󰱆",
},
{
	title: "md-calendar_today",
	icon: "󰃶",
},
{
	title: "md-calendar_today_outline",
	icon: "󱨰",
},
{
	title: "md-calendar_week",
	icon: "󰨳",
},
{
	title: "md-calendar_week_begin",
	icon: "󰨴",
},
{
	title: "md-calendar_week_begin_outline",
	icon: "󱨱",
},
{
	title: "md-calendar_week_end",
	icon: "󱨲",
},
{
	title: "md-calendar_week_end_outline",
	icon: "󱨳",
},
{
	title: "md-calendar_week_outline",
	icon: "󱨴",
},
{
	title: "md-calendar_weekend",
	icon: "󰻙",
},
{
	title: "md-calendar_weekend_outline",
	icon: "󰻚",
},
{
	title: "md-call_made",
	icon: "󰃷",
},
{
	title: "md-call_merge",
	icon: "󰃸",
},
{
	title: "md-call_missed",
	icon: "󰃹",
},
{
	title: "md-call_received",
	icon: "󰃺",
},
{
	title: "md-call_split",
	icon: "󰃻",
},
{
	title: "md-camcorder",
	icon: "󰃼",
},
{
	title: "md-camcorder_off",
	icon: "󰃿",
},
{
	title: "md-camera",
	icon: "󰄀",
},
{
	title: "md-camera_account",
	icon: "󰣋",
},
{
	title: "md-camera_burst",
	icon: "󰚓",
},
{
	title: "md-camera_control",
	icon: "󰭩",
},
{
	title: "md-camera_document",
	icon: "󱡱",
},
{
	title: "md-camera_document_off",
	icon: "󱡲",
},
{
	title: "md-camera_enhance",
	icon: "󰄁",
},
{
	title: "md-camera_enhance_outline",
	icon: "󰭪",
},
{
	title: "md-camera_flip",
	icon: "󱗙",
},
{
	title: "md-camera_flip_outline",
	icon: "󱗚",
},
{
	title: "md-camera_front",
	icon: "󰄂",
},
{
	title: "md-camera_front_variant",
	icon: "󰄃",
},
{
	title: "md-camera_gopro",
	icon: "󰞡",
},
{
	title: "md-camera_image",
	icon: "󰣌",
},
{
	title: "md-camera_iris",
	icon: "󰄄",
},
{
	title: "md-camera_lock",
	icon: "󱨔",
},
{
	title: "md-camera_lock_outline",
	icon: "󱨕",
},
{
	title: "md-camera_marker",
	icon: "󱦧",
},
{
	title: "md-camera_marker_outline",
	icon: "󱦨",
},
{
	title: "md-camera_metering_center",
	icon: "󰞢",
},
{
	title: "md-camera_metering_matrix",
	icon: "󰞣",
},
{
	title: "md-camera_metering_partial",
	icon: "󰞤",
},
{
	title: "md-camera_metering_spot",
	icon: "󰞥",
},
{
	title: "md-camera_off",
	icon: "󰗟",
},
{
	title: "md-camera_off_outline",
	icon: "󱦿",
},
{
	title: "md-camera_outline",
	icon: "󰵝",
},
{
	title: "md-camera_party_mode",
	icon: "󰄅",
},
{
	title: "md-camera_plus",
	icon: "󰻛",
},
{
	title: "md-camera_plus_outline",
	icon: "󰻜",
},
{
	title: "md-camera_rear",
	icon: "󰄆",
},
{
	title: "md-camera_rear_variant",
	icon: "󰄇",
},
{
	title: "md-camera_retake",
	icon: "󰸙",
},
{
	title: "md-camera_retake_outline",
	icon: "󰸚",
},
{
	title: "md-camera_switch",
	icon: "󰄈",
},
{
	title: "md-camera_switch_outline",
	icon: "󰡊",
},
{
	title: "md-camera_timer",
	icon: "󰄉",
},
{
	title: "md-camera_wireless",
	icon: "󰶶",
},
{
	title: "md-camera_wireless_outline",
	icon: "󰶷",
},
{
	title: "md-campfire",
	icon: "󰻝",
},
{
	title: "md-cancel",
	icon: "󰜺",
},
{
	title: "md-candelabra",
	icon: "󱟒",
},
{
	title: "md-candelabra_fire",
	icon: "󱟓",
},
{
	title: "md-candle",
	icon: "󰗢",
},
{
	title: "md-candy",
	icon: "󱥰",
},
{
	title: "md-candy_off",
	icon: "󱥱",
},
{
	title: "md-candy_off_outline",
	icon: "󱥲",
},
{
	title: "md-candy_outline",
	icon: "󱥳",
},
{
	title: "md-candycane",
	icon: "󰄊",
},
{
	title: "md-cannabis",
	icon: "󰞦",
},
{
	title: "md-cannabis_off",
	icon: "󱙮",
},
{
	title: "md-caps_lock",
	icon: "󰪛",
},
{
	title: "md-car",
	icon: "󰄋",
},
{
	title: "md-car_2_plus",
	icon: "󱀕",
},
{
	title: "md-car_3_plus",
	icon: "󱀖",
},
{
	title: "md-car_arrow_left",
	icon: "󱎲",
},
{
	title: "md-car_arrow_right",
	icon: "󱎳",
},
{
	title: "md-car_back",
	icon: "󰸛",
},
{
	title: "md-car_battery",
	icon: "󰄌",
},
{
	title: "md-car_brake_abs",
	icon: "󰱇",
},
{
	title: "md-car_brake_alert",
	icon: "󰱈",
},
{
	title: "md-car_brake_fluid_level",
	icon: "󱤉",
},
{
	title: "md-car_brake_hold",
	icon: "󰵞",
},
{
	title: "md-car_brake_low_pressure",
	icon: "󱤊",
},
{
	title: "md-car_brake_parking",
	icon: "󰵟",
},
{
	title: "md-car_brake_retarder",
	icon: "󱀗",
},
{
	title: "md-car_brake_temperature",
	icon: "󱤋",
},
{
	title: "md-car_brake_worn_linings",
	icon: "󱤌",
},
{
	title: "md-car_child_seat",
	icon: "󰾣",
},
{
	title: "md-car_clock",
	icon: "󱥴",
},
{
	title: "md-car_clutch",
	icon: "󱀘",
},
{
	title: "md-car_cog",
	icon: "󱏌",
},
{
	title: "md-car_connected",
	icon: "󰄍",
},
{
	title: "md-car_convertible",
	icon: "󰞧",
},
{
	title: "md-car_coolant_level",
	icon: "󱀙",
},
{
	title: "md-car_cruise_control",
	icon: "󰵠",
},
{
	title: "md-car_defrost_front",
	icon: "󰵡",
},
{
	title: "md-car_defrost_rear",
	icon: "󰵢",
},
{
	title: "md-car_door",
	icon: "󰭫",
},
{
	title: "md-car_door_lock",
	icon: "󱂝",
},
{
	title: "md-car_electric",
	icon: "󰭬",
},
{
	title: "md-car_electric_outline",
	icon: "󱖵",
},
{
	title: "md-car_emergency",
	icon: "󱘏",
},
{
	title: "md-car_esp",
	icon: "󰱉",
},
{
	title: "md-car_estate",
	icon: "󰞨",
},
{
	title: "md-car_hatchback",
	icon: "󰞩",
},
{
	title: "md-car_info",
	icon: "󱆾",
},
{
	title: "md-car_key",
	icon: "󰭭",
},
{
	title: "md-car_lifted_pickup",
	icon: "󱔭",
},
{
	title: "md-car_light_alert",
	icon: "󱤍",
},
{
	title: "md-car_light_dimmed",
	icon: "󰱊",
},
{
	title: "md-car_light_fog",
	icon: "󰱋",
},
{
	title: "md-car_light_high",
	icon: "󰱌",
},
{
	title: "md-car_limousine",
	icon: "󰣍",
},
{
	title: "md-car_multiple",
	icon: "󰭮",
},
{
	title: "md-car_off",
	icon: "󰸜",
},
{
	title: "md-car_outline",
	icon: "󱓭",
},
{
	title: "md-car_parking_lights",
	icon: "󰵣",
},
{
	title: "md-car_pickup",
	icon: "󰞪",
},
{
	title: "md-car_seat",
	icon: "󰾤",
},
{
	title: "md-car_seat_cooler",
	icon: "󰾥",
},
{
	title: "md-car_seat_heater",
	icon: "󰾦",
},
{
	title: "md-car_select",
	icon: "󱡹",
},
{
	title: "md-car_settings",
	icon: "󱏍",
},
{
	title: "md-car_shift_pattern",
	icon: "󰽀",
},
{
	title: "md-car_side",
	icon: "󰞫",
},
{
	title: "md-car_speed_limiter",
	icon: "󱤎",
},
{
	title: "md-car_sports",
	icon: "󰞬",
},
{
	title: "md-car_tire_alert",
	icon: "󰱍",
},
{
	title: "md-car_traction_control",
	icon: "󰵤",
},
{
	title: "md-car_turbocharger",
	icon: "󱀚",
},
{
	title: "md-car_wash",
	icon: "󰄎",
},
{
	title: "md-car_windshield",
	icon: "󱀛",
},
{
	title: "md-car_windshield_outline",
	icon: "󱀜",
},
{
	title: "md-car_wireless",
	icon: "󱡸",
},
{
	title: "md-car_wrench",
	icon: "󱠔",
},
{
	title: "md-carabiner",
	icon: "󱓀",
},
{
	title: "md-caravan",
	icon: "󰞭",
},
{
	title: "md-card",
	icon: "󰭯",
},
{
	title: "md-card_account_details",
	icon: "󰗒",
},
{
	title: "md-card_account_details_outline",
	icon: "󰶫",
},
{
	title: "md-card_account_details_star",
	icon: "󰊣",
},
{
	title: "md-card_account_details_star_outline",
	icon: "󰛛",
},
{
	title: "md-card_account_mail",
	icon: "󰆎",
},
{
	title: "md-card_account_mail_outline",
	icon: "󰺘",
},
{
	title: "md-card_account_phone",
	icon: "󰺙",
},
{
	title: "md-card_account_phone_outline",
	icon: "󰺚",
},
{
	title: "md-card_bulleted",
	icon: "󰭰",
},
{
	title: "md-card_bulleted_off",
	icon: "󰭱",
},
{
	title: "md-card_bulleted_off_outline",
	icon: "󰭲",
},
{
	title: "md-card_bulleted_outline",
	icon: "󰭳",
},
{
	title: "md-card_bulleted_settings",
	icon: "󰭴",
},
{
	title: "md-card_bulleted_settings_outline",
	icon: "󰭵",
},
{
	title: "md-card_minus",
	icon: "󱘀",
},
{
	title: "md-card_minus_outline",
	icon: "󱘁",
},
{
	title: "md-card_multiple",
	icon: "󱟱",
},
{
	title: "md-card_multiple_outline",
	icon: "󱟲",
},
{
	title: "md-card_off",
	icon: "󱘂",
},
{
	title: "md-card_off_outline",
	icon: "󱘃",
},
{
	title: "md-card_outline",
	icon: "󰭶",
},
{
	title: "md-card_plus",
	icon: "󱇿",
},
{
	title: "md-card_plus_outline",
	icon: "󱈀",
},
{
	title: "md-card_remove",
	icon: "󱘄",
},
{
	title: "md-card_remove_outline",
	icon: "󱘅",
},
{
	title: "md-card_search",
	icon: "󱁴",
},
{
	title: "md-card_search_outline",
	icon: "󱁵",
},
{
	title: "md-card_text",
	icon: "󰭷",
},
{
	title: "md-card_text_outline",
	icon: "󰭸",
},
{
	title: "md-cards",
	icon: "󰘸",
},
{
	title: "md-cards_club",
	icon: "󰣎",
},
{
	title: "md-cards_club_outline",
	icon: "󱢟",
},
{
	title: "md-cards_diamond",
	icon: "󰣏",
},
{
	title: "md-cards_diamond_outline",
	icon: "󱀝",
},
{
	title: "md-cards_outline",
	icon: "󰘹",
},
{
	title: "md-cards_playing",
	icon: "󱢡",
},
{
	title: "md-cards_playing_club",
	icon: "󱢢",
},
{
	title: "md-cards_playing_club_multiple",
	icon: "󱢣",
},
{
	title: "md-cards_playing_club_multiple_outline",
	icon: "󱢤",
},
{
	title: "md-cards_playing_club_outline",
	icon: "󱢥",
},
{
	title: "md-cards_playing_diamond",
	icon: "󱢦",
},
{
	title: "md-cards_playing_diamond_multiple",
	icon: "󱢧",
},
{
	title: "md-cards_playing_diamond_multiple_outline",
	icon: "󱢨",
},
{
	title: "md-cards_playing_diamond_outline",
	icon: "󱢩",
},
{
	title: "md-cards_playing_heart",
	icon: "󱢪",
},
{
	title: "md-cards_playing_heart_multiple",
	icon: "󱢫",
},
{
	title: "md-cards_playing_heart_multiple_outline",
	icon: "󱢬",
},
{
	title: "md-cards_playing_heart_outline",
	icon: "󱢭",
},
{
	title: "md-cards_playing_outline",
	icon: "󰘺",
},
{
	title: "md-cards_playing_spade",
	icon: "󱢮",
},
{
	title: "md-cards_playing_spade_multiple",
	icon: "󱢯",
},
{
	title: "md-cards_playing_spade_multiple_outline",
	icon: "󱢰",
},
{
	title: "md-cards_playing_spade_outline",
	icon: "󱢱",
},
{
	title: "md-cards_spade",
	icon: "󰣑",
},
{
	title: "md-cards_spade_outline",
	icon: "󱢲",
},
{
	title: "md-cards_variant",
	icon: "󰛇",
},
{
	title: "md-carrot",
	icon: "󰄏",
},
{
	title: "md-cart",
	icon: "󰄐",
},
{
	title: "md-cart_arrow_down",
	icon: "󰵦",
},
{
	title: "md-cart_arrow_right",
	icon: "󰱎",
},
{
	title: "md-cart_arrow_up",
	icon: "󰵧",
},
{
	title: "md-cart_check",
	icon: "󱗪",
},
{
	title: "md-cart_heart",
	icon: "󱣠",
},
{
	title: "md-cart_minus",
	icon: "󰵨",
},
{
	title: "md-cart_off",
	icon: "󰙫",
},
{
	title: "md-cart_outline",
	icon: "󰄑",
},
{
	title: "md-cart_plus",
	icon: "󰄒",
},
{
	title: "md-cart_remove",
	icon: "󰵩",
},
{
	title: "md-cart_variant",
	icon: "󱗫",
},
{
	title: "md-case_sensitive_alt",
	icon: "󰄓",
},
{
	title: "md-cash",
	icon: "󰄔",
},
{
	title: "md-cash_100",
	icon: "󰄕",
},
{
	title: "md-cash_check",
	icon: "󱓮",
},
{
	title: "md-cash_clock",
	icon: "󱪑",
},
{
	title: "md-cash_fast",
	icon: "󱡜",
},
{
	title: "md-cash_lock",
	icon: "󱓪",
},
{
	title: "md-cash_lock_open",
	icon: "󱓫",
},
{
	title: "md-cash_marker",
	icon: "󰶸",
},
{
	title: "md-cash_minus",
	icon: "󱉠",
},
{
	title: "md-cash_multiple",
	icon: "󰄖",
},
{
	title: "md-cash_plus",
	icon: "󱉡",
},
{
	title: "md-cash_refund",
	icon: "󰪜",
},
{
	title: "md-cash_register",
	icon: "󰳴",
},
{
	title: "md-cash_remove",
	icon: "󱉢",
},
{
	title: "md-cash_sync",
	icon: "󱪒",
},
{
	title: "md-cassette",
	icon: "󰧔",
},
{
	title: "md-cast",
	icon: "󰄘",
},
{
	title: "md-cast_audio",
	icon: "󱀞",
},
{
	title: "md-cast_audio_variant",
	icon: "󱝉",
},
{
	title: "md-cast_connected",
	icon: "󰄙",
},
{
	title: "md-cast_education",
	icon: "󰸝",
},
{
	title: "md-cast_off",
	icon: "󰞊",
},
{
	title: "md-cast_variant",
	icon: "󰀟",
},
{
	title: "md-castle",
	icon: "󰄚",
},
{
	title: "md-cat",
	icon: "󰄛",
},
{
	title: "md-cctv",
	icon: "󰞮",
},
{
	title: "md-cctv_off",
	icon: "󱡟",
},
{
	title: "md-ceiling_fan",
	icon: "󱞗",
},
{
	title: "md-ceiling_fan_light",
	icon: "󱞘",
},
{
	title: "md-ceiling_light",
	icon: "󰝩",
},
{
	title: "md-ceiling_light_multiple",
	icon: "󱣝",
},
{
	title: "md-ceiling_light_multiple_outline",
	icon: "󱣞",
},
{
	title: "md-ceiling_light_outline",
	icon: "󱟇",
},
{
	title: "md-cellphone",
	icon: "󰄜",
},
{
	title: "md-cellphone_arrow_down",
	icon: "󰧕",
},
{
	title: "md-cellphone_arrow_down_variant",
	icon: "󱧅",
},
{
	title: "md-cellphone_basic",
	icon: "󰄞",
},
{
	title: "md-cellphone_charging",
	icon: "󱎗",
},
{
	title: "md-cellphone_check",
	icon: "󱟽",
},
{
	title: "md-cellphone_cog",
	icon: "󰥑",
},
{
	title: "md-cellphone_dock",
	icon: "󰄟",
},
{
	title: "md-cellphone_information",
	icon: "󰽁",
},
{
	title: "md-cellphone_key",
	icon: "󰥎",
},
{
	title: "md-cellphone_link",
	icon: "󰄡",
},
{
	title: "md-cellphone_link_off",
	icon: "󰄢",
},
{
	title: "md-cellphone_lock",
	icon: "󰥏",
},
{
	title: "md-cellphone_marker",
	icon: "󱠺",
},
{
	title: "md-cellphone_message",
	icon: "󰣓",
},
{
	title: "md-cellphone_message_off",
	icon: "󱃒",
},
{
	title: "md-cellphone_nfc",
	icon: "󰺐",
},
{
	title: "md-cellphone_nfc_off",
	icon: "󱋘",
},
{
	title: "md-cellphone_off",
	icon: "󰥐",
},
{
	title: "md-cellphone_play",
	icon: "󱀟",
},
{
	title: "md-cellphone_remove",
	icon: "󰥍",
},
{
	title: "md-cellphone_screenshot",
	icon: "󰨵",
},
{
	title: "md-cellphone_settings",
	icon: "󰄣",
},
{
	title: "md-cellphone_sound",
	icon: "󰥒",
},
{
	title: "md-cellphone_text",
	icon: "󰣒",
},
{
	title: "md-cellphone_wireless",
	icon: "󰠕",
},
{
	title: "md-centos",
	icon: "󱄚",
},
{
	title: "md-certificate",
	icon: "󰄤",
},
{
	title: "md-certificate_outline",
	icon: "󱆈",
},
{
	title: "md-chair_rolling",
	icon: "󰽈",
},
{
	title: "md-chair_school",
	icon: "󰄥",
},
{
	title: "md-chandelier",
	icon: "󱞓",
},
{
	title: "md-charity",
	icon: "󰱏",
},
{
	title: "md-chart_arc",
	icon: "󰄦",
},
{
	title: "md-chart_areaspline",
	icon: "󰄧",
},
{
	title: "md-chart_areaspline_variant",
	icon: "󰺑",
},
{
	title: "md-chart_bar",
	icon: "󰄨",
},
{
	title: "md-chart_bar_stacked",
	icon: "󰝪",
},
{
	title: "md-chart_bell_curve",
	icon: "󰱐",
},
{
	title: "md-chart_bell_curve_cumulative",
	icon: "󰾧",
},
{
	title: "md-chart_box",
	icon: "󱕍",
},
{
	title: "md-chart_box_outline",
	icon: "󱕎",
},
{
	title: "md-chart_box_plus_outline",
	icon: "󱕏",
},
{
	title: "md-chart_bubble",
	icon: "󰗣",
},
{
	title: "md-chart_donut",
	icon: "󰞯",
},
{
	title: "md-chart_donut_variant",
	icon: "󰞰",
},
{
	title: "md-chart_gantt",
	icon: "󰙬",
},
{
	title: "md-chart_histogram",
	icon: "󰄩",
},
{
	title: "md-chart_line",
	icon: "󰄪",
},
{
	title: "md-chart_line_stacked",
	icon: "󰝫",
},
{
	title: "md-chart_line_variant",
	icon: "󰞱",
},
{
	title: "md-chart_multiline",
	icon: "󰣔",
},
{
	title: "md-chart_multiple",
	icon: "󱈓",
},
{
	title: "md-chart_pie",
	icon: "󰄫",
},
{
	title: "md-chart_ppf",
	icon: "󱎀",
},
{
	title: "md-chart_sankey",
	icon: "󱇟",
},
{
	title: "md-chart_sankey_variant",
	icon: "󱇠",
},
{
	title: "md-chart_scatter_plot",
	icon: "󰺒",
},
{
	title: "md-chart_scatter_plot_hexbin",
	icon: "󰙭",
},
{
	title: "md-chart_timeline",
	icon: "󰙮",
},
{
	title: "md-chart_timeline_variant",
	icon: "󰺓",
},
{
	title: "md-chart_timeline_variant_shimmer",
	icon: "󱖶",
},
{
	title: "md-chart_tree",
	icon: "󰺔",
},
{
	title: "md-chart_waterfall",
	icon: "󱤘",
},
{
	title: "md-chat",
	icon: "󰭹",
},
{
	title: "md-chat_alert",
	icon: "󰭺",
},
{
	title: "md-chat_alert_outline",
	icon: "󱋉",
},
{
	title: "md-chat_minus",
	icon: "󱐐",
},
{
	title: "md-chat_minus_outline",
	icon: "󱐓",
},
{
	title: "md-chat_outline",
	icon: "󰻞",
},
{
	title: "md-chat_plus",
	icon: "󱐏",
},
{
	title: "md-chat_plus_outline",
	icon: "󱐒",
},
{
	title: "md-chat_processing",
	icon: "󰭻",
},
{
	title: "md-chat_processing_outline",
	icon: "󱋊",
},
{
	title: "md-chat_question",
	icon: "󱜸",
},
{
	title: "md-chat_question_outline",
	icon: "󱜹",
},
{
	title: "md-chat_remove",
	icon: "󱐑",
},
{
	title: "md-chat_remove_outline",
	icon: "󱐔",
},
{
	title: "md-chat_sleep",
	icon: "󱋑",
},
{
	title: "md-chat_sleep_outline",
	icon: "󱋒",
},
{
	title: "md-check",
	icon: "󰄬",
},
{
	title: "md-check_all",
	icon: "󰄭",
},
{
	title: "md-check_bold",
	icon: "󰸞",
},
{
	title: "md-check_circle",
	icon: "󰗠",
},
{
	title: "md-check_circle_outline",
	icon: "󰗡",
},
{
	title: "md-check_decagram",
	icon: "󰞑",
},
{
	title: "md-check_decagram_outline",
	icon: "󱝀",
},
{
	title: "md-check_network",
	icon: "󰱓",
},
{
	title: "md-check_network_outline",
	icon: "󰱔",
},
{
	title: "md-check_outline",
	icon: "󰡕",
},
{
	title: "md-check_underline",
	icon: "󰸟",
},
{
	title: "md-check_underline_circle",
	icon: "󰸠",
},
{
	title: "md-check_underline_circle_outline",
	icon: "󰸡",
},
{
	title: "md-checkbook",
	icon: "󰪝",
},
{
	title: "md-checkbox_blank",
	icon: "󰄮",
},
{
	title: "md-checkbox_blank_badge",
	icon: "󱅶",
},
{
	title: "md-checkbox_blank_badge_outline",
	icon: "󰄗",
},
{
	title: "md-checkbox_blank_circle",
	icon: "󰄯",
},
{
	title: "md-checkbox_blank_circle_outline",
	icon: "󰄰",
},
{
	title: "md-checkbox_blank_off",
	icon: "󱋬",
},
{
	title: "md-checkbox_blank_off_outline",
	icon: "󱋭",
},
{
	title: "md-checkbox_blank_outline",
	icon: "󰄱",
},
{
	title: "md-checkbox_intermediate",
	icon: "󰡖",
},
{
	title: "md-checkbox_marked",
	icon: "󰄲",
},
{
	title: "md-checkbox_marked_circle",
	icon: "󰄳",
},
{
	title: "md-checkbox_marked_circle_outline",
	icon: "󰄴",
},
{
	title: "md-checkbox_marked_circle_plus_outline",
	icon: "󱤧",
},
{
	title: "md-checkbox_marked_outline",
	icon: "󰄵",
},
{
	title: "md-checkbox_multiple_blank",
	icon: "󰄶",
},
{
	title: "md-checkbox_multiple_blank_circle",
	icon: "󰘻",
},
{
	title: "md-checkbox_multiple_blank_circle_outline",
	icon: "󰘼",
},
{
	title: "md-checkbox_multiple_blank_outline",
	icon: "󰄷",
},
{
	title: "md-checkbox_multiple_marked",
	icon: "󰄸",
},
{
	title: "md-checkbox_multiple_marked_circle",
	icon: "󰘽",
},
{
	title: "md-checkbox_multiple_marked_circle_outline",
	icon: "󰘾",
},
{
	title: "md-checkbox_multiple_marked_outline",
	icon: "󰄹",
},
{
	title: "md-checkbox_multiple_outline",
	icon: "󰱑",
},
{
	title: "md-checkbox_outline",
	icon: "󰱒",
},
{
	title: "md-checkerboard",
	icon: "󰄺",
},
{
	title: "md-checkerboard_minus",
	icon: "󱈂",
},
{
	title: "md-checkerboard_plus",
	icon: "󱈁",
},
{
	title: "md-checkerboard_remove",
	icon: "󱈃",
},
{
	title: "md-cheese",
	icon: "󱊹",
},
{
	title: "md-cheese_off",
	icon: "󱏮",
},
{
	title: "md-chef_hat",
	icon: "󰭼",
},
{
	title: "md-chemical_weapon",
	icon: "󰄻",
},
{
	title: "md-chess_bishop",
	icon: "󰡜",
},
{
	title: "md-chess_king",
	icon: "󰡗",
},
{
	title: "md-chess_knight",
	icon: "󰡘",
},
{
	title: "md-chess_pawn",
	icon: "󰡙",
},
{
	title: "md-chess_queen",
	icon: "󰡚",
},
{
	title: "md-chess_rook",
	icon: "󰡛",
},
{
	title: "md-chevron_double_down",
	icon: "󰄼",
},
{
	title: "md-chevron_double_left",
	icon: "󰄽",
},
{
	title: "md-chevron_double_right",
	icon: "󰄾",
},
{
	title: "md-chevron_double_up",
	icon: "󰄿",
},
{
	title: "md-chevron_down",
	icon: "󰅀",
},
{
	title: "md-chevron_down_box",
	icon: "󰧖",
},
{
	title: "md-chevron_down_box_outline",
	icon: "󰧗",
},
{
	title: "md-chevron_down_circle",
	icon: "󰬦",
},
{
	title: "md-chevron_down_circle_outline",
	icon: "󰬧",
},
{
	title: "md-chevron_left",
	icon: "󰅁",
},
{
	title: "md-chevron_left_box",
	icon: "󰧘",
},
{
	title: "md-chevron_left_box_outline",
	icon: "󰧙",
},
{
	title: "md-chevron_left_circle",
	icon: "󰬨",
},
{
	title: "md-chevron_left_circle_outline",
	icon: "󰬩",
},
{
	title: "md-chevron_right",
	icon: "󰅂",
},
{
	title: "md-chevron_right_box",
	icon: "󰧚",
},
{
	title: "md-chevron_right_box_outline",
	icon: "󰧛",
},
{
	title: "md-chevron_right_circle",
	icon: "󰬪",
},
{
	title: "md-chevron_right_circle_outline",
	icon: "󰬫",
},
{
	title: "md-chevron_triple_down",
	icon: "󰶹",
},
{
	title: "md-chevron_triple_left",
	icon: "󰶺",
},
{
	title: "md-chevron_triple_right",
	icon: "󰶻",
},
{
	title: "md-chevron_triple_up",
	icon: "󰶼",
},
{
	title: "md-chevron_up",
	icon: "󰅃",
},
{
	title: "md-chevron_up_box",
	icon: "󰧜",
},
{
	title: "md-chevron_up_box_outline",
	icon: "󰧝",
},
{
	title: "md-chevron_up_circle",
	icon: "󰬬",
},
{
	title: "md-chevron_up_circle_outline",
	icon: "󰬭",
},
{
	title: "md-chili_alert",
	icon: "󱟪",
},
{
	title: "md-chili_alert_outline",
	icon: "󱟫",
},
{
	title: "md-chili_hot",
	icon: "󰞲",
},
{
	title: "md-chili_hot_outline",
	icon: "󱟬",
},
{
	title: "md-chili_medium",
	icon: "󰞳",
},
{
	title: "md-chili_medium_outline",
	icon: "󱟭",
},
{
	title: "md-chili_mild",
	icon: "󰞴",
},
{
	title: "md-chili_mild_outline",
	icon: "󱟮",
},
{
	title: "md-chili_off",
	icon: "󱑧",
},
{
	title: "md-chili_off_outline",
	icon: "󱟯",
},
{
	title: "md-chip",
	icon: "󰘚",
},
{
	title: "md-church",
	icon: "󰅄",
},
{
	title: "md-cigar",
	icon: "󱆉",
},
{
	title: "md-cigar_off",
	icon: "󱐛",
},
{
	title: "md-circle_box",
	icon: "󱗜",
},
{
	title: "md-circle_box_outline",
	icon: "󱗝",
},
{
	title: "md-circle_double",
	icon: "󰺕",
},
{
	title: "md-circle_edit_outline",
	icon: "󰣕",
},
{
	title: "md-circle_expand",
	icon: "󰺖",
},
{
	title: "md-circle_half",
	icon: "󱎕",
},
{
	title: "md-circle_half_full",
	icon: "󱎖",
},
{
	title: "md-circle_medium",
	icon: "󰧞",
},
{
	title: "md-circle_multiple",
	icon: "󰬸",
},
{
	title: "md-circle_multiple_outline",
	icon: "󰚕",
},
{
	title: "md-circle_off_outline",
	icon: "󱃓",
},
{
	title: "md-circle_opacity",
	icon: "󱡓",
},
{
	title: "md-circle_slice_1",
	icon: "󰪞",
},
{
	title: "md-circle_slice_2",
	icon: "󰪟",
},
{
	title: "md-circle_slice_3",
	icon: "󰪠",
},
{
	title: "md-circle_slice_4",
	icon: "󰪡",
},
{
	title: "md-circle_slice_5",
	icon: "󰪢",
},
{
	title: "md-circle_slice_6",
	icon: "󰪣",
},
{
	title: "md-circle_slice_7",
	icon: "󰪤",
},
{
	title: "md-circle_slice_8",
	icon: "󰪥",
},
{
	title: "md-circle_small",
	icon: "󰧟",
},
{
	title: "md-circular_saw",
	icon: "󰸢",
},
{
	title: "md-city",
	icon: "󰅆",
},
{
	title: "md-city_variant",
	icon: "󰨶",
},
{
	title: "md-city_variant_outline",
	icon: "󰨷",
},
{
	title: "md-clipboard",
	icon: "󰅇",
},
{
	title: "md-clipboard_account",
	icon: "󰅈",
},
{
	title: "md-clipboard_account_outline",
	icon: "󰱕",
},
{
	title: "md-clipboard_alert",
	icon: "󰅉",
},
{
	title: "md-clipboard_alert_outline",
	icon: "󰳷",
},
{
	title: "md-clipboard_arrow_down",
	icon: "󰅊",
},
{
	title: "md-clipboard_arrow_down_outline",
	icon: "󰱖",
},
{
	title: "md-clipboard_arrow_left",
	icon: "󰅋",
},
{
	title: "md-clipboard_arrow_left_outline",
	icon: "󰳸",
},
{
	title: "md-clipboard_arrow_right",
	icon: "󰳹",
},
{
	title: "md-clipboard_arrow_right_outline",
	icon: "󰳺",
},
{
	title: "md-clipboard_arrow_up",
	icon: "󰱗",
},
{
	title: "md-clipboard_arrow_up_outline",
	icon: "󰱘",
},
{
	title: "md-clipboard_check",
	icon: "󰅎",
},
{
	title: "md-clipboard_check_multiple",
	icon: "󱉣",
},
{
	title: "md-clipboard_check_multiple_outline",
	icon: "󱉤",
},
{
	title: "md-clipboard_check_outline",
	icon: "󰢨",
},
{
	title: "md-clipboard_clock",
	icon: "󱛢",
},
{
	title: "md-clipboard_clock_outline",
	icon: "󱛣",
},
{
	title: "md-clipboard_edit",
	icon: "󱓥",
},
{
	title: "md-clipboard_edit_outline",
	icon: "󱓦",
},
{
	title: "md-clipboard_file",
	icon: "󱉥",
},
{
	title: "md-clipboard_file_outline",
	icon: "󱉦",
},
{
	title: "md-clipboard_flow",
	icon: "󰛈",
},
{
	title: "md-clipboard_flow_outline",
	icon: "󱄗",
},
{
	title: "md-clipboard_list",
	icon: "󱃔",
},
{
	title: "md-clipboard_list_outline",
	icon: "󱃕",
},
{
	title: "md-clipboard_minus",
	icon: "󱘘",
},
{
	title: "md-clipboard_minus_outline",
	icon: "󱘙",
},
{
	title: "md-clipboard_multiple",
	icon: "󱉧",
},
{
	title: "md-clipboard_multiple_outline",
	icon: "󱉨",
},
{
	title: "md-clipboard_off",
	icon: "󱘚",
},
{
	title: "md-clipboard_off_outline",
	icon: "󱘛",
},
{
	title: "md-clipboard_outline",
	icon: "󰅌",
},
{
	title: "md-clipboard_play",
	icon: "󰱙",
},
{
	title: "md-clipboard_play_multiple",
	icon: "󱉩",
},
{
	title: "md-clipboard_play_multiple_outline",
	icon: "󱉪",
},
{
	title: "md-clipboard_play_outline",
	icon: "󰱚",
},
{
	title: "md-clipboard_plus",
	icon: "󰝑",
},
{
	title: "md-clipboard_plus_outline",
	icon: "󱌟",
},
{
	title: "md-clipboard_pulse",
	icon: "󰡝",
},
{
	title: "md-clipboard_pulse_outline",
	icon: "󰡞",
},
{
	title: "md-clipboard_remove",
	icon: "󱘜",
},
{
	title: "md-clipboard_remove_outline",
	icon: "󱘝",
},
{
	title: "md-clipboard_search",
	icon: "󱘞",
},
{
	title: "md-clipboard_search_outline",
	icon: "󱘟",
},
{
	title: "md-clipboard_text",
	icon: "󰅍",
},
{
	title: "md-clipboard_text_clock",
	icon: "󱣹",
},
{
	title: "md-clipboard_text_clock_outline",
	icon: "󱣺",
},
{
	title: "md-clipboard_text_multiple",
	icon: "󱉫",
},
{
	title: "md-clipboard_text_multiple_outline",
	icon: "󱉬",
},
{
	title: "md-clipboard_text_off",
	icon: "󱘠",
},
{
	title: "md-clipboard_text_off_outline",
	icon: "󱘡",
},
{
	title: "md-clipboard_text_outline",
	icon: "󰨸",
},
{
	title: "md-clipboard_text_play",
	icon: "󰱛",
},
{
	title: "md-clipboard_text_play_outline",
	icon: "󰱜",
},
{
	title: "md-clipboard_text_search",
	icon: "󱘢",
},
{
	title: "md-clipboard_text_search_outline",
	icon: "󱘣",
},
{
	title: "md-clippy",
	icon: "󰅏",
},
{
	title: "md-clock",
	icon: "󰥔",
},
{
	title: "md-clock_alert",
	icon: "󰥕",
},
{
	title: "md-clock_alert_outline",
	icon: "󰗎",
},
{
	title: "md-clock_check",
	icon: "󰾨",
},
{
	title: "md-clock_check_outline",
	icon: "󰾩",
},
{
	title: "md-clock_digital",
	icon: "󰺗",
},
{
	title: "md-clock_edit",
	icon: "󱦺",
},
{
	title: "md-clock_edit_outline",
	icon: "󱦻",
},
{
	title: "md-clock_end",
	icon: "󰅑",
},
{
	title: "md-clock_fast",
	icon: "󰅒",
},
{
	title: "md-clock_in",
	icon: "󰅓",
},
{
	title: "md-clock_minus",
	icon: "󱡣",
},
{
	title: "md-clock_minus_outline",
	icon: "󱡤",
},
{
	title: "md-clock_out",
	icon: "󰅔",
},
{
	title: "md-clock_outline",
	icon: "󰅐",
},
{
	title: "md-clock_plus",
	icon: "󱡡",
},
{
	title: "md-clock_plus_outline",
	icon: "󱡢",
},
{
	title: "md-clock_remove",
	icon: "󱡥",
},
{
	title: "md-clock_remove_outline",
	icon: "󱡦",
},
{
	title: "md-clock_start",
	icon: "󰅕",
},
{
	title: "md-clock_time_eight",
	icon: "󱑆",
},
{
	title: "md-clock_time_eight_outline",
	icon: "󱑒",
},
{
	title: "md-clock_time_eleven",
	icon: "󱑉",
},
{
	title: "md-clock_time_eleven_outline",
	icon: "󱑕",
},
{
	title: "md-clock_time_five",
	icon: "󱑃",
},
{
	title: "md-clock_time_five_outline",
	icon: "󱑏",
},
{
	title: "md-clock_time_four",
	icon: "󱑂",
},
{
	title: "md-clock_time_four_outline",
	icon: "󱑎",
},
{
	title: "md-clock_time_nine",
	icon: "󱑇",
},
{
	title: "md-clock_time_nine_outline",
	icon: "󱑓",
},
{
	title: "md-clock_time_one",
	icon: "󱐿",
},
{
	title: "md-clock_time_one_outline",
	icon: "󱑋",
},
{
	title: "md-clock_time_seven",
	icon: "󱑅",
},
{
	title: "md-clock_time_seven_outline",
	icon: "󱑑",
},
{
	title: "md-clock_time_six",
	icon: "󱑄",
},
{
	title: "md-clock_time_six_outline",
	icon: "󱑐",
},
{
	title: "md-clock_time_ten",
	icon: "󱑈",
},
{
	title: "md-clock_time_ten_outline",
	icon: "󱑔",
},
{
	title: "md-clock_time_three",
	icon: "󱑁",
},
{
	title: "md-clock_time_three_outline",
	icon: "󱑍",
},
{
	title: "md-clock_time_twelve",
	icon: "󱑊",
},
{
	title: "md-clock_time_twelve_outline",
	icon: "󱑖",
},
{
	title: "md-clock_time_two",
	icon: "󱑀",
},
{
	title: "md-clock_time_two_outline",
	icon: "󱑌",
},
{
	title: "md-close",
	icon: "󰅖",
},
{
	title: "md-close_box",
	icon: "󰅗",
},
{
	title: "md-close_box_multiple",
	icon: "󰱝",
},
{
	title: "md-close_box_multiple_outline",
	icon: "󰱞",
},
{
	title: "md-close_box_outline",
	icon: "󰅘",
},
{
	title: "md-close_circle",
	icon: "󰅙",
},
{
	title: "md-close_circle_multiple",
	icon: "󰘪",
},
{
	title: "md-close_circle_multiple_outline",
	icon: "󰢃",
},
{
	title: "md-close_circle_outline",
	icon: "󰅚",
},
{
	title: "md-close_network",
	icon: "󰅛",
},
{
	title: "md-close_network_outline",
	icon: "󰱟",
},
{
	title: "md-close_octagon",
	icon: "󰅜",
},
{
	title: "md-close_octagon_outline",
	icon: "󰅝",
},
{
	title: "md-close_outline",
	icon: "󰛉",
},
{
	title: "md-close_thick",
	icon: "󱎘",
},
{
	title: "md-closed_caption",
	icon: "󰅞",
},
{
	title: "md-closed_caption_outline",
	icon: "󰶽",
},
{
	title: "md-cloud",
	icon: "󰅟",
},
{
	title: "md-cloud_alert",
	icon: "󰧠",
},
{
	title: "md-cloud_braces",
	icon: "󰞵",
},
{
	title: "md-cloud_check",
	icon: "󰅠",
},
{
	title: "md-cloud_check_outline",
	icon: "󱋌",
},
{
	title: "md-cloud_circle",
	icon: "󰅡",
},
{
	title: "md-cloud_download",
	icon: "󰅢",
},
{
	title: "md-cloud_download_outline",
	icon: "󰭽",
},
{
	title: "md-cloud_lock",
	icon: "󱇱",
},
{
	title: "md-cloud_lock_outline",
	icon: "󱇲",
},
{
	title: "md-cloud_off_outline",
	icon: "󰅤",
},
{
	title: "md-cloud_outline",
	icon: "󰅣",
},
{
	title: "md-cloud_percent",
	icon: "󱨵",
},
{
	title: "md-cloud_percent_outline",
	icon: "󱨶",
},
{
	title: "md-cloud_print",
	icon: "󰅥",
},
{
	title: "md-cloud_print_outline",
	icon: "󰅦",
},
{
	title: "md-cloud_question",
	icon: "󰨹",
},
{
	title: "md-cloud_refresh",
	icon: "󰔪",
},
{
	title: "md-cloud_search",
	icon: "󰥖",
},
{
	title: "md-cloud_search_outline",
	icon: "󰥗",
},
{
	title: "md-cloud_sync",
	icon: "󰘿",
},
{
	title: "md-cloud_sync_outline",
	icon: "󱋖",
},
{
	title: "md-cloud_tags",
	icon: "󰞶",
},
{
	title: "md-cloud_upload",
	icon: "󰅧",
},
{
	title: "md-cloud_upload_outline",
	icon: "󰭾",
},
{
	title: "md-clover",
	icon: "󰠖",
},
{
	title: "md-coach_lamp",
	icon: "󱀠",
},
{
	title: "md-coach_lamp_variant",
	icon: "󱨷",
},
{
	title: "md-coat_rack",
	icon: "󱂞",
},
{
	title: "md-code_array",
	icon: "󰅨",
},
{
	title: "md-code_braces",
	icon: "󰅩",
},
{
	title: "md-code_braces_box",
	icon: "󱃖",
},
{
	title: "md-code_brackets",
	icon: "󰅪",
},
{
	title: "md-code_equal",
	icon: "󰅫",
},
{
	title: "md-code_greater_than",
	icon: "󰅬",
},
{
	title: "md-code_greater_than_or_equal",
	icon: "󰅭",
},
{
	title: "md-code_json",
	icon: "󰘦",
},
{
	title: "md-code_less_than",
	icon: "󰅮",
},
{
	title: "md-code_less_than_or_equal",
	icon: "󰅯",
},
{
	title: "md-code_not_equal",
	icon: "󰅰",
},
{
	title: "md-code_not_equal_variant",
	icon: "󰅱",
},
{
	title: "md-code_parentheses",
	icon: "󰅲",
},
{
	title: "md-code_parentheses_box",
	icon: "󱃗",
},
{
	title: "md-code_string",
	icon: "󰅳",
},
{
	title: "md-code_tags",
	icon: "󰅴",
},
{
	title: "md-code_tags_check",
	icon: "󰚔",
},
{
	title: "md-codepen",
	icon: "󰅵",
},
{
	title: "md-coffee",
	icon: "󰅶",
},
{
	title: "md-coffee_maker",
	icon: "󱂟",
},
{
	title: "md-coffee_maker_check",
	icon: "󱤱",
},
{
	title: "md-coffee_maker_check_outline",
	icon: "󱤲",
},
{
	title: "md-coffee_maker_outline",
	icon: "󱠛",
},
{
	title: "md-coffee_off",
	icon: "󰾪",
},
{
	title: "md-coffee_off_outline",
	icon: "󰾫",
},
{
	title: "md-coffee_outline",
	icon: "󰛊",
},
{
	title: "md-coffee_to_go",
	icon: "󰅷",
},
{
	title: "md-coffee_to_go_outline",
	icon: "󱌎",
},
{
	title: "md-coffin",
	icon: "󰭿",
},
{
	title: "md-cog",
	icon: "󰒓",
},
{
	title: "md-cog_box",
	icon: "󰒔",
},
{
	title: "md-cog_clockwise",
	icon: "󱇝",
},
{
	title: "md-cog_counterclockwise",
	icon: "󱇞",
},
{
	title: "md-cog_off",
	icon: "󱏎",
},
{
	title: "md-cog_off_outline",
	icon: "󱏏",
},
{
	title: "md-cog_outline",
	icon: "󰢻",
},
{
	title: "md-cog_pause",
	icon: "󱤳",
},
{
	title: "md-cog_pause_outline",
	icon: "󱤴",
},
{
	title: "md-cog_play",
	icon: "󱤵",
},
{
	title: "md-cog_play_outline",
	icon: "󱤶",
},
{
	title: "md-cog_refresh",
	icon: "󱑞",
},
{
	title: "md-cog_refresh_outline",
	icon: "󱑟",
},
{
	title: "md-cog_stop",
	icon: "󱤷",
},
{
	title: "md-cog_stop_outline",
	icon: "󱤸",
},
{
	title: "md-cog_sync",
	icon: "󱑠",
},
{
	title: "md-cog_sync_outline",
	icon: "󱑡",
},
{
	title: "md-cog_transfer",
	icon: "󱁛",
},
{
	title: "md-cog_transfer_outline",
	icon: "󱁜",
},
{
	title: "md-cogs",
	icon: "󰣖",
},
{
	title: "md-collage",
	icon: "󰙀",
},
{
	title: "md-collapse_all",
	icon: "󰪦",
},
{
	title: "md-collapse_all_outline",
	icon: "󰪧",
},
{
	title: "md-color_helper",
	icon: "󰅹",
},
{
	title: "md-comma",
	icon: "󰸣",
},
{
	title: "md-comma_box",
	icon: "󰸫",
},
{
	title: "md-comma_box_outline",
	icon: "󰸤",
},
{
	title: "md-comma_circle",
	icon: "󰸥",
},
{
	title: "md-comma_circle_outline",
	icon: "󰸦",
},
{
	title: "md-comment",
	icon: "󰅺",
},
{
	title: "md-comment_account",
	icon: "󰅻",
},
{
	title: "md-comment_account_outline",
	icon: "󰅼",
},
{
	title: "md-comment_alert",
	icon: "󰅽",
},
{
	title: "md-comment_alert_outline",
	icon: "󰅾",
},
{
	title: "md-comment_arrow_left",
	icon: "󰧡",
},
{
	title: "md-comment_arrow_left_outline",
	icon: "󰧢",
},
{
	title: "md-comment_arrow_right",
	icon: "󰧣",
},
{
	title: "md-comment_arrow_right_outline",
	icon: "󰧤",
},
{
	title: "md-comment_bookmark",
	icon: "󱖮",
},
{
	title: "md-comment_bookmark_outline",
	icon: "󱖯",
},
{
	title: "md-comment_check",
	icon: "󰅿",
},
{
	title: "md-comment_check_outline",
	icon: "󰆀",
},
{
	title: "md-comment_edit",
	icon: "󱆿",
},
{
	title: "md-comment_edit_outline",
	icon: "󱋄",
},
{
	title: "md-comment_eye",
	icon: "󰨺",
},
{
	title: "md-comment_eye_outline",
	icon: "󰨻",
},
{
	title: "md-comment_flash",
	icon: "󱖰",
},
{
	title: "md-comment_flash_outline",
	icon: "󱖱",
},
{
	title: "md-comment_minus",
	icon: "󱗟",
},
{
	title: "md-comment_minus_outline",
	icon: "󱗠",
},
{
	title: "md-comment_multiple",
	icon: "󰡟",
},
{
	title: "md-comment_multiple_outline",
	icon: "󰆁",
},
{
	title: "md-comment_off",
	icon: "󱗡",
},
{
	title: "md-comment_off_outline",
	icon: "󱗢",
},
{
	title: "md-comment_outline",
	icon: "󰆂",
},
{
	title: "md-comment_plus",
	icon: "󰧥",
},
{
	title: "md-comment_plus_outline",
	icon: "󰆃",
},
{
	title: "md-comment_processing",
	icon: "󰆄",
},
{
	title: "md-comment_processing_outline",
	icon: "󰆅",
},
{
	title: "md-comment_question",
	icon: "󰠗",
},
{
	title: "md-comment_question_outline",
	icon: "󰆆",
},
{
	title: "md-comment_quote",
	icon: "󱀡",
},
{
	title: "md-comment_quote_outline",
	icon: "󱀢",
},
{
	title: "md-comment_remove",
	icon: "󰗞",
},
{
	title: "md-comment_remove_outline",
	icon: "󰆇",
},
{
	title: "md-comment_search",
	icon: "󰨼",
},
{
	title: "md-comment_search_outline",
	icon: "󰨽",
},
{
	title: "md-comment_text",
	icon: "󰆈",
},
{
	title: "md-comment_text_multiple",
	icon: "󰡠",
},
{
	title: "md-comment_text_multiple_outline",
	icon: "󰡡",
},
{
	title: "md-comment_text_outline",
	icon: "󰆉",
},
{
	title: "md-compare",
	icon: "󰆊",
},
{
	title: "md-compare_horizontal",
	icon: "󱒒",
},
{
	title: "md-compare_remove",
	icon: "󱢳",
},
{
	title: "md-compare_vertical",
	icon: "󱒓",
},
{
	title: "md-compass",
	icon: "󰆋",
},
{
	title: "md-compass_off",
	icon: "󰮀",
},
{
	title: "md-compass_off_outline",
	icon: "󰮁",
},
{
	title: "md-compass_outline",
	icon: "󰆌",
},
{
	title: "md-compass_rose",
	icon: "󱎂",
},
{
	title: "md-compost",
	icon: "󱨸",
},
{
	title: "md-cone",
	icon: "󱥌",
},
{
	title: "md-cone_off",
	icon: "󱥍",
},
{
	title: "md-connection",
	icon: "󱘖",
},
{
	title: "md-console",
	icon: "󰆍",
},
{
	title: "md-console_line",
	icon: "󰞷",
},
{
	title: "md-console_network",
	icon: "󰢩",
},
{
	title: "md-console_network_outline",
	icon: "󰱠",
},
{
	title: "md-consolidate",
	icon: "󱃘",
},
{
	title: "md-contactless_payment",
	icon: "󰵪",
},
{
	title: "md-contactless_payment_circle",
	icon: "󰌡",
},
{
	title: "md-contactless_payment_circle_outline",
	icon: "󰐈",
},
{
	title: "md-contacts",
	icon: "󰛋",
},
{
	title: "md-contacts_outline",
	icon: "󰖸",
},
{
	title: "md-contain",
	icon: "󰨾",
},
{
	title: "md-contain_end",
	icon: "󰨿",
},
{
	title: "md-contain_start",
	icon: "󰩀",
},
{
	title: "md-content_copy",
	icon: "󰆏",
},
{
	title: "md-content_cut",
	icon: "󰆐",
},
{
	title: "md-content_duplicate",
	icon: "󰆑",
},
{
	title: "md-content_paste",
	icon: "󰆒",
},
{
	title: "md-content_save",
	icon: "󰆓",
},
{
	title: "md-content_save_alert",
	icon: "󰽂",
},
{
	title: "md-content_save_alert_outline",
	icon: "󰽃",
},
{
	title: "md-content_save_all",
	icon: "󰆔",
},
{
	title: "md-content_save_all_outline",
	icon: "󰽄",
},
{
	title: "md-content_save_check",
	icon: "󱣪",
},
{
	title: "md-content_save_check_outline",
	icon: "󱣫",
},
{
	title: "md-content_save_cog",
	icon: "󱑛",
},
{
	title: "md-content_save_cog_outline",
	icon: "󱑜",
},
{
	title: "md-content_save_edit",
	icon: "󰳻",
},
{
	title: "md-content_save_edit_outline",
	icon: "󰳼",
},
{
	title: "md-content_save_move",
	icon: "󰸧",
},
{
	title: "md-content_save_move_outline",
	icon: "󰸨",
},
{
	title: "md-content_save_off",
	icon: "󱙃",
},
{
	title: "md-content_save_off_outline",
	icon: "󱙄",
},
{
	title: "md-content_save_outline",
	icon: "󰠘",
},
{
	title: "md-content_save_settings",
	icon: "󰘛",
},
{
	title: "md-content_save_settings_outline",
	icon: "󰬮",
},
{
	title: "md-contrast",
	icon: "󰆕",
},
{
	title: "md-contrast_box",
	icon: "󰆖",
},
{
	title: "md-contrast_circle",
	icon: "󰆗",
},
{
	title: "md-controller_classic",
	icon: "󰮂",
},
{
	title: "md-controller_classic_outline",
	icon: "󰮃",
},
{
	title: "md-cookie",
	icon: "󰆘",
},
{
	title: "md-cookie_alert",
	icon: "󱛐",
},
{
	title: "md-cookie_alert_outline",
	icon: "󱛑",
},
{
	title: "md-cookie_check",
	icon: "󱛒",
},
{
	title: "md-cookie_check_outline",
	icon: "󱛓",
},
{
	title: "md-cookie_clock",
	icon: "󱛤",
},
{
	title: "md-cookie_clock_outline",
	icon: "󱛥",
},
{
	title: "md-cookie_cog",
	icon: "󱛔",
},
{
	title: "md-cookie_cog_outline",
	icon: "󱛕",
},
{
	title: "md-cookie_edit",
	icon: "󱛦",
},
{
	title: "md-cookie_edit_outline",
	icon: "󱛧",
},
{
	title: "md-cookie_lock",
	icon: "󱛨",
},
{
	title: "md-cookie_lock_outline",
	icon: "󱛩",
},
{
	title: "md-cookie_minus",
	icon: "󱛚",
},
{
	title: "md-cookie_minus_outline",
	icon: "󱛛",
},
{
	title: "md-cookie_off",
	icon: "󱛪",
},
{
	title: "md-cookie_off_outline",
	icon: "󱛫",
},
{
	title: "md-cookie_outline",
	icon: "󱛞",
},
{
	title: "md-cookie_plus",
	icon: "󱛖",
},
{
	title: "md-cookie_plus_outline",
	icon: "󱛗",
},
{
	title: "md-cookie_refresh",
	icon: "󱛬",
},
{
	title: "md-cookie_refresh_outline",
	icon: "󱛭",
},
{
	title: "md-cookie_remove",
	icon: "󱛘",
},
{
	title: "md-cookie_remove_outline",
	icon: "󱛙",
},
{
	title: "md-cookie_settings",
	icon: "󱛜",
},
{
	title: "md-cookie_settings_outline",
	icon: "󱛝",
},
{
	title: "md-coolant_temperature",
	icon: "󰏈",
},
{
	title: "md-copyleft",
	icon: "󱤹",
},
{
	title: "md-copyright",
	icon: "󰗦",
},
{
	title: "md-cordova",
	icon: "󰥘",
},
{
	title: "md-corn",
	icon: "󰞸",
},
{
	title: "md-corn_off",
	icon: "󱏯",
},
{
	title: "md-cosine_wave",
	icon: "󱑹",
},
{
	title: "md-counter",
	icon: "󰆙",
},
{
	title: "md-countertop",
	icon: "󱠜",
},
{
	title: "md-countertop_outline",
	icon: "󱠝",
},
{
	title: "md-cow",
	icon: "󰆚",
},
{
	title: "md-cow_off",
	icon: "󱣼",
},
{
	title: "md-cpu_32_bit",
	icon: "󰻟",
},
{
	title: "md-cpu_64_bit",
	icon: "󰻠",
},
{
	title: "md-cradle",
	icon: "󱦋",
},
{
	title: "md-cradle_outline",
	icon: "󱦑",
},
{
	title: "md-crane",
	icon: "󰡢",
},
{
	title: "md-creation",
	icon: "󰙴",
},
{
	title: "md-creative_commons",
	icon: "󰵫",
},
{
	title: "md-credit_card",
	icon: "󰿯",
},
{
	title: "md-credit_card_check",
	icon: "󱏐",
},
{
	title: "md-credit_card_check_outline",
	icon: "󱏑",
},
{
	title: "md-credit_card_chip",
	icon: "󱤏",
},
{
	title: "md-credit_card_chip_outline",
	icon: "󱤐",
},
{
	title: "md-credit_card_clock",
	icon: "󰻡",
},
{
	title: "md-credit_card_clock_outline",
	icon: "󰻢",
},
{
	title: "md-credit_card_edit",
	icon: "󱟗",
},
{
	title: "md-credit_card_edit_outline",
	icon: "󱟘",
},
{
	title: "md-credit_card_fast",
	icon: "󱤑",
},
{
	title: "md-credit_card_fast_outline",
	icon: "󱤒",
},
{
	title: "md-credit_card_lock",
	icon: "󱣧",
},
{
	title: "md-credit_card_lock_outline",
	icon: "󱣨",
},
{
	title: "md-credit_card_marker",
	icon: "󰚨",
},
{
	title: "md-credit_card_marker_outline",
	icon: "󰶾",
},
{
	title: "md-credit_card_minus",
	icon: "󰾬",
},
{
	title: "md-credit_card_minus_outline",
	icon: "󰾭",
},
{
	title: "md-credit_card_multiple",
	icon: "󰿰",
},
{
	title: "md-credit_card_multiple_outline",
	icon: "󰆜",
},
{
	title: "md-credit_card_off",
	icon: "󰿱",
},
{
	title: "md-credit_card_off_outline",
	icon: "󰗤",
},
{
	title: "md-credit_card_outline",
	icon: "󰆛",
},
{
	title: "md-credit_card_plus",
	icon: "󰿲",
},
{
	title: "md-credit_card_plus_outline",
	icon: "󰙶",
},
{
	title: "md-credit_card_refresh",
	icon: "󱙅",
},
{
	title: "md-credit_card_refresh_outline",
	icon: "󱙆",
},
{
	title: "md-credit_card_refund",
	icon: "󰿳",
},
{
	title: "md-credit_card_refund_outline",
	icon: "󰪨",
},
{
	title: "md-credit_card_remove",
	icon: "󰾮",
},
{
	title: "md-credit_card_remove_outline",
	icon: "󰾯",
},
{
	title: "md-credit_card_scan",
	icon: "󰿴",
},
{
	title: "md-credit_card_scan_outline",
	icon: "󰆝",
},
{
	title: "md-credit_card_search",
	icon: "󱙇",
},
{
	title: "md-credit_card_search_outline",
	icon: "󱙈",
},
{
	title: "md-credit_card_settings",
	icon: "󰿵",
},
{
	title: "md-credit_card_settings_outline",
	icon: "󰣗",
},
{
	title: "md-credit_card_sync",
	icon: "󱙉",
},
{
	title: "md-credit_card_sync_outline",
	icon: "󱙊",
},
{
	title: "md-credit_card_wireless",
	icon: "󰠂",
},
{
	title: "md-credit_card_wireless_off",
	icon: "󰕺",
},
{
	title: "md-credit_card_wireless_off_outline",
	icon: "󰕻",
},
{
	title: "md-credit_card_wireless_outline",
	icon: "󰵬",
},
{
	title: "md-cricket",
	icon: "󰵭",
},
{
	title: "md-crop",
	icon: "󰆞",
},
{
	title: "md-crop_free",
	icon: "󰆟",
},
{
	title: "md-crop_landscape",
	icon: "󰆠",
},
{
	title: "md-crop_portrait",
	icon: "󰆡",
},
{
	title: "md-crop_rotate",
	icon: "󰚖",
},
{
	title: "md-crop_square",
	icon: "󰆢",
},
{
	title: "md-cross",
	icon: "󰥓",
},
{
	title: "md-cross_bolnisi",
	icon: "󰳭",
},
{
	title: "md-cross_celtic",
	icon: "󰳵",
},
{
	title: "md-cross_outline",
	icon: "󰳶",
},
{
	title: "md-crosshairs",
	icon: "󰆣",
},
{
	title: "md-crosshairs_gps",
	icon: "󰆤",
},
{
	title: "md-crosshairs_off",
	icon: "󰽅",
},
{
	title: "md-crosshairs_question",
	icon: "󱄶",
},
{
	title: "md-crowd",
	icon: "󱥵",
},
{
	title: "md-crown",
	icon: "󰆥",
},
{
	title: "md-crown_circle",
	icon: "󱟜",
},
{
	title: "md-crown_circle_outline",
	icon: "󱟝",
},
{
	title: "md-crown_outline",
	icon: "󱇐",
},
{
	title: "md-cryengine",
	icon: "󰥙",
},
{
	title: "md-crystal_ball",
	icon: "󰬯",
},
{
	title: "md-cube",
	icon: "󰆦",
},
{
	title: "md-cube_off",
	icon: "󱐜",
},
{
	title: "md-cube_off_outline",
	icon: "󱐝",
},
{
	title: "md-cube_outline",
	icon: "󰆧",
},
{
	title: "md-cube_scan",
	icon: "󰮄",
},
{
	title: "md-cube_send",
	icon: "󰆨",
},
{
	title: "md-cube_unfolded",
	icon: "󰆩",
},
{
	title: "md-cup",
	icon: "󰆪",
},
{
	title: "md-cup_off",
	icon: "󰗥",
},
{
	title: "md-cup_off_outline",
	icon: "󱍽",
},
{
	title: "md-cup_outline",
	icon: "󱌏",
},
{
	title: "md-cup_water",
	icon: "󰆫",
},
{
	title: "md-cupboard",
	icon: "󰽆",
},
{
	title: "md-cupboard_outline",
	icon: "󰽇",
},
{
	title: "md-cupcake",
	icon: "󰥚",
},
{
	title: "md-curling",
	icon: "󰡣",
},
{
	title: "md-currency_bdt",
	icon: "󰡤",
},
{
	title: "md-currency_brl",
	icon: "󰮅",
},
{
	title: "md-currency_btc",
	icon: "󰆬",
},
{
	title: "md-currency_cny",
	icon: "󰞺",
},
{
	title: "md-currency_eth",
	icon: "󰞻",
},
{
	title: "md-currency_eur",
	icon: "󰆭",
},
{
	title: "md-currency_eur_off",
	icon: "󱌕",
},
{
	title: "md-currency_fra",
	icon: "󱨹",
},
{
	title: "md-currency_gbp",
	icon: "󰆮",
},
{
	title: "md-currency_ils",
	icon: "󰱡",
},
{
	title: "md-currency_inr",
	icon: "󰆯",
},
{
	title: "md-currency_jpy",
	icon: "󰞼",
},
{
	title: "md-currency_krw",
	icon: "󰞽",
},
{
	title: "md-currency_kzt",
	icon: "󰡥",
},
{
	title: "md-currency_mnt",
	icon: "󱔒",
},
{
	title: "md-currency_ngn",
	icon: "󰆰",
},
{
	title: "md-currency_php",
	icon: "󰧦",
},
{
	title: "md-currency_rial",
	icon: "󰺜",
},
{
	title: "md-currency_rub",
	icon: "󰆱",
},
{
	title: "md-currency_rupee",
	icon: "󱥶",
},
{
	title: "md-currency_sign",
	icon: "󰞾",
},
{
	title: "md-currency_try",
	icon: "󰆲",
},
{
	title: "md-currency_twd",
	icon: "󰞿",
},
{
	title: "md-currency_usd",
	icon: "󰇁",
},
{
	title: "md-currency_usd_off",
	icon: "󰙺",
},
{
	title: "md-current_ac",
	icon: "󱒀",
},
{
	title: "md-current_dc",
	icon: "󰥜",
},
{
	title: "md-cursor_default",
	icon: "󰇀",
},
{
	title: "md-cursor_default_click",
	icon: "󰳽",
},
{
	title: "md-cursor_default_click_outline",
	icon: "󰳾",
},
{
	title: "md-cursor_default_gesture",
	icon: "󱄧",
},
{
	title: "md-cursor_default_gesture_outline",
	icon: "󱄨",
},
{
	title: "md-cursor_default_outline",
	icon: "󰆿",
},
{
	title: "md-cursor_move",
	icon: "󰆾",
},
{
	title: "md-cursor_pointer",
	icon: "󰆽",
},
{
	title: "md-cursor_text",
	icon: "󰗧",
},
{
	title: "md-curtains",
	icon: "󱡆",
},
{
	title: "md-curtains_closed",
	icon: "󱡇",
},
{
	title: "md-cylinder",
	icon: "󱥎",
},
{
	title: "md-cylinder_off",
	icon: "󱥏",
},
{
	title: "md-dance_ballroom",
	icon: "󱗻",
},
{
	title: "md-dance_pole",
	icon: "󱕸",
},
{
	title: "md-data_matrix",
	icon: "󱔼",
},
{
	title: "md-data_matrix_edit",
	icon: "󱔽",
},
{
	title: "md-data_matrix_minus",
	icon: "󱔾",
},
{
	title: "md-data_matrix_plus",
	icon: "󱔿",
},
{
	title: "md-data_matrix_remove",
	icon: "󱕀",
},
{
	title: "md-data_matrix_scan",
	icon: "󱕁",
},
{
	title: "md-database",
	icon: "󰆼",
},
{
	title: "md-database_alert",
	icon: "󱘺",
},
{
	title: "md-database_alert_outline",
	icon: "󱘤",
},
{
	title: "md-database_arrow_down",
	icon: "󱘻",
},
{
	title: "md-database_arrow_down_outline",
	icon: "󱘥",
},
{
	title: "md-database_arrow_left",
	icon: "󱘼",
},
{
	title: "md-database_arrow_left_outline",
	icon: "󱘦",
},
{
	title: "md-database_arrow_right",
	icon: "󱘽",
},
{
	title: "md-database_arrow_right_outline",
	icon: "󱘧",
},
{
	title: "md-database_arrow_up",
	icon: "󱘾",
},
{
	title: "md-database_arrow_up_outline",
	icon: "󱘨",
},
{
	title: "md-database_check",
	icon: "󰪩",
},
{
	title: "md-database_check_outline",
	icon: "󱘩",
},
{
	title: "md-database_clock",
	icon: "󱘿",
},
{
	title: "md-database_clock_outline",
	icon: "󱘪",
},
{
	title: "md-database_cog",
	icon: "󱙋",
},
{
	title: "md-database_cog_outline",
	icon: "󱙌",
},
{
	title: "md-database_edit",
	icon: "󰮆",
},
{
	title: "md-database_edit_outline",
	icon: "󱘫",
},
{
	title: "md-database_export",
	icon: "󰥞",
},
{
	title: "md-database_export_outline",
	icon: "󱘬",
},
{
	title: "md-database_eye",
	icon: "󱤟",
},
{
	title: "md-database_eye_off",
	icon: "󱤠",
},
{
	title: "md-database_eye_off_outline",
	icon: "󱤡",
},
{
	title: "md-database_eye_outline",
	icon: "󱤢",
},
{
	title: "md-database_import",
	icon: "󰥝",
},
{
	title: "md-database_import_outline",
	icon: "󱘭",
},
{
	title: "md-database_lock",
	icon: "󰪪",
},
{
	title: "md-database_lock_outline",
	icon: "󱘮",
},
{
	title: "md-database_marker",
	icon: "󱋶",
},
{
	title: "md-database_marker_outline",
	icon: "󱘯",
},
{
	title: "md-database_minus",
	icon: "󰆻",
},
{
	title: "md-database_minus_outline",
	icon: "󱘰",
},
{
	title: "md-database_off",
	icon: "󱙀",
},
{
	title: "md-database_off_outline",
	icon: "󱘱",
},
{
	title: "md-database_outline",
	icon: "󱘲",
},
{
	title: "md-database_plus",
	icon: "󰆺",
},
{
	title: "md-database_plus_outline",
	icon: "󱘳",
},
{
	title: "md-database_refresh",
	icon: "󰗂",
},
{
	title: "md-database_refresh_outline",
	icon: "󱘴",
},
{
	title: "md-database_remove",
	icon: "󰴀",
},
{
	title: "md-database_remove_outline",
	icon: "󱘵",
},
{
	title: "md-database_search",
	icon: "󰡦",
},
{
	title: "md-database_search_outline",
	icon: "󱘶",
},
{
	title: "md-database_settings",
	icon: "󰴁",
},
{
	title: "md-database_settings_outline",
	icon: "󱘷",
},
{
	title: "md-database_sync",
	icon: "󰳿",
},
{
	title: "md-database_sync_outline",
	icon: "󱘸",
},
{
	title: "md-death_star",
	icon: "󰣘",
},
{
	title: "md-death_star_variant",
	icon: "󰣙",
},
{
	title: "md-deathly_hallows",
	icon: "󰮇",
},
{
	title: "md-debian",
	icon: "󰣚",
},
{
	title: "md-debug_step_into",
	icon: "󰆹",
},
{
	title: "md-debug_step_out",
	icon: "󰆸",
},
{
	title: "md-debug_step_over",
	icon: "󰆷",
},
{
	title: "md-decagram",
	icon: "󰝬",
},
{
	title: "md-decagram_outline",
	icon: "󰝭",
},
{
	title: "md-decimal",
	icon: "󱂡",
},
{
	title: "md-decimal_comma",
	icon: "󱂢",
},
{
	title: "md-decimal_comma_decrease",
	icon: "󱂣",
},
{
	title: "md-decimal_comma_increase",
	icon: "󱂤",
},
{
	title: "md-decimal_decrease",
	icon: "󰆶",
},
{
	title: "md-decimal_increase",
	icon: "󰆵",
},
{
	title: "md-delete",
	icon: "󰆴",
},
{
	title: "md-delete_alert",
	icon: "󱂥",
},
{
	title: "md-delete_alert_outline",
	icon: "󱂦",
},
{
	title: "md-delete_circle",
	icon: "󰚃",
},
{
	title: "md-delete_circle_outline",
	icon: "󰮈",
},
{
	title: "md-delete_clock",
	icon: "󱕖",
},
{
	title: "md-delete_clock_outline",
	icon: "󱕗",
},
{
	title: "md-delete_empty",
	icon: "󰛌",
},
{
	title: "md-delete_empty_outline",
	icon: "󰺝",
},
{
	title: "md-delete_forever",
	icon: "󰗨",
},
{
	title: "md-delete_forever_outline",
	icon: "󰮉",
},
{
	title: "md-delete_off",
	icon: "󱂧",
},
{
	title: "md-delete_off_outline",
	icon: "󱂨",
},
{
	title: "md-delete_outline",
	icon: "󰧧",
},
{
	title: "md-delete_restore",
	icon: "󰠙",
},
{
	title: "md-delete_sweep",
	icon: "󰗩",
},
{
	title: "md-delete_sweep_outline",
	icon: "󰱢",
},
{
	title: "md-delete_variant",
	icon: "󰆳",
},
{
	title: "md-delta",
	icon: "󰇂",
},
{
	title: "md-desk",
	icon: "󱈹",
},
{
	title: "md-desk_lamp",
	icon: "󰥟",
},
{
	title: "md-deskphone",
	icon: "󰇃",
},
{
	title: "md-desktop_classic",
	icon: "󰟀",
},
{
	title: "md-desktop_mac",
	icon: "󰇄",
},
{
	title: "md-desktop_mac_dashboard",
	icon: "󰧨",
},
{
	title: "md-desktop_tower",
	icon: "󰇅",
},
{
	title: "md-desktop_tower_monitor",
	icon: "󰪫",
},
{
	title: "md-details",
	icon: "󰇆",
},
{
	title: "md-dev_to",
	icon: "󰵮",
},
{
	title: "md-developer_board",
	icon: "󰚗",
},
{
	title: "md-deviantart",
	icon: "󰇇",
},
{
	title: "md-devices",
	icon: "󰾰",
},
{
	title: "md-dharmachakra",
	icon: "󰥋",
},
{
	title: "md-diabetes",
	icon: "󱄦",
},
{
	title: "md-dialpad",
	icon: "󰘜",
},
{
	title: "md-diameter",
	icon: "󰱣",
},
{
	title: "md-diameter_outline",
	icon: "󰱤",
},
{
	title: "md-diameter_variant",
	icon: "󰱥",
},
{
	title: "md-diamond",
	icon: "󰮊",
},
{
	title: "md-diamond_outline",
	icon: "󰮋",
},
{
	title: "md-diamond_stone",
	icon: "󰇈",
},
{
	title: "md-dice_1",
	icon: "󰇊",
},
{
	title: "md-dice_1_outline",
	icon: "󱅊",
},
{
	title: "md-dice_2",
	icon: "󰇋",
},
{
	title: "md-dice_2_outline",
	icon: "󱅋",
},
{
	title: "md-dice_3",
	icon: "󰇌",
},
{
	title: "md-dice_3_outline",
	icon: "󱅌",
},
{
	title: "md-dice_4",
	icon: "󰇍",
},
{
	title: "md-dice_4_outline",
	icon: "󱅍",
},
{
	title: "md-dice_5",
	icon: "󰇎",
},
{
	title: "md-dice_5_outline",
	icon: "󱅎",
},
{
	title: "md-dice_6",
	icon: "󰇏",
},
{
	title: "md-dice_6_outline",
	icon: "󱅏",
},
{
	title: "md-dice_d10",
	icon: "󱅓",
},
{
	title: "md-dice_d10_outline",
	icon: "󰝯",
},
{
	title: "md-dice_d12",
	icon: "󱅔",
},
{
	title: "md-dice_d12_outline",
	icon: "󰡧",
},
{
	title: "md-dice_d20",
	icon: "󱅕",
},
{
	title: "md-dice_d20_outline",
	icon: "󰗪",
},
{
	title: "md-dice_d4",
	icon: "󱅐",
},
{
	title: "md-dice_d4_outline",
	icon: "󰗫",
},
{
	title: "md-dice_d6",
	icon: "󱅑",
},
{
	title: "md-dice_d6_outline",
	icon: "󰗭",
},
{
	title: "md-dice_d8",
	icon: "󱅒",
},
{
	title: "md-dice_d8_outline",
	icon: "󰗬",
},
{
	title: "md-dice_multiple",
	icon: "󰝮",
},
{
	title: "md-dice_multiple_outline",
	icon: "󱅖",
},
{
	title: "md-digital_ocean",
	icon: "󱈷",
},
{
	title: "md-dip_switch",
	icon: "󰟁",
},
{
	title: "md-directions",
	icon: "󰇐",
},
{
	title: "md-directions_fork",
	icon: "󰙁",
},
{
	title: "md-disc",
	icon: "󰗮",
},
{
	title: "md-disc_alert",
	icon: "󰇑",
},
{
	title: "md-disc_player",
	icon: "󰥠",
},
{
	title: "md-discord",
	icon: "󰙯",
},
{
	title: "md-dishwasher",
	icon: "󰪬",
},
{
	title: "md-dishwasher_alert",
	icon: "󱆸",
},
{
	title: "md-dishwasher_off",
	icon: "󱆹",
},
{
	title: "md-disqus",
	icon: "󰇒",
},
{
	title: "md-distribute_horizontal_center",
	icon: "󱇉",
},
{
	title: "md-distribute_horizontal_left",
	icon: "󱇈",
},
{
	title: "md-distribute_horizontal_right",
	icon: "󱇊",
},
{
	title: "md-distribute_vertical_bottom",
	icon: "󱇋",
},
{
	title: "md-distribute_vertical_center",
	icon: "󱇌",
},
{
	title: "md-distribute_vertical_top",
	icon: "󱇍",
},
{
	title: "md-diversify",
	icon: "󱡷",
},
{
	title: "md-diving",
	icon: "󱥷",
},
{
	title: "md-diving_flippers",
	icon: "󰶿",
},
{
	title: "md-diving_helmet",
	icon: "󰷀",
},
{
	title: "md-diving_scuba",
	icon: "󰷁",
},
{
	title: "md-diving_scuba_flag",
	icon: "󰷂",
},
{
	title: "md-diving_scuba_tank",
	icon: "󰷃",
},
{
	title: "md-diving_scuba_tank_multiple",
	icon: "󰷄",
},
{
	title: "md-diving_snorkel",
	icon: "󰷅",
},
{
	title: "md-division",
	icon: "󰇔",
},
{
	title: "md-division_box",
	icon: "󰇕",
},
{
	title: "md-dlna",
	icon: "󰩁",
},
{
	title: "md-dna",
	icon: "󰚄",
},
{
	title: "md-dns",
	icon: "󰇖",
},
{
	title: "md-dns_outline",
	icon: "󰮌",
},
{
	title: "md-dock_bottom",
	icon: "󱂩",
},
{
	title: "md-dock_left",
	icon: "󱂪",
},
{
	title: "md-dock_right",
	icon: "󱂫",
},
{
	title: "md-dock_top",
	icon: "󱔓",
},
{
	title: "md-dock_window",
	icon: "󱂬",
},
{
	title: "md-docker",
	icon: "󰡨",
},
{
	title: "md-doctor",
	icon: "󰩂",
},
{
	title: "md-dog",
	icon: "󰩃",
},
{
	title: "md-dog_service",
	icon: "󰪭",
},
{
	title: "md-dog_side",
	icon: "󰩄",
},
{
	title: "md-dog_side_off",
	icon: "󱛮",
},
{
	title: "md-dolby",
	icon: "󰚳",
},
{
	title: "md-dolly",
	icon: "󰺞",
},
{
	title: "md-dolphin",
	icon: "󱢴",
},
{
	title: "md-domain",
	icon: "󰇗",
},
{
	title: "md-domain_off",
	icon: "󰵯",
},
{
	title: "md-domain_plus",
	icon: "󱂭",
},
{
	title: "md-domain_remove",
	icon: "󱂮",
},
{
	title: "md-dome_light",
	icon: "󱐞",
},
{
	title: "md-domino_mask",
	icon: "󱀣",
},
{
	title: "md-donkey",
	icon: "󰟂",
},
{
	title: "md-door",
	icon: "󰠚",
},
{
	title: "md-door_closed",
	icon: "󰠛",
},
{
	title: "md-door_closed_lock",
	icon: "󱂯",
},
{
	title: "md-door_open",
	icon: "󰠜",
},
{
	title: "md-door_sliding",
	icon: "󱠞",
},
{
	title: "md-door_sliding_lock",
	icon: "󱠟",
},
{
	title: "md-door_sliding_open",
	icon: "󱠠",
},
{
	title: "md-doorbell",
	icon: "󱋦",
},
{
	title: "md-doorbell_video",
	icon: "󰡩",
},
{
	title: "md-dot_net",
	icon: "󰪮",
},
{
	title: "md-dots_circle",
	icon: "󱥸",
},
{
	title: "md-dots_grid",
	icon: "󱗼",
},
{
	title: "md-dots_hexagon",
	icon: "󱗿",
},
{
	title: "md-dots_horizontal",
	icon: "󰇘",
},
{
	title: "md-dots_horizontal_circle",
	icon: "󰟃",
},
{
	title: "md-dots_horizontal_circle_outline",
	icon: "󰮍",
},
{
	title: "md-dots_square",
	icon: "󱗽",
},
{
	title: "md-dots_triangle",
	icon: "󱗾",
},
{
	title: "md-dots_vertical",
	icon: "󰇙",
},
{
	title: "md-dots_vertical_circle",
	icon: "󰟄",
},
{
	title: "md-dots_vertical_circle_outline",
	icon: "󰮎",
},
{
	title: "md-download",
	icon: "󰇚",
},
{
	title: "md-download_box",
	icon: "󱑢",
},
{
	title: "md-download_box_outline",
	icon: "󱑣",
},
{
	title: "md-download_circle",
	icon: "󱑤",
},
{
	title: "md-download_circle_outline",
	icon: "󱑥",
},
{
	title: "md-download_lock",
	icon: "󱌠",
},
{
	title: "md-download_lock_outline",
	icon: "󱌡",
},
{
	title: "md-download_multiple",
	icon: "󰧩",
},
{
	title: "md-download_network",
	icon: "󰛴",
},
{
	title: "md-download_network_outline",
	icon: "󰱦",
},
{
	title: "md-download_off",
	icon: "󱂰",
},
{
	title: "md-download_off_outline",
	icon: "󱂱",
},
{
	title: "md-download_outline",
	icon: "󰮏",
},
{
	title: "md-drag",
	icon: "󰇛",
},
{
	title: "md-drag_horizontal",
	icon: "󰇜",
},
{
	title: "md-drag_horizontal_variant",
	icon: "󱋰",
},
{
	title: "md-drag_variant",
	icon: "󰮐",
},
{
	title: "md-drag_vertical",
	icon: "󰇝",
},
{
	title: "md-drag_vertical_variant",
	icon: "󱋱",
},
{
	title: "md-drama_masks",
	icon: "󰴂",
},
{
	title: "md-draw",
	icon: "󰽉",
},
{
	title: "md-draw_pen",
	icon: "󱦹",
},
{
	title: "md-drawing",
	icon: "󰇞",
},
{
	title: "md-drawing_box",
	icon: "󰇟",
},
{
	title: "md-dresser",
	icon: "󰽊",
},
{
	title: "md-dresser_outline",
	icon: "󰽋",
},
{
	title: "md-drone",
	icon: "󰇢",
},
{
	title: "md-dropbox",
	icon: "󰇣",
},
{
	title: "md-drupal",
	icon: "󰇤",
},
{
	title: "md-duck",
	icon: "󰇥",
},
{
	title: "md-dumbbell",
	icon: "󰇦",
},
{
	title: "md-dump_truck",
	icon: "󰱧",
},
{
	title: "md-ear_hearing",
	icon: "󰟅",
},
{
	title: "md-ear_hearing_loop",
	icon: "󱫮",
},
{
	title: "md-ear_hearing_off",
	icon: "󰩅",
},
{
	title: "md-earbuds",
	icon: "󱡏",
},
{
	title: "md-earbuds_off",
	icon: "󱡐",
},
{
	title: "md-earbuds_off_outline",
	icon: "󱡑",
},
{
	title: "md-earbuds_outline",
	icon: "󱡒",
},
{
	title: "md-earth",
	icon: "󰇧",
},
{
	title: "md-earth_arrow_right",
	icon: "󱌑",
},
{
	title: "md-earth_box",
	icon: "󰛍",
},
{
	title: "md-earth_box_minus",
	icon: "󱐇",
},
{
	title: "md-earth_box_off",
	icon: "󰛎",
},
{
	title: "md-earth_box_plus",
	icon: "󱐆",
},
{
	title: "md-earth_box_remove",
	icon: "󱐈",
},
{
	title: "md-earth_minus",
	icon: "󱐄",
},
{
	title: "md-earth_off",
	icon: "󰇨",
},
{
	title: "md-earth_plus",
	icon: "󱐃",
},
{
	title: "md-earth_remove",
	icon: "󱐅",
},
{
	title: "md-egg",
	icon: "󰪯",
},
{
	title: "md-egg_easter",
	icon: "󰪰",
},
{
	title: "md-egg_fried",
	icon: "󱡊",
},
{
	title: "md-egg_off",
	icon: "󱏰",
},
{
	title: "md-egg_off_outline",
	icon: "󱏱",
},
{
	title: "md-egg_outline",
	icon: "󱏲",
},
{
	title: "md-eiffel_tower",
	icon: "󱕫",
},
{
	title: "md-eight_track",
	icon: "󰧪",
},
{
	title: "md-eject",
	icon: "󰇪",
},
{
	title: "md-eject_outline",
	icon: "󰮑",
},
{
	title: "md-electric_switch",
	icon: "󰺟",
},
{
	title: "md-electric_switch_closed",
	icon: "󱃙",
},
{
	title: "md-electron_framework",
	icon: "󱀤",
},
{
	title: "md-elephant",
	icon: "󰟆",
},
{
	title: "md-elevation_decline",
	icon: "󰇫",
},
{
	title: "md-elevation_rise",
	icon: "󰇬",
},
{
	title: "md-elevator",
	icon: "󰇭",
},
{
	title: "md-elevator_down",
	icon: "󱋂",
},
{
	title: "md-elevator_passenger",
	icon: "󱎁",
},
{
	title: "md-elevator_passenger_off",
	icon: "󱥹",
},
{
	title: "md-elevator_passenger_off_outline",
	icon: "󱥺",
},
{
	title: "md-elevator_passenger_outline",
	icon: "󱥻",
},
{
	title: "md-elevator_up",
	icon: "󱋁",
},
{
	title: "md-ellipse",
	icon: "󰺠",
},
{
	title: "md-ellipse_outline",
	icon: "󰺡",
},
{
	title: "md-email",
	icon: "󰇮",
},
{
	title: "md-email_alert",
	icon: "󰛏",
},
{
	title: "md-email_alert_outline",
	icon: "󰵂",
},
{
	title: "md-email_box",
	icon: "󰴃",
},
{
	title: "md-email_check",
	icon: "󰪱",
},
{
	title: "md-email_check_outline",
	icon: "󰪲",
},
{
	title: "md-email_edit",
	icon: "󰻣",
},
{
	title: "md-email_edit_outline",
	icon: "󰻤",
},
{
	title: "md-email_fast",
	icon: "󱡯",
},
{
	title: "md-email_fast_outline",
	icon: "󱡰",
},
{
	title: "md-email_lock",
	icon: "󰇱",
},
{
	title: "md-email_mark_as_unread",
	icon: "󰮒",
},
{
	title: "md-email_minus",
	icon: "󰻥",
},
{
	title: "md-email_minus_outline",
	icon: "󰻦",
},
{
	title: "md-email_multiple",
	icon: "󰻧",
},
{
	title: "md-email_multiple_outline",
	icon: "󰻨",
},
{
	title: "md-email_newsletter",
	icon: "󰾱",
},
{
	title: "md-email_off",
	icon: "󱏣",
},
{
	title: "md-email_off_outline",
	icon: "󱏤",
},
{
	title: "md-email_open",
	icon: "󰇯",
},
{
	title: "md-email_open_multiple",
	icon: "󰻩",
},
{
	title: "md-email_open_multiple_outline",
	icon: "󰻪",
},
{
	title: "md-email_open_outline",
	icon: "󰗯",
},
{
	title: "md-email_outline",
	icon: "󰇰",
},
{
	title: "md-email_plus",
	icon: "󰧫",
},
{
	title: "md-email_plus_outline",
	icon: "󰧬",
},
{
	title: "md-email_receive",
	icon: "󱃚",
},
{
	title: "md-email_receive_outline",
	icon: "󱃛",
},
{
	title: "md-email_remove",
	icon: "󱙡",
},
{
	title: "md-email_remove_outline",
	icon: "󱙢",
},
{
	title: "md-email_seal",
	icon: "󱥛",
},
{
	title: "md-email_seal_outline",
	icon: "󱥜",
},
{
	title: "md-email_search",
	icon: "󰥡",
},
{
	title: "md-email_search_outline",
	icon: "󰥢",
},
{
	title: "md-email_send",
	icon: "󱃜",
},
{
	title: "md-email_send_outline",
	icon: "󱃝",
},
{
	title: "md-email_sync",
	icon: "󱋇",
},
{
	title: "md-email_sync_outline",
	icon: "󱋈",
},
{
	title: "md-email_variant",
	icon: "󰗰",
},
{
	title: "md-ember",
	icon: "󰬰",
},
{
	title: "md-emby",
	icon: "󰚴",
},
{
	title: "md-emoticon",
	icon: "󰱨",
},
{
	title: "md-emoticon_angry",
	icon: "󰱩",
},
{
	title: "md-emoticon_angry_outline",
	icon: "󰱪",
},
{
	title: "md-emoticon_confused",
	icon: "󱃞",
},
{
	title: "md-emoticon_confused_outline",
	icon: "󱃟",
},
{
	title: "md-emoticon_cool",
	icon: "󰱫",
},
{
	title: "md-emoticon_cool_outline",
	icon: "󰇳",
},
{
	title: "md-emoticon_cry",
	icon: "󰱬",
},
{
	title: "md-emoticon_cry_outline",
	icon: "󰱭",
},
{
	title: "md-emoticon_dead",
	icon: "󰱮",
},
{
	title: "md-emoticon_dead_outline",
	icon: "󰚛",
},
{
	title: "md-emoticon_devil",
	icon: "󰱯",
},
{
	title: "md-emoticon_devil_outline",
	icon: "󰇴",
},
{
	title: "md-emoticon_excited",
	icon: "󰱰",
},
{
	title: "md-emoticon_excited_outline",
	icon: "󰚜",
},
{
	title: "md-emoticon_frown",
	icon: "󰽌",
},
{
	title: "md-emoticon_frown_outline",
	icon: "󰽍",
},
{
	title: "md-emoticon_happy",
	icon: "󰱱",
},
{
	title: "md-emoticon_happy_outline",
	icon: "󰇵",
},
{
	title: "md-emoticon_kiss",
	icon: "󰱲",
},
{
	title: "md-emoticon_kiss_outline",
	icon: "󰱳",
},
{
	title: "md-emoticon_lol",
	icon: "󱈔",
},
{
	title: "md-emoticon_lol_outline",
	icon: "󱈕",
},
{
	title: "md-emoticon_neutral",
	icon: "󰱴",
},
{
	title: "md-emoticon_neutral_outline",
	icon: "󰇶",
},
{
	title: "md-emoticon_outline",
	icon: "󰇲",
},
{
	title: "md-emoticon_poop",
	icon: "󰇷",
},
{
	title: "md-emoticon_poop_outline",
	icon: "󰱵",
},
{
	title: "md-emoticon_sad",
	icon: "󰱶",
},
{
	title: "md-emoticon_sad_outline",
	icon: "󰇸",
},
{
	title: "md-emoticon_sick",
	icon: "󱕼",
},
{
	title: "md-emoticon_sick_outline",
	icon: "󱕽",
},
{
	title: "md-emoticon_tongue",
	icon: "󰇹",
},
{
	title: "md-emoticon_tongue_outline",
	icon: "󰱷",
},
{
	title: "md-emoticon_wink",
	icon: "󰱸",
},
{
	title: "md-emoticon_wink_outline",
	icon: "󰱹",
},
{
	title: "md-engine",
	icon: "󰇺",
},
{
	title: "md-engine_off",
	icon: "󰩆",
},
{
	title: "md-engine_off_outline",
	icon: "󰩇",
},
{
	title: "md-engine_outline",
	icon: "󰇻",
},
{
	title: "md-epsilon",
	icon: "󱃠",
},
{
	title: "md-equal",
	icon: "󰇼",
},
{
	title: "md-equal_box",
	icon: "󰇽",
},
{
	title: "md-equalizer",
	icon: "󰺢",
},
{
	title: "md-equalizer_outline",
	icon: "󰺣",
},
{
	title: "md-eraser",
	icon: "󰇾",
},
{
	title: "md-eraser_variant",
	icon: "󰙂",
},
{
	title: "md-escalator",
	icon: "󰇿",
},
{
	title: "md-escalator_box",
	icon: "󱎙",
},
{
	title: "md-escalator_down",
	icon: "󱋀",
},
{
	title: "md-escalator_up",
	icon: "󱊿",
},
{
	title: "md-eslint",
	icon: "󰱺",
},
{
	title: "md-et",
	icon: "󰪳",
},
{
	title: "md-ethereum",
	icon: "󰡪",
},
{
	title: "md-ethernet",
	icon: "󰈀",
},
{
	title: "md-ethernet_cable",
	icon: "󰈁",
},
{
	title: "md-ethernet_cable_off",
	icon: "󰈂",
},
{
	title: "md-ev_plug_ccs1",
	icon: "󱔙",
},
{
	title: "md-ev_plug_ccs2",
	icon: "󱔚",
},
{
	title: "md-ev_plug_chademo",
	icon: "󱔛",
},
{
	title: "md-ev_plug_tesla",
	icon: "󱔜",
},
{
	title: "md-ev_plug_type1",
	icon: "󱔝",
},
{
	title: "md-ev_plug_type2",
	icon: "󱔞",
},
{
	title: "md-ev_station",
	icon: "󰗱",
},
{
	title: "md-evernote",
	icon: "󰈄",
},
{
	title: "md-excavator",
	icon: "󱀥",
},
{
	title: "md-exclamation",
	icon: "󰈅",
},
{
	title: "md-exclamation_thick",
	icon: "󱈸",
},
{
	title: "md-exit_run",
	icon: "󰩈",
},
{
	title: "md-exit_to_app",
	icon: "󰈆",
},
{
	title: "md-expand_all",
	icon: "󰪴",
},
{
	title: "md-expand_all_outline",
	icon: "󰪵",
},
{
	title: "md-expansion_card",
	icon: "󰢮",
},
{
	title: "md-expansion_card_variant",
	icon: "󰾲",
},
{
	title: "md-exponent",
	icon: "󰥣",
},
{
	title: "md-exponent_box",
	icon: "󰥤",
},
{
	title: "md-export",
	icon: "󰈇",
},
{
	title: "md-export_variant",
	icon: "󰮓",
},
{
	title: "md-eye",
	icon: "󰈈",
},
{
	title: "md-eye_arrow_left",
	icon: "󱣽",
},
{
	title: "md-eye_arrow_left_outline",
	icon: "󱣾",
},
{
	title: "md-eye_arrow_right",
	icon: "󱣿",
},
{
	title: "md-eye_arrow_right_outline",
	icon: "󱤀",
},
{
	title: "md-eye_check",
	icon: "󰴄",
},
{
	title: "md-eye_check_outline",
	icon: "󰴅",
},
{
	title: "md-eye_circle",
	icon: "󰮔",
},
{
	title: "md-eye_circle_outline",
	icon: "󰮕",
},
{
	title: "md-eye_minus",
	icon: "󱀦",
},
{
	title: "md-eye_minus_outline",
	icon: "󱀧",
},
{
	title: "md-eye_off",
	icon: "󰈉",
},
{
	title: "md-eye_off_outline",
	icon: "󰛑",
},
{
	title: "md-eye_outline",
	icon: "󰛐",
},
{
	title: "md-eye_plus",
	icon: "󰡫",
},
{
	title: "md-eye_plus_outline",
	icon: "󰡬",
},
{
	title: "md-eye_refresh",
	icon: "󱥼",
},
{
	title: "md-eye_refresh_outline",
	icon: "󱥽",
},
{
	title: "md-eye_remove",
	icon: "󱗣",
},
{
	title: "md-eye_remove_outline",
	icon: "󱗤",
},
{
	title: "md-eye_settings",
	icon: "󰡭",
},
{
	title: "md-eye_settings_outline",
	icon: "󰡮",
},
{
	title: "md-eyedropper",
	icon: "󰈊",
},
{
	title: "md-eyedropper_minus",
	icon: "󱏝",
},
{
	title: "md-eyedropper_off",
	icon: "󱏟",
},
{
	title: "md-eyedropper_plus",
	icon: "󱏜",
},
{
	title: "md-eyedropper_remove",
	icon: "󱏞",
},
{
	title: "md-eyedropper_variant",
	icon: "󰈋",
},
{
	title: "md-face_agent",
	icon: "󰵰",
},
{
	title: "md-face_man",
	icon: "󰙃",
},
{
	title: "md-face_man_outline",
	icon: "󰮖",
},
{
	title: "md-face_man_profile",
	icon: "󰙄",
},
{
	title: "md-face_man_shimmer",
	icon: "󱗌",
},
{
	title: "md-face_man_shimmer_outline",
	icon: "󱗍",
},
{
	title: "md-face_mask",
	icon: "󱖆",
},
{
	title: "md-face_mask_outline",
	icon: "󱖇",
},
{
	title: "md-face_recognition",
	icon: "󰱻",
},
{
	title: "md-face_woman",
	icon: "󱁷",
},
{
	title: "md-face_woman_outline",
	icon: "󱁸",
},
{
	title: "md-face_woman_profile",
	icon: "󱁶",
},
{
	title: "md-face_woman_shimmer",
	icon: "󱗎",
},
{
	title: "md-face_woman_shimmer_outline",
	icon: "󱗏",
},
{
	title: "md-facebook",
	icon: "󰈌",
},
{
	title: "md-facebook_gaming",
	icon: "󰟝",
},
{
	title: "md-facebook_messenger",
	icon: "󰈎",
},
{
	title: "md-facebook_workplace",
	icon: "󰬱",
},
{
	title: "md-factory",
	icon: "󰈏",
},
{
	title: "md-family_tree",
	icon: "󱘎",
},
{
	title: "md-fan",
	icon: "󰈐",
},
{
	title: "md-fan_alert",
	icon: "󱑬",
},
{
	title: "md-fan_auto",
	icon: "󱜝",
},
{
	title: "md-fan_chevron_down",
	icon: "󱑭",
},
{
	title: "md-fan_chevron_up",
	icon: "󱑮",
},
{
	title: "md-fan_clock",
	icon: "󱨺",
},
{
	title: "md-fan_minus",
	icon: "󱑰",
},
{
	title: "md-fan_off",
	icon: "󰠝",
},
{
	title: "md-fan_plus",
	icon: "󱑯",
},
{
	title: "md-fan_remove",
	icon: "󱑱",
},
{
	title: "md-fan_speed_1",
	icon: "󱑲",
},
{
	title: "md-fan_speed_2",
	icon: "󱑳",
},
{
	title: "md-fan_speed_3",
	icon: "󱑴",
},
{
	title: "md-fast_forward",
	icon: "󰈑",
},
{
	title: "md-fast_forward_10",
	icon: "󰵱",
},
{
	title: "md-fast_forward_15",
	icon: "󱤺",
},
{
	title: "md-fast_forward_30",
	icon: "󰴆",
},
{
	title: "md-fast_forward_5",
	icon: "󱇸",
},
{
	title: "md-fast_forward_60",
	icon: "󱘋",
},
{
	title: "md-fast_forward_outline",
	icon: "󰛒",
},
{
	title: "md-fax",
	icon: "󰈒",
},
{
	title: "md-feather",
	icon: "󰛓",
},
{
	title: "md-feature_search",
	icon: "󰩉",
},
{
	title: "md-feature_search_outline",
	icon: "󰩊",
},
{
	title: "md-fedora",
	icon: "󰣛",
},
{
	title: "md-fence",
	icon: "󱞚",
},
{
	title: "md-fence_electric",
	icon: "󱟶",
},
{
	title: "md-fencing",
	icon: "󱓁",
},
{
	title: "md-ferris_wheel",
	icon: "󰺤",
},
{
	title: "md-ferry",
	icon: "󰈓",
},
{
	title: "md-file",
	icon: "󰈔",
},
{
	title: "md-file_account",
	icon: "󰜻",
},
{
	title: "md-file_account_outline",
	icon: "󱀨",
},
{
	title: "md-file_alert",
	icon: "󰩋",
},
{
	title: "md-file_alert_outline",
	icon: "󰩌",
},
{
	title: "md-file_arrow_left_right",
	icon: "󱪓",
},
{
	title: "md-file_arrow_left_right_outline",
	icon: "󱪔",
},
{
	title: "md-file_arrow_up_down",
	icon: "󱪕",
},
{
	title: "md-file_arrow_up_down_outline",
	icon: "󱪖",
},
{
	title: "md-file_cabinet",
	icon: "󰪶",
},
{
	title: "md-file_cad",
	icon: "󰻫",
},
{
	title: "md-file_cad_box",
	icon: "󰻬",
},
{
	title: "md-file_cancel",
	icon: "󰷆",
},
{
	title: "md-file_cancel_outline",
	icon: "󰷇",
},
{
	title: "md-file_certificate",
	icon: "󱆆",
},
{
	title: "md-file_certificate_outline",
	icon: "󱆇",
},
{
	title: "md-file_chart",
	icon: "󰈕",
},
{
	title: "md-file_chart_check",
	icon: "󱧆",
},
{
	title: "md-file_chart_check_outline",
	icon: "󱧇",
},
{
	title: "md-file_chart_outline",
	icon: "󱀩",
},
{
	title: "md-file_check",
	icon: "󰈖",
},
{
	title: "md-file_check_outline",
	icon: "󰸩",
},
{
	title: "md-file_clock",
	icon: "󱋡",
},
{
	title: "md-file_clock_outline",
	icon: "󱋢",
},
{
	title: "md-file_cloud",
	icon: "󰈗",
},
{
	title: "md-file_cloud_outline",
	icon: "󱀪",
},
{
	title: "md-file_code",
	icon: "󰈮",
},
{
	title: "md-file_code_outline",
	icon: "󱀫",
},
{
	title: "md-file_cog",
	icon: "󱁻",
},
{
	title: "md-file_cog_outline",
	icon: "󱁼",
},
{
	title: "md-file_compare",
	icon: "󰢪",
},
{
	title: "md-file_delimited",
	icon: "󰈘",
},
{
	title: "md-file_delimited_outline",
	icon: "󰺥",
},
{
	title: "md-file_document",
	icon: "󰈙",
},
{
	title: "md-file_document_alert",
	icon: "󱪗",
},
{
	title: "md-file_document_alert_outline",
	icon: "󱪘",
},
{
	title: "md-file_document_check",
	icon: "󱪙",
},
{
	title: "md-file_document_check_outline",
	icon: "󱪚",
},
{
	title: "md-file_document_edit",
	icon: "󰷈",
},
{
	title: "md-file_document_edit_outline",
	icon: "󰷉",
},
{
	title: "md-file_document_minus",
	icon: "󱪛",
},
{
	title: "md-file_document_minus_outline",
	icon: "󱪜",
},
{
	title: "md-file_document_multiple",
	icon: "󱔗",
},
{
	title: "md-file_document_multiple_outline",
	icon: "󱔘",
},
{
	title: "md-file_document_outline",
	icon: "󰧮",
},
{
	title: "md-file_document_plus",
	icon: "󱪝",
},
{
	title: "md-file_document_plus_outline",
	icon: "󱪞",
},
{
	title: "md-file_document_remove",
	icon: "󱪟",
},
{
	title: "md-file_document_remove_outline",
	icon: "󱪠",
},
{
	title: "md-file_download",
	icon: "󰥥",
},
{
	title: "md-file_download_outline",
	icon: "󰥦",
},
{
	title: "md-file_edit",
	icon: "󱇧",
},
{
	title: "md-file_edit_outline",
	icon: "󱇨",
},
{
	title: "md-file_excel",
	icon: "󰈛",
},
{
	title: "md-file_excel_box",
	icon: "󰈜",
},
{
	title: "md-file_excel_box_outline",
	icon: "󱀬",
},
{
	title: "md-file_excel_outline",
	icon: "󱀭",
},
{
	title: "md-file_export",
	icon: "󰈝",
},
{
	title: "md-file_export_outline",
	icon: "󱀮",
},
{
	title: "md-file_eye",
	icon: "󰷊",
},
{
	title: "md-file_eye_outline",
	icon: "󰷋",
},
{
	title: "md-file_find",
	icon: "󰈞",
},
{
	title: "md-file_find_outline",
	icon: "󰮗",
},
{
	title: "md-file_gif_box",
	icon: "󰵸",
},
{
	title: "md-file_hidden",
	icon: "󰘓",
},
{
	title: "md-file_image",
	icon: "󰈟",
},
{
	title: "md-file_image_marker",
	icon: "󱝲",
},
{
	title: "md-file_image_marker_outline",
	icon: "󱝳",
},
{
	title: "md-file_image_minus",
	icon: "󱤻",
},
{
	title: "md-file_image_minus_outline",
	icon: "󱤼",
},
{
	title: "md-file_image_outline",
	icon: "󰺰",
},
{
	title: "md-file_image_plus",
	icon: "󱤽",
},
{
	title: "md-file_image_plus_outline",
	icon: "󱤾",
},
{
	title: "md-file_image_remove",
	icon: "󱤿",
},
{
	title: "md-file_image_remove_outline",
	icon: "󱥀",
},
{
	title: "md-file_import",
	icon: "󰈠",
},
{
	title: "md-file_import_outline",
	icon: "󱀯",
},
{
	title: "md-file_jpg_box",
	icon: "󰈥",
},
{
	title: "md-file_key",
	icon: "󱆄",
},
{
	title: "md-file_key_outline",
	icon: "󱆅",
},
{
	title: "md-file_link",
	icon: "󱅷",
},
{
	title: "md-file_link_outline",
	icon: "󱅸",
},
{
	title: "md-file_lock",
	icon: "󰈡",
},
{
	title: "md-file_lock_open",
	icon: "󱧈",
},
{
	title: "md-file_lock_open_outline",
	icon: "󱧉",
},
{
	title: "md-file_lock_outline",
	icon: "󱀰",
},
{
	title: "md-file_marker",
	icon: "󱝴",
},
{
	title: "md-file_marker_outline",
	icon: "󱝵",
},
{
	title: "md-file_minus",
	icon: "󱪡",
},
{
	title: "md-file_minus_outline",
	icon: "󱪢",
},
{
	title: "md-file_move",
	icon: "󰪹",
},
{
	title: "md-file_move_outline",
	icon: "󱀱",
},
{
	title: "md-file_multiple",
	icon: "󰈢",
},
{
	title: "md-file_multiple_outline",
	icon: "󱀲",
},
{
	title: "md-file_music",
	icon: "󰈣",
},
{
	title: "md-file_music_outline",
	icon: "󰸪",
},
{
	title: "md-file_outline",
	icon: "󰈤",
},
{
	title: "md-file_pdf_box",
	icon: "󰈦",
},
{
	title: "md-file_percent",
	icon: "󰠞",
},
{
	title: "md-file_percent_outline",
	icon: "󱀳",
},
{
	title: "md-file_phone",
	icon: "󱅹",
},
{
	title: "md-file_phone_outline",
	icon: "󱅺",
},
{
	title: "md-file_plus",
	icon: "󰝒",
},
{
	title: "md-file_plus_outline",
	icon: "󰻭",
},
{
	title: "md-file_png_box",
	icon: "󰸭",
},
{
	title: "md-file_powerpoint",
	icon: "󰈧",
},
{
	title: "md-file_powerpoint_box",
	icon: "󰈨",
},
{
	title: "md-file_powerpoint_box_outline",
	icon: "󱀴",
},
{
	title: "md-file_powerpoint_outline",
	icon: "󱀵",
},
{
	title: "md-file_presentation_box",
	icon: "󰈩",
},
{
	title: "md-file_question",
	icon: "󰡯",
},
{
	title: "md-file_question_outline",
	icon: "󱀶",
},
{
	title: "md-file_refresh",
	icon: "󰤘",
},
{
	title: "md-file_refresh_outline",
	icon: "󰕁",
},
{
	title: "md-file_remove",
	icon: "󰮘",
},
{
	title: "md-file_remove_outline",
	icon: "󱀷",
},
{
	title: "md-file_replace",
	icon: "󰬲",
},
{
	title: "md-file_replace_outline",
	icon: "󰬳",
},
{
	title: "md-file_restore",
	icon: "󰙰",
},
{
	title: "md-file_restore_outline",
	icon: "󱀸",
},
{
	title: "md-file_rotate_left",
	icon: "󱨻",
},
{
	title: "md-file_rotate_left_outline",
	icon: "󱨼",
},
{
	title: "md-file_rotate_right",
	icon: "󱨽",
},
{
	title: "md-file_rotate_right_outline",
	icon: "󱨾",
},
{
	title: "md-file_search",
	icon: "󰱼",
},
{
	title: "md-file_search_outline",
	icon: "󰱽",
},
{
	title: "md-file_send",
	icon: "󰈪",
},
{
	title: "md-file_send_outline",
	icon: "󱀹",
},
{
	title: "md-file_settings",
	icon: "󱁹",
},
{
	title: "md-file_settings_outline",
	icon: "󱁺",
},
{
	title: "md-file_sign",
	icon: "󱧃",
},
{
	title: "md-file_star",
	icon: "󱀺",
},
{
	title: "md-file_star_outline",
	icon: "󱀻",
},
{
	title: "md-file_swap",
	icon: "󰾴",
},
{
	title: "md-file_swap_outline",
	icon: "󰾵",
},
{
	title: "md-file_sync",
	icon: "󱈖",
},
{
	title: "md-file_sync_outline",
	icon: "󱈗",
},
{
	title: "md-file_table",
	icon: "󰱾",
},
{
	title: "md-file_table_box",
	icon: "󱃡",
},
{
	title: "md-file_table_box_multiple",
	icon: "󱃢",
},
{
	title: "md-file_table_box_multiple_outline",
	icon: "󱃣",
},
{
	title: "md-file_table_box_outline",
	icon: "󱃤",
},
{
	title: "md-file_table_outline",
	icon: "󰱿",
},
{
	title: "md-file_tree",
	icon: "󰙅",
},
{
	title: "md-file_tree_outline",
	icon: "󱏒",
},
{
	title: "md-file_undo",
	icon: "󰣜",
},
{
	title: "md-file_undo_outline",
	icon: "󱀼",
},
{
	title: "md-file_upload",
	icon: "󰩍",
},
{
	title: "md-file_upload_outline",
	icon: "󰩎",
},
{
	title: "md-file_video",
	icon: "󰈫",
},
{
	title: "md-file_video_outline",
	icon: "󰸬",
},
{
	title: "md-file_word",
	icon: "󰈬",
},
{
	title: "md-file_word_box",
	icon: "󰈭",
},
{
	title: "md-file_word_box_outline",
	icon: "󱀽",
},
{
	title: "md-file_word_outline",
	icon: "󱀾",
},
{
	title: "md-film",
	icon: "󰈯",
},
{
	title: "md-filmstrip",
	icon: "󰈰",
},
{
	title: "md-filmstrip_box",
	icon: "󰌲",
},
{
	title: "md-filmstrip_box_multiple",
	icon: "󰴘",
},
{
	title: "md-filmstrip_off",
	icon: "󰈱",
},
{
	title: "md-filter",
	icon: "󰈲",
},
{
	title: "md-filter_check",
	icon: "󱣬",
},
{
	title: "md-filter_check_outline",
	icon: "󱣭",
},
{
	title: "md-filter_cog",
	icon: "󱪣",
},
{
	title: "md-filter_cog_outline",
	icon: "󱪤",
},
{
	title: "md-filter_menu",
	icon: "󱃥",
},
{
	title: "md-filter_menu_outline",
	icon: "󱃦",
},
{
	title: "md-filter_minus",
	icon: "󰻮",
},
{
	title: "md-filter_minus_outline",
	icon: "󰻯",
},
{
	title: "md-filter_multiple",
	icon: "󱨿",
},
{
	title: "md-filter_multiple_outline",
	icon: "󱩀",
},
{
	title: "md-filter_off",
	icon: "󱓯",
},
{
	title: "md-filter_off_outline",
	icon: "󱓰",
},
{
	title: "md-filter_outline",
	icon: "󰈳",
},
{
	title: "md-filter_plus",
	icon: "󰻰",
},
{
	title: "md-filter_plus_outline",
	icon: "󰻱",
},
{
	title: "md-filter_remove",
	icon: "󰈴",
},
{
	title: "md-filter_remove_outline",
	icon: "󰈵",
},
{
	title: "md-filter_settings",
	icon: "󱪥",
},
{
	title: "md-filter_settings_outline",
	icon: "󱪦",
},
{
	title: "md-filter_variant",
	icon: "󰈶",
},
{
	title: "md-filter_variant_minus",
	icon: "󱄒",
},
{
	title: "md-filter_variant_plus",
	icon: "󱄓",
},
{
	title: "md-filter_variant_remove",
	icon: "󱀿",
},
{
	title: "md-finance",
	icon: "󰠟",
},
{
	title: "md-find_replace",
	icon: "󰛔",
},
{
	title: "md-fingerprint",
	icon: "󰈷",
},
{
	title: "md-fingerprint_off",
	icon: "󰺱",
},
{
	title: "md-fire",
	icon: "󰈸",
},
{
	title: "md-fire_alert",
	icon: "󱗗",
},
{
	title: "md-fire_circle",
	icon: "󱠇",
},
{
	title: "md-fire_extinguisher",
	icon: "󰻲",
},
{
	title: "md-fire_hydrant",
	icon: "󱄷",
},
{
	title: "md-fire_hydrant_alert",
	icon: "󱄸",
},
{
	title: "md-fire_hydrant_off",
	icon: "󱄹",
},
{
	title: "md-fire_off",
	icon: "󱜢",
},
{
	title: "md-fire_truck",
	icon: "󰢫",
},
{
	title: "md-firebase",
	icon: "󰥧",
},
{
	title: "md-firefox",
	icon: "󰈹",
},
{
	title: "md-fireplace",
	icon: "󰸮",
},
{
	title: "md-fireplace_off",
	icon: "󰸯",
},
{
	title: "md-firewire",
	icon: "󰖾",
},
{
	title: "md-firework",
	icon: "󰸰",
},
{
	title: "md-firework_off",
	icon: "󱜣",
},
{
	title: "md-fish",
	icon: "󰈺",
},
{
	title: "md-fish_off",
	icon: "󱏳",
},
{
	title: "md-fishbowl",
	icon: "󰻳",
},
{
	title: "md-fishbowl_outline",
	icon: "󰻴",
},
{
	title: "md-fit_to_page",
	icon: "󰻵",
},
{
	title: "md-fit_to_page_outline",
	icon: "󰻶",
},
{
	title: "md-fit_to_screen",
	icon: "󱣴",
},
{
	title: "md-fit_to_screen_outline",
	icon: "󱣵",
},
{
	title: "md-flag",
	icon: "󰈻",
},
{
	title: "md-flag_checkered",
	icon: "󰈼",
},
{
	title: "md-flag_minus",
	icon: "󰮙",
},
{
	title: "md-flag_minus_outline",
	icon: "󱂲",
},
{
	title: "md-flag_off",
	icon: "󱣮",
},
{
	title: "md-flag_off_outline",
	icon: "󱣯",
},
{
	title: "md-flag_outline",
	icon: "󰈽",
},
{
	title: "md-flag_plus",
	icon: "󰮚",
},
{
	title: "md-flag_plus_outline",
	icon: "󱂳",
},
{
	title: "md-flag_remove",
	icon: "󰮛",
},
{
	title: "md-flag_remove_outline",
	icon: "󱂴",
},
{
	title: "md-flag_triangle",
	icon: "󰈿",
},
{
	title: "md-flag_variant",
	icon: "󰉀",
},
{
	title: "md-flag_variant_outline",
	icon: "󰈾",
},
{
	title: "md-flare",
	icon: "󰵲",
},
{
	title: "md-flash",
	icon: "󰉁",
},
{
	title: "md-flash_alert",
	icon: "󰻷",
},
{
	title: "md-flash_alert_outline",
	icon: "󰻸",
},
{
	title: "md-flash_auto",
	icon: "󰉂",
},
{
	title: "md-flash_off",
	icon: "󰉃",
},
{
	title: "md-flash_outline",
	icon: "󰛕",
},
{
	title: "md-flash_red_eye",
	icon: "󰙻",
},
{
	title: "md-flashlight",
	icon: "󰉄",
},
{
	title: "md-flashlight_off",
	icon: "󰉅",
},
{
	title: "md-flask",
	icon: "󰂓",
},
{
	title: "md-flask_empty",
	icon: "󰂔",
},
{
	title: "md-flask_empty_minus",
	icon: "󱈺",
},
{
	title: "md-flask_empty_minus_outline",
	icon: "󱈻",
},
{
	title: "md-flask_empty_off",
	icon: "󱏴",
},
{
	title: "md-flask_empty_off_outline",
	icon: "󱏵",
},
{
	title: "md-flask_empty_outline",
	icon: "󰂕",
},
{
	title: "md-flask_empty_plus",
	icon: "󱈼",
},
{
	title: "md-flask_empty_plus_outline",
	icon: "󱈽",
},
{
	title: "md-flask_empty_remove",
	icon: "󱈾",
},
{
	title: "md-flask_empty_remove_outline",
	icon: "󱈿",
},
{
	title: "md-flask_minus",
	icon: "󱉀",
},
{
	title: "md-flask_minus_outline",
	icon: "󱉁",
},
{
	title: "md-flask_off",
	icon: "󱏶",
},
{
	title: "md-flask_off_outline",
	icon: "󱏷",
},
{
	title: "md-flask_outline",
	icon: "󰂖",
},
{
	title: "md-flask_plus",
	icon: "󱉂",
},
{
	title: "md-flask_plus_outline",
	icon: "󱉃",
},
{
	title: "md-flask_remove",
	icon: "󱉄",
},
{
	title: "md-flask_remove_outline",
	icon: "󱉅",
},
{
	title: "md-flask_round_bottom",
	icon: "󱉋",
},
{
	title: "md-flask_round_bottom_empty",
	icon: "󱉌",
},
{
	title: "md-flask_round_bottom_empty_outline",
	icon: "󱉍",
},
{
	title: "md-flask_round_bottom_outline",
	icon: "󱉎",
},
{
	title: "md-fleur_de_lis",
	icon: "󱌃",
},
{
	title: "md-flip_horizontal",
	icon: "󱃧",
},
{
	title: "md-flip_to_back",
	icon: "󰉇",
},
{
	title: "md-flip_to_front",
	icon: "󰉈",
},
{
	title: "md-flip_vertical",
	icon: "󱃨",
},
{
	title: "md-floor_lamp",
	icon: "󰣝",
},
{
	title: "md-floor_lamp_dual",
	icon: "󱁀",
},
{
	title: "md-floor_lamp_dual_outline",
	icon: "󱟎",
},
{
	title: "md-floor_lamp_outline",
	icon: "󱟈",
},
{
	title: "md-floor_lamp_torchiere",
	icon: "󱝇",
},
{
	title: "md-floor_lamp_torchiere_outline",
	icon: "󱟖",
},
{
	title: "md-floor_lamp_torchiere_variant",
	icon: "󱁁",
},
{
	title: "md-floor_lamp_torchiere_variant_outline",
	icon: "󱟏",
},
{
	title: "md-floor_plan",
	icon: "󰠡",
},
{
	title: "md-floppy",
	icon: "󰉉",
},
{
	title: "md-floppy_variant",
	icon: "󰧯",
},
{
	title: "md-flower",
	icon: "󰉊",
},
{
	title: "md-flower_outline",
	icon: "󰧰",
},
{
	title: "md-flower_pollen",
	icon: "󱢅",
},
{
	title: "md-flower_pollen_outline",
	icon: "󱢆",
},
{
	title: "md-flower_poppy",
	icon: "󰴈",
},
{
	title: "md-flower_tulip",
	icon: "󰧱",
},
{
	title: "md-flower_tulip_outline",
	icon: "󰧲",
},
{
	title: "md-focus_auto",
	icon: "󰽎",
},
{
	title: "md-focus_field",
	icon: "󰽏",
},
{
	title: "md-focus_field_horizontal",
	icon: "󰽐",
},
{
	title: "md-focus_field_vertical",
	icon: "󰽑",
},
{
	title: "md-folder",
	icon: "󰉋",
},
{
	title: "md-folder_account",
	icon: "󰉌",
},
{
	title: "md-folder_account_outline",
	icon: "󰮜",
},
{
	title: "md-folder_alert",
	icon: "󰷌",
},
{
	title: "md-folder_alert_outline",
	icon: "󰷍",
},
{
	title: "md-folder_arrow_down",
	icon: "󱧨",
},
{
	title: "md-folder_arrow_down_outline",
	icon: "󱧩",
},
{
	title: "md-folder_arrow_left",
	icon: "󱧪",
},
{
	title: "md-folder_arrow_left_outline",
	icon: "󱧫",
},
{
	title: "md-folder_arrow_left_right",
	icon: "󱧬",
},
{
	title: "md-folder_arrow_left_right_outline",
	icon: "󱧭",
},
{
	title: "md-folder_arrow_right",
	icon: "󱧮",
},
{
	title: "md-folder_arrow_right_outline",
	icon: "󱧯",
},
{
	title: "md-folder_arrow_up",
	icon: "󱧰",
},
{
	title: "md-folder_arrow_up_down",
	icon: "󱧱",
},
{
	title: "md-folder_arrow_up_down_outline",
	icon: "󱧲",
},
{
	title: "md-folder_arrow_up_outline",
	icon: "󱧳",
},
{
	title: "md-folder_cancel",
	icon: "󱧴",
},
{
	title: "md-folder_cancel_outline",
	icon: "󱧵",
},
{
	title: "md-folder_check",
	icon: "󱥾",
},
{
	title: "md-folder_check_outline",
	icon: "󱥿",
},
{
	title: "md-folder_clock",
	icon: "󰪺",
},
{
	title: "md-folder_clock_outline",
	icon: "󰪻",
},
{
	title: "md-folder_cog",
	icon: "󱁿",
},
{
	title: "md-folder_cog_outline",
	icon: "󱂀",
},
{
	title: "md-folder_download",
	icon: "󰉍",
},
{
	title: "md-folder_download_outline",
	icon: "󱃩",
},
{
	title: "md-folder_edit",
	icon: "󰣞",
},
{
	title: "md-folder_edit_outline",
	icon: "󰷎",
},
{
	title: "md-folder_eye",
	icon: "󱞊",
},
{
	title: "md-folder_eye_outline",
	icon: "󱞋",
},
{
	title: "md-folder_file",
	icon: "󱧶",
},
{
	title: "md-folder_file_outline",
	icon: "󱧷",
},
{
	title: "md-folder_google_drive",
	icon: "󰉎",
},
{
	title: "md-folder_heart",
	icon: "󱃪",
},
{
	title: "md-folder_heart_outline",
	icon: "󱃫",
},
{
	title: "md-folder_hidden",
	icon: "󱞞",
},
{
	title: "md-folder_home",
	icon: "󱂵",
},
{
	title: "md-folder_home_outline",
	icon: "󱂶",
},
{
	title: "md-folder_image",
	icon: "󰉏",
},
{
	title: "md-folder_information",
	icon: "󱂷",
},
{
	title: "md-folder_information_outline",
	icon: "󱂸",
},
{
	title: "md-folder_key",
	icon: "󰢬",
},
{
	title: "md-folder_key_network",
	icon: "󰢭",
},
{
	title: "md-folder_key_network_outline",
	icon: "󰲀",
},
{
	title: "md-folder_key_outline",
	icon: "󱃬",
},
{
	title: "md-folder_lock",
	icon: "󰉐",
},
{
	title: "md-folder_lock_open",
	icon: "󰉑",
},
{
	title: "md-folder_lock_open_outline",
	icon: "󱪧",
},
{
	title: "md-folder_lock_outline",
	icon: "󱪨",
},
{
	title: "md-folder_marker",
	icon: "󱉭",
},
{
	title: "md-folder_marker_outline",
	icon: "󱉮",
},
{
	title: "md-folder_move",
	icon: "󰉒",
},
{
	title: "md-folder_move_outline",
	icon: "󱉆",
},
{
	title: "md-folder_multiple",
	icon: "󰉓",
},
{
	title: "md-folder_multiple_image",
	icon: "󰉔",
},
{
	title: "md-folder_multiple_outline",
	icon: "󰉕",
},
{
	title: "md-folder_multiple_plus",
	icon: "󱑾",
},
{
	title: "md-folder_multiple_plus_outline",
	icon: "󱑿",
},
{
	title: "md-folder_music",
	icon: "󱍙",
},
{
	title: "md-folder_music_outline",
	icon: "󱍚",
},
{
	title: "md-folder_network",
	icon: "󰡰",
},
{
	title: "md-folder_network_outline",
	icon: "󰲁",
},
{
	title: "md-folder_off",
	icon: "󱧸",
},
{
	title: "md-folder_off_outline",
	icon: "󱧹",
},
{
	title: "md-folder_open",
	icon: "󰝰",
},
{
	title: "md-folder_open_outline",
	icon: "󰷏",
},
{
	title: "md-folder_outline",
	icon: "󰉖",
},
{
	title: "md-folder_play",
	icon: "󱧺",
},
{
	title: "md-folder_play_outline",
	icon: "󱧻",
},
{
	title: "md-folder_plus",
	icon: "󰉗",
},
{
	title: "md-folder_plus_outline",
	icon: "󰮝",
},
{
	title: "md-folder_pound",
	icon: "󰴉",
},
{
	title: "md-folder_pound_outline",
	icon: "󰴊",
},
{
	title: "md-folder_question",
	icon: "󱧊",
},
{
	title: "md-folder_question_outline",
	icon: "󱧋",
},
{
	title: "md-folder_refresh",
	icon: "󰝉",
},
{
	title: "md-folder_refresh_outline",
	icon: "󰕂",
},
{
	title: "md-folder_remove",
	icon: "󰉘",
},
{
	title: "md-folder_remove_outline",
	icon: "󰮞",
},
{
	title: "md-folder_search",
	icon: "󰥨",
},
{
	title: "md-folder_search_outline",
	icon: "󰥩",
},
{
	title: "md-folder_settings",
	icon: "󱁽",
},
{
	title: "md-folder_settings_outline",
	icon: "󱁾",
},
{
	title: "md-folder_star",
	icon: "󰚝",
},
{
	title: "md-folder_star_multiple",
	icon: "󱏓",
},
{
	title: "md-folder_star_multiple_outline",
	icon: "󱏔",
},
{
	title: "md-folder_star_outline",
	icon: "󰮟",
},
{
	title: "md-folder_swap",
	icon: "󰾶",
},
{
	title: "md-folder_swap_outline",
	icon: "󰾷",
},
{
	title: "md-folder_sync",
	icon: "󰴋",
},
{
	title: "md-folder_sync_outline",
	icon: "󰴌",
},
{
	title: "md-folder_table",
	icon: "󱋣",
},
{
	title: "md-folder_table_outline",
	icon: "󱋤",
},
{
	title: "md-folder_text",
	icon: "󰲂",
},
{
	title: "md-folder_text_outline",
	icon: "󰲃",
},
{
	title: "md-folder_upload",
	icon: "󰉙",
},
{
	title: "md-folder_upload_outline",
	icon: "󱃭",
},
{
	title: "md-folder_wrench",
	icon: "󱧼",
},
{
	title: "md-folder_wrench_outline",
	icon: "󱧽",
},
{
	title: "md-folder_zip",
	icon: "󰛫",
},
{
	title: "md-folder_zip_outline",
	icon: "󰞹",
},
{
	title: "md-font_awesome",
	icon: "󰀺",
},
{
	title: "md-food",
	icon: "󰉚",
},
{
	title: "md-food_apple",
	icon: "󰉛",
},
{
	title: "md-food_apple_outline",
	icon: "󰲄",
},
{
	title: "md-food_croissant",
	icon: "󰟈",
},
{
	title: "md-food_drumstick",
	icon: "󱐟",
},
{
	title: "md-food_drumstick_off",
	icon: "󱑨",
},
{
	title: "md-food_drumstick_off_outline",
	icon: "󱑩",
},
{
	title: "md-food_drumstick_outline",
	icon: "󱐠",
},
{
	title: "md-food_fork_drink",
	icon: "󰗲",
},
{
	title: "md-food_halal",
	icon: "󱕲",
},
{
	title: "md-food_hot_dog",
	icon: "󱡋",
},
{
	title: "md-food_kosher",
	icon: "󱕳",
},
{
	title: "md-food_off",
	icon: "󰗳",
},
{
	title: "md-food_off_outline",
	icon: "󱤕",
},
{
	title: "md-food_outline",
	icon: "󱤖",
},
{
	title: "md-food_steak",
	icon: "󱑪",
},
{
	title: "md-food_steak_off",
	icon: "󱑫",
},
{
	title: "md-food_takeout_box",
	icon: "󱠶",
},
{
	title: "md-food_takeout_box_outline",
	icon: "󱠷",
},
{
	title: "md-food_turkey",
	icon: "󱜜",
},
{
	title: "md-food_variant",
	icon: "󰉜",
},
{
	title: "md-food_variant_off",
	icon: "󱏥",
},
{
	title: "md-foot_print",
	icon: "󰽒",
},
{
	title: "md-football",
	icon: "󰉝",
},
{
	title: "md-football_australian",
	icon: "󰉞",
},
{
	title: "md-football_helmet",
	icon: "󰉟",
},
{
	title: "md-forest",
	icon: "󱢗",
},
{
	title: "md-forklift",
	icon: "󰟉",
},
{
	title: "md-form_dropdown",
	icon: "󱐀",
},
{
	title: "md-form_select",
	icon: "󱐁",
},
{
	title: "md-form_textarea",
	icon: "󱂕",
},
{
	title: "md-form_textbox",
	icon: "󰘎",
},
{
	title: "md-form_textbox_lock",
	icon: "󱍝",
},
{
	title: "md-form_textbox_password",
	icon: "󰟵",
},
{
	title: "md-format_align_bottom",
	icon: "󰝓",
},
{
	title: "md-format_align_center",
	icon: "󰉠",
},
{
	title: "md-format_align_justify",
	icon: "󰉡",
},
{
	title: "md-format_align_left",
	icon: "󰉢",
},
{
	title: "md-format_align_middle",
	icon: "󰝔",
},
{
	title: "md-format_align_right",
	icon: "󰉣",
},
{
	title: "md-format_align_top",
	icon: "󰝕",
},
{
	title: "md-format_annotation_minus",
	icon: "󰪼",
},
{
	title: "md-format_annotation_plus",
	icon: "󰙆",
},
{
	title: "md-format_bold",
	icon: "󰉤",
},
{
	title: "md-format_clear",
	icon: "󰉥",
},
{
	title: "md-format_color_fill",
	icon: "󰉦",
},
{
	title: "md-format_color_highlight",
	icon: "󰸱",
},
{
	title: "md-format_color_marker_cancel",
	icon: "󱌓",
},
{
	title: "md-format_color_text",
	icon: "󰚞",
},
{
	title: "md-format_columns",
	icon: "󰣟",
},
{
	title: "md-format_float_center",
	icon: "󰉧",
},
{
	title: "md-format_float_left",
	icon: "󰉨",
},
{
	title: "md-format_float_none",
	icon: "󰉩",
},
{
	title: "md-format_float_right",
	icon: "󰉪",
},
{
	title: "md-format_font",
	icon: "󰛖",
},
{
	title: "md-format_font_size_decrease",
	icon: "󰧳",
},
{
	title: "md-format_font_size_increase",
	icon: "󰧴",
},
{
	title: "md-format_header_1",
	icon: "󰉫",
},
{
	title: "md-format_header_2",
	icon: "󰉬",
},
{
	title: "md-format_header_3",
	icon: "󰉭",
},
{
	title: "md-format_header_4",
	icon: "󰉮",
},
{
	title: "md-format_header_5",
	icon: "󰉯",
},
{
	title: "md-format_header_6",
	icon: "󰉰",
},
{
	title: "md-format_header_decrease",
	icon: "󰉱",
},
{
	title: "md-format_header_equal",
	icon: "󰉲",
},
{
	title: "md-format_header_increase",
	icon: "󰉳",
},
{
	title: "md-format_header_pound",
	icon: "󰉴",
},
{
	title: "md-format_horizontal_align_center",
	icon: "󰘞",
},
{
	title: "md-format_horizontal_align_left",
	icon: "󰘟",
},
{
	title: "md-format_horizontal_align_right",
	icon: "󰘠",
},
{
	title: "md-format_indent_decrease",
	icon: "󰉵",
},
{
	title: "md-format_indent_increase",
	icon: "󰉶",
},
{
	title: "md-format_italic",
	icon: "󰉷",
},
{
	title: "md-format_letter_case",
	icon: "󰬴",
},
{
	title: "md-format_letter_case_lower",
	icon: "󰬵",
},
{
	title: "md-format_letter_case_upper",
	icon: "󰬶",
},
{
	title: "md-format_letter_ends_with",
	icon: "󰾸",
},
{
	title: "md-format_letter_matches",
	icon: "󰾹",
},
{
	title: "md-format_letter_spacing",
	icon: "󱥖",
},
{
	title: "md-format_letter_starts_with",
	icon: "󰾺",
},
{
	title: "md-format_line_spacing",
	icon: "󰉸",
},
{
	title: "md-format_line_style",
	icon: "󰗈",
},
{
	title: "md-format_line_weight",
	icon: "󰗉",
},
{
	title: "md-format_list_bulleted",
	icon: "󰉹",
},
{
	title: "md-format_list_bulleted_square",
	icon: "󰷐",
},
{
	title: "md-format_list_bulleted_triangle",
	icon: "󰺲",
},
{
	title: "md-format_list_bulleted_type",
	icon: "󰉺",
},
{
	title: "md-format_list_checkbox",
	icon: "󰥪",
},
{
	title: "md-format_list_checks",
	icon: "󰝖",
},
{
	title: "md-format_list_group",
	icon: "󱡠",
},
{
	title: "md-format_list_numbered",
	icon: "󰉻",
},
{
	title: "md-format_list_numbered_rtl",
	icon: "󰴍",
},
{
	title: "md-format_list_text",
	icon: "󱉯",
},
{
	title: "md-format_overline",
	icon: "󰺳",
},
{
	title: "md-format_page_break",
	icon: "󰛗",
},
{
	title: "md-format_page_split",
	icon: "󱤗",
},
{
	title: "md-format_paint",
	icon: "󰉼",
},
{
	title: "md-format_paragraph",
	icon: "󰉽",
},
{
	title: "md-format_pilcrow",
	icon: "󰛘",
},
{
	title: "md-format_quote_close",
	icon: "󰉾",
},
{
	title: "md-format_quote_close_outline",
	icon: "󱆨",
},
{
	title: "md-format_quote_open",
	icon: "󰝗",
},
{
	title: "md-format_quote_open_outline",
	icon: "󱆧",
},
{
	title: "md-format_rotate_90",
	icon: "󰚪",
},
{
	title: "md-format_section",
	icon: "󰚟",
},
{
	title: "md-format_size",
	icon: "󰉿",
},
{
	title: "md-format_strikethrough",
	icon: "󰊀",
},
{
	title: "md-format_strikethrough_variant",
	icon: "󰊁",
},
{
	title: "md-format_subscript",
	icon: "󰊂",
},
{
	title: "md-format_superscript",
	icon: "󰊃",
},
{
	title: "md-format_text",
	icon: "󰊄",
},
{
	title: "md-format_text_rotation_angle_down",
	icon: "󰾻",
},
{
	title: "md-format_text_rotation_angle_up",
	icon: "󰾼",
},
{
	title: "md-format_text_rotation_down",
	icon: "󰵳",
},
{
	title: "md-format_text_rotation_down_vertical",
	icon: "󰾽",
},
{
	title: "md-format_text_rotation_none",
	icon: "󰵴",
},
{
	title: "md-format_text_rotation_up",
	icon: "󰾾",
},
{
	title: "md-format_text_rotation_vertical",
	icon: "󰾿",
},
{
	title: "md-format_text_variant",
	icon: "󰸲",
},
{
	title: "md-format_text_variant_outline",
	icon: "󱔏",
},
{
	title: "md-format_text_wrapping_clip",
	icon: "󰴎",
},
{
	title: "md-format_text_wrapping_overflow",
	icon: "󰴏",
},
{
	title: "md-format_text_wrapping_wrap",
	icon: "󰴐",
},
{
	title: "md-format_textbox",
	icon: "󰴑",
},
{
	title: "md-format_textdirection_l_to_r",
	icon: "󰊅",
},
{
	title: "md-format_textdirection_r_to_l",
	icon: "󰊆",
},
{
	title: "md-format_title",
	icon: "󰗴",
},
{
	title: "md-format_underline",
	icon: "󰊇",
},
{
	title: "md-format_underline_wavy",
	icon: "󱣩",
},
{
	title: "md-format_vertical_align_bottom",
	icon: "󰘡",
},
{
	title: "md-format_vertical_align_center",
	icon: "󰘢",
},
{
	title: "md-format_vertical_align_top",
	icon: "󰘣",
},
{
	title: "md-format_wrap_inline",
	icon: "󰊈",
},
{
	title: "md-format_wrap_square",
	icon: "󰊉",
},
{
	title: "md-format_wrap_tight",
	icon: "󰊊",
},
{
	title: "md-format_wrap_top_bottom",
	icon: "󰊋",
},
{
	title: "md-forum",
	icon: "󰊌",
},
{
	title: "md-forum_minus",
	icon: "󱪩",
},
{
	title: "md-forum_minus_outline",
	icon: "󱪪",
},
{
	title: "md-forum_outline",
	icon: "󰠢",
},
{
	title: "md-forum_plus",
	icon: "󱪫",
},
{
	title: "md-forum_plus_outline",
	icon: "󱪬",
},
{
	title: "md-forum_remove",
	icon: "󱪭",
},
{
	title: "md-forum_remove_outline",
	icon: "󱪮",
},
{
	title: "md-forward",
	icon: "󰊍",
},
{
	title: "md-forwardburger",
	icon: "󰵵",
},
{
	title: "md-fountain",
	icon: "󰥫",
},
{
	title: "md-fountain_pen",
	icon: "󰴒",
},
{
	title: "md-fountain_pen_tip",
	icon: "󰴓",
},
{
	title: "md-fraction_one_half",
	icon: "󱦒",
},
{
	title: "md-freebsd",
	icon: "󰣠",
},
{
	title: "md-french_fries",
	icon: "󱥗",
},
{
	title: "md-frequently_asked_questions",
	icon: "󰺴",
},
{
	title: "md-fridge",
	icon: "󰊐",
},
{
	title: "md-fridge_alert",
	icon: "󱆱",
},
{
	title: "md-fridge_alert_outline",
	icon: "󱆲",
},
{
	title: "md-fridge_bottom",
	icon: "󰊒",
},
{
	title: "md-fridge_industrial",
	icon: "󱗮",
},
{
	title: "md-fridge_industrial_alert",
	icon: "󱗯",
},
{
	title: "md-fridge_industrial_alert_outline",
	icon: "󱗰",
},
{
	title: "md-fridge_industrial_off",
	icon: "󱗱",
},
{
	title: "md-fridge_industrial_off_outline",
	icon: "󱗲",
},
{
	title: "md-fridge_industrial_outline",
	icon: "󱗳",
},
{
	title: "md-fridge_off",
	icon: "󱆯",
},
{
	title: "md-fridge_off_outline",
	icon: "󱆰",
},
{
	title: "md-fridge_outline",
	icon: "󰊏",
},
{
	title: "md-fridge_top",
	icon: "󰊑",
},
{
	title: "md-fridge_variant",
	icon: "󱗴",
},
{
	title: "md-fridge_variant_alert",
	icon: "󱗵",
},
{
	title: "md-fridge_variant_alert_outline",
	icon: "󱗶",
},
{
	title: "md-fridge_variant_off",
	icon: "󱗷",
},
{
	title: "md-fridge_variant_off_outline",
	icon: "󱗸",
},
{
	title: "md-fridge_variant_outline",
	icon: "󱗹",
},
{
	title: "md-fruit_cherries",
	icon: "󱁂",
},
{
	title: "md-fruit_cherries_off",
	icon: "󱏸",
},
{
	title: "md-fruit_citrus",
	icon: "󱁃",
},
{
	title: "md-fruit_citrus_off",
	icon: "󱏹",
},
{
	title: "md-fruit_grapes",
	icon: "󱁄",
},
{
	title: "md-fruit_grapes_outline",
	icon: "󱁅",
},
{
	title: "md-fruit_pear",
	icon: "󱨎",
},
{
	title: "md-fruit_pineapple",
	icon: "󱁆",
},
{
	title: "md-fruit_watermelon",
	icon: "󱁇",
},
{
	title: "md-fuel",
	icon: "󰟊",
},
{
	title: "md-fuel_cell",
	icon: "󱢵",
},
{
	title: "md-fullscreen",
	icon: "󰊓",
},
{
	title: "md-fullscreen_exit",
	icon: "󰊔",
},
{
	title: "md-function",
	icon: "󰊕",
},
{
	title: "md-function_variant",
	icon: "󰡱",
},
{
	title: "md-furigana_horizontal",
	icon: "󱂁",
},
{
	title: "md-furigana_vertical",
	icon: "󱂂",
},
{
	title: "md-fuse",
	icon: "󰲅",
},
{
	title: "md-fuse_alert",
	icon: "󱐭",
},
{
	title: "md-fuse_blade",
	icon: "󰲆",
},
{
	title: "md-fuse_off",
	icon: "󱐬",
},
{
	title: "md-gamepad",
	icon: "󰊖",
},
{
	title: "md-gamepad_circle",
	icon: "󰸳",
},
{
	title: "md-gamepad_circle_down",
	icon: "󰸴",
},
{
	title: "md-gamepad_circle_left",
	icon: "󰸵",
},
{
	title: "md-gamepad_circle_outline",
	icon: "󰸶",
},
{
	title: "md-gamepad_circle_right",
	icon: "󰸷",
},
{
	title: "md-gamepad_circle_up",
	icon: "󰸸",
},
{
	title: "md-gamepad_down",
	icon: "󰸹",
},
{
	title: "md-gamepad_left",
	icon: "󰸺",
},
{
	title: "md-gamepad_outline",
	icon: "󱤙",
},
{
	title: "md-gamepad_right",
	icon: "󰸻",
},
{
	title: "md-gamepad_round",
	icon: "󰸼",
},
{
	title: "md-gamepad_round_down",
	icon: "󰸽",
},
{
	title: "md-gamepad_round_left",
	icon: "󰸾",
},
{
	title: "md-gamepad_round_outline",
	icon: "󰸿",
},
{
	title: "md-gamepad_round_right",
	icon: "󰹀",
},
{
	title: "md-gamepad_round_up",
	icon: "󰹁",
},
{
	title: "md-gamepad_square",
	icon: "󰺵",
},
{
	title: "md-gamepad_square_outline",
	icon: "󰺶",
},
{
	title: "md-gamepad_up",
	icon: "󰹂",
},
{
	title: "md-gamepad_variant",
	icon: "󰊗",
},
{
	title: "md-gamepad_variant_outline",
	icon: "󰺷",
},
{
	title: "md-gamma",
	icon: "󱃮",
},
{
	title: "md-gantry_crane",
	icon: "󰷑",
},
{
	title: "md-garage",
	icon: "󰛙",
},
{
	title: "md-garage_alert",
	icon: "󰡲",
},
{
	title: "md-garage_alert_variant",
	icon: "󱋕",
},
{
	title: "md-garage_lock",
	icon: "󱟻",
},
{
	title: "md-garage_open",
	icon: "󰛚",
},
{
	title: "md-garage_open_variant",
	icon: "󱋔",
},
{
	title: "md-garage_variant",
	icon: "󱋓",
},
{
	title: "md-garage_variant_lock",
	icon: "󱟼",
},
{
	title: "md-gas_burner",
	icon: "󱨛",
},
{
	title: "md-gas_cylinder",
	icon: "󰙇",
},
{
	title: "md-gas_station",
	icon: "󰊘",
},
{
	title: "md-gas_station_off",
	icon: "󱐉",
},
{
	title: "md-gas_station_off_outline",
	icon: "󱐊",
},
{
	title: "md-gas_station_outline",
	icon: "󰺸",
},
{
	title: "md-gate",
	icon: "󰊙",
},
{
	title: "md-gate_alert",
	icon: "󱟸",
},
{
	title: "md-gate_and",
	icon: "󰣡",
},
{
	title: "md-gate_arrow_left",
	icon: "󱟷",
},
{
	title: "md-gate_arrow_right",
	icon: "󱅩",
},
{
	title: "md-gate_nand",
	icon: "󰣢",
},
{
	title: "md-gate_nor",
	icon: "󰣣",
},
{
	title: "md-gate_not",
	icon: "󰣤",
},
{
	title: "md-gate_open",
	icon: "󱅪",
},
{
	title: "md-gate_or",
	icon: "󰣥",
},
{
	title: "md-gate_xnor",
	icon: "󰣦",
},
{
	title: "md-gate_xor",
	icon: "󰣧",
},
{
	title: "md-gatsby",
	icon: "󰹃",
},
{
	title: "md-gauge",
	icon: "󰊚",
},
{
	title: "md-gauge_empty",
	icon: "󰡳",
},
{
	title: "md-gauge_full",
	icon: "󰡴",
},
{
	title: "md-gauge_low",
	icon: "󰡵",
},
{
	title: "md-gavel",
	icon: "󰊛",
},
{
	title: "md-gender_female",
	icon: "󰊜",
},
{
	title: "md-gender_male",
	icon: "󰊝",
},
{
	title: "md-gender_male_female",
	icon: "󰊞",
},
{
	title: "md-gender_male_female_variant",
	icon: "󱄿",
},
{
	title: "md-gender_non_binary",
	icon: "󱅀",
},
{
	title: "md-gender_transgender",
	icon: "󰊟",
},
{
	title: "md-gentoo",
	icon: "󰣨",
},
{
	title: "md-gesture",
	icon: "󰟋",
},
{
	title: "md-gesture_double_tap",
	icon: "󰜼",
},
{
	title: "md-gesture_pinch",
	icon: "󰪽",
},
{
	title: "md-gesture_spread",
	icon: "󰪾",
},
{
	title: "md-gesture_swipe",
	icon: "󰵶",
},
{
	title: "md-gesture_swipe_down",
	icon: "󰜽",
},
{
	title: "md-gesture_swipe_horizontal",
	icon: "󰪿",
},
{
	title: "md-gesture_swipe_left",
	icon: "󰜾",
},
{
	title: "md-gesture_swipe_right",
	icon: "󰜿",
},
{
	title: "md-gesture_swipe_up",
	icon: "󰝀",
},
{
	title: "md-gesture_swipe_vertical",
	icon: "󰫀",
},
{
	title: "md-gesture_tap",
	icon: "󰝁",
},
{
	title: "md-gesture_tap_box",
	icon: "󱊩",
},
{
	title: "md-gesture_tap_button",
	icon: "󱊨",
},
{
	title: "md-gesture_tap_hold",
	icon: "󰵷",
},
{
	title: "md-gesture_two_double_tap",
	icon: "󰝂",
},
{
	title: "md-gesture_two_tap",
	icon: "󰝃",
},
{
	title: "md-ghost",
	icon: "󰊠",
},
{
	title: "md-ghost_off",
	icon: "󰧵",
},
{
	title: "md-ghost_off_outline",
	icon: "󱙜",
},
{
	title: "md-ghost_outline",
	icon: "󱙝",
},
{
	title: "md-gift",
	icon: "󰹄",
},
{
	title: "md-gift_off",
	icon: "󱛯",
},
{
	title: "md-gift_off_outline",
	icon: "󱛰",
},
{
	title: "md-gift_open",
	icon: "󱛱",
},
{
	title: "md-gift_open_outline",
	icon: "󱛲",
},
{
	title: "md-gift_outline",
	icon: "󰊡",
},
{
	title: "md-git",
	icon: "󰊢",
},
{
	title: "md-github",
	icon: "󰊤",
},
{
	title: "md-gitlab",
	icon: "󰮠",
},
{
	title: "md-glass_cocktail",
	icon: "󰍖",
},
{
	title: "md-glass_cocktail_off",
	icon: "󱗦",
},
{
	title: "md-glass_flute",
	icon: "󰊥",
},
{
	title: "md-glass_fragile",
	icon: "󱡳",
},
{
	title: "md-glass_mug",
	icon: "󰊦",
},
{
	title: "md-glass_mug_off",
	icon: "󱗧",
},
{
	title: "md-glass_mug_variant",
	icon: "󱄖",
},
{
	title: "md-glass_mug_variant_off",
	icon: "󱗨",
},
{
	title: "md-glass_pint_outline",
	icon: "󱌍",
},
{
	title: "md-glass_stange",
	icon: "󰊧",
},
{
	title: "md-glass_tulip",
	icon: "󰊨",
},
{
	title: "md-glass_wine",
	icon: "󰡶",
},
{
	title: "md-glasses",
	icon: "󰊪",
},
{
	title: "md-globe_light",
	icon: "󱋗",
},
{
	title: "md-globe_model",
	icon: "󰣩",
},
{
	title: "md-gmail",
	icon: "󰊫",
},
{
	title: "md-gnome",
	icon: "󰊬",
},
{
	title: "md-go_kart",
	icon: "󰵹",
},
{
	title: "md-go_kart_track",
	icon: "󰵺",
},
{
	title: "md-gog",
	icon: "󰮡",
},
{
	title: "md-gold",
	icon: "󱉏",
},
{
	title: "md-golf",
	icon: "󰠣",
},
{
	title: "md-golf_cart",
	icon: "󱆤",
},
{
	title: "md-golf_tee",
	icon: "󱂃",
},
{
	title: "md-gondola",
	icon: "󰚆",
},
{
	title: "md-goodreads",
	icon: "󰵻",
},
{
	title: "md-google",
	icon: "󰊭",
},
{
	title: "md-google_ads",
	icon: "󰲇",
},
{
	title: "md-google_analytics",
	icon: "󰟌",
},
{
	title: "md-google_assistant",
	icon: "󰟍",
},
{
	title: "md-google_cardboard",
	icon: "󰊮",
},
{
	title: "md-google_chrome",
	icon: "󰊯",
},
{
	title: "md-google_circles",
	icon: "󰊰",
},
{
	title: "md-google_circles_communities",
	icon: "󰊱",
},
{
	title: "md-google_circles_extended",
	icon: "󰊲",
},
{
	title: "md-google_circles_group",
	icon: "󰊳",
},
{
	title: "md-google_classroom",
	icon: "󰋀",
},
{
	title: "md-google_cloud",
	icon: "󱇶",
},
{
	title: "md-google_controller",
	icon: "󰊴",
},
{
	title: "md-google_controller_off",
	icon: "󰊵",
},
{
	title: "md-google_downasaur",
	icon: "󱍢",
},
{
	title: "md-google_drive",
	icon: "󰊶",
},
{
	title: "md-google_earth",
	icon: "󰊷",
},
{
	title: "md-google_fit",
	icon: "󰥬",
},
{
	title: "md-google_glass",
	icon: "󰊸",
},
{
	title: "md-google_hangouts",
	icon: "󰋉",
},
{
	title: "md-google_home",
	icon: "󰠤",
},
{
	title: "md-google_keep",
	icon: "󰛜",
},
{
	title: "md-google_lens",
	icon: "󰧶",
},
{
	title: "md-google_maps",
	icon: "󰗵",
},
{
	title: "md-google_my_business",
	icon: "󱁈",
},
{
	title: "md-google_nearby",
	icon: "󰊹",
},
{
	title: "md-google_play",
	icon: "󰊼",
},
{
	title: "md-google_plus",
	icon: "󰊽",
},
{
	title: "md-google_podcast",
	icon: "󰺹",
},
{
	title: "md-google_spreadsheet",
	icon: "󰧷",
},
{
	title: "md-google_street_view",
	icon: "󰲈",
},
{
	title: "md-google_translate",
	icon: "󰊿",
},
{
	title: "md-gradient_horizontal",
	icon: "󱝊",
},
{
	title: "md-gradient_vertical",
	icon: "󰚠",
},
{
	title: "md-grain",
	icon: "󰵼",
},
{
	title: "md-graph",
	icon: "󱁉",
},
{
	title: "md-graph_outline",
	icon: "󱁊",
},
{
	title: "md-graphql",
	icon: "󰡷",
},
{
	title: "md-grass",
	icon: "󱔐",
},
{
	title: "md-grave_stone",
	icon: "󰮢",
},
{
	title: "md-grease_pencil",
	icon: "󰙈",
},
{
	title: "md-greater_than",
	icon: "󰥭",
},
{
	title: "md-greater_than_or_equal",
	icon: "󰥮",
},
{
	title: "md-greenhouse",
	icon: "󰀭",
},
{
	title: "md-grid",
	icon: "󰋁",
},
{
	title: "md-grid_large",
	icon: "󰝘",
},
{
	title: "md-grid_off",
	icon: "󰋂",
},
{
	title: "md-grill",
	icon: "󰹅",
},
{
	title: "md-grill_outline",
	icon: "󱆊",
},
{
	title: "md-group",
	icon: "󰋃",
},
{
	title: "md-guitar_acoustic",
	icon: "󰝱",
},
{
	title: "md-guitar_electric",
	icon: "󰋄",
},
{
	title: "md-guitar_pick",
	icon: "󰋅",
},
{
	title: "md-guitar_pick_outline",
	icon: "󰋆",
},
{
	title: "md-guy_fawkes_mask",
	icon: "󰠥",
},
{
	title: "md-gymnastics",
	icon: "󱩁",
},
{
	title: "md-hail",
	icon: "󰫁",
},
{
	title: "md-hair_dryer",
	icon: "󱃯",
},
{
	title: "md-hair_dryer_outline",
	icon: "󱃰",
},
{
	title: "md-halloween",
	icon: "󰮣",
},
{
	title: "md-hamburger",
	icon: "󰚅",
},
{
	title: "md-hamburger_check",
	icon: "󱝶",
},
{
	title: "md-hamburger_minus",
	icon: "󱝷",
},
{
	title: "md-hamburger_off",
	icon: "󱝸",
},
{
	title: "md-hamburger_plus",
	icon: "󱝹",
},
{
	title: "md-hamburger_remove",
	icon: "󱝺",
},
{
	title: "md-hammer",
	icon: "󰣪",
},
{
	title: "md-hammer_screwdriver",
	icon: "󱌢",
},
{
	title: "md-hammer_sickle",
	icon: "󱢇",
},
{
	title: "md-hammer_wrench",
	icon: "󱌣",
},
{
	title: "md-hand_back_left",
	icon: "󰹆",
},
{
	title: "md-hand_back_left_off",
	icon: "󱠰",
},
{
	title: "md-hand_back_left_off_outline",
	icon: "󱠲",
},
{
	title: "md-hand_back_left_outline",
	icon: "󱠬",
},
{
	title: "md-hand_back_right",
	icon: "󰹇",
},
{
	title: "md-hand_back_right_off",
	icon: "󱠱",
},
{
	title: "md-hand_back_right_off_outline",
	icon: "󱠳",
},
{
	title: "md-hand_back_right_outline",
	icon: "󱠭",
},
{
	title: "md-hand_clap",
	icon: "󱥋",
},
{
	title: "md-hand_clap_off",
	icon: "󱩂",
},
{
	title: "md-hand_coin",
	icon: "󱢏",
},
{
	title: "md-hand_coin_outline",
	icon: "󱢐",
},
{
	title: "md-hand_extended",
	icon: "󱢶",
},
{
	title: "md-hand_extended_outline",
	icon: "󱢷",
},
{
	title: "md-hand_front_left",
	icon: "󱠫",
},
{
	title: "md-hand_front_left_outline",
	icon: "󱠮",
},
{
	title: "md-hand_front_right",
	icon: "󰩏",
},
{
	title: "md-hand_front_right_outline",
	icon: "󱠯",
},
{
	title: "md-hand_heart",
	icon: "󱃱",
},
{
	title: "md-hand_heart_outline",
	icon: "󱕾",
},
{
	title: "md-hand_okay",
	icon: "󰩐",
},
{
	title: "md-hand_peace",
	icon: "󰩑",
},
{
	title: "md-hand_peace_variant",
	icon: "󰩒",
},
{
	title: "md-hand_pointing_down",
	icon: "󰩓",
},
{
	title: "md-hand_pointing_left",
	icon: "󰩔",
},
{
	title: "md-hand_pointing_right",
	icon: "󰋇",
},
{
	title: "md-hand_pointing_up",
	icon: "󰩕",
},
{
	title: "md-hand_saw",
	icon: "󰹈",
},
{
	title: "md-hand_wash",
	icon: "󱕿",
},
{
	title: "md-hand_wash_outline",
	icon: "󱖀",
},
{
	title: "md-hand_water",
	icon: "󱎟",
},
{
	title: "md-hand_wave",
	icon: "󱠡",
},
{
	title: "md-hand_wave_outline",
	icon: "󱠢",
},
{
	title: "md-handball",
	icon: "󰽓",
},
{
	title: "md-handcuffs",
	icon: "󱄾",
},
{
	title: "md-hands_pray",
	icon: "󰕹",
},
{
	title: "md-handshake",
	icon: "󱈘",
},
{
	title: "md-handshake_outline",
	icon: "󱖡",
},
{
	title: "md-hanger",
	icon: "󰋈",
},
{
	title: "md-hard_hat",
	icon: "󰥯",
},
{
	title: "md-harddisk",
	icon: "󰋊",
},
{
	title: "md-harddisk_plus",
	icon: "󱁋",
},
{
	title: "md-harddisk_remove",
	icon: "󱁌",
},
{
	title: "md-hat_fedora",
	icon: "󰮤",
},
{
	title: "md-hazard_lights",
	icon: "󰲉",
},
{
	title: "md-hdr",
	icon: "󰵽",
},
{
	title: "md-hdr_off",
	icon: "󰵾",
},
{
	title: "md-head",
	icon: "󱍞",
},
{
	title: "md-head_alert",
	icon: "󱌸",
},
{
	title: "md-head_alert_outline",
	icon: "󱌹",
},
{
	title: "md-head_check",
	icon: "󱌺",
},
{
	title: "md-head_check_outline",
	icon: "󱌻",
},
{
	title: "md-head_cog",
	icon: "󱌼",
},
{
	title: "md-head_cog_outline",
	icon: "󱌽",
},
{
	title: "md-head_dots_horizontal",
	icon: "󱌾",
},
{
	title: "md-head_dots_horizontal_outline",
	icon: "󱌿",
},
{
	title: "md-head_flash",
	icon: "󱍀",
},
{
	title: "md-head_flash_outline",
	icon: "󱍁",
},
{
	title: "md-head_heart",
	icon: "󱍂",
},
{
	title: "md-head_heart_outline",
	icon: "󱍃",
},
{
	title: "md-head_lightbulb",
	icon: "󱍄",
},
{
	title: "md-head_lightbulb_outline",
	icon: "󱍅",
},
{
	title: "md-head_minus",
	icon: "󱍆",
},
{
	title: "md-head_minus_outline",
	icon: "󱍇",
},
{
	title: "md-head_outline",
	icon: "󱍟",
},
{
	title: "md-head_plus",
	icon: "󱍈",
},
{
	title: "md-head_plus_outline",
	icon: "󱍉",
},
{
	title: "md-head_question",
	icon: "󱍊",
},
{
	title: "md-head_question_outline",
	icon: "󱍋",
},
{
	title: "md-head_remove",
	icon: "󱍌",
},
{
	title: "md-head_remove_outline",
	icon: "󱍍",
},
{
	title: "md-head_snowflake",
	icon: "󱍎",
},
{
	title: "md-head_snowflake_outline",
	icon: "󱍏",
},
{
	title: "md-head_sync",
	icon: "󱍐",
},
{
	title: "md-head_sync_outline",
	icon: "󱍑",
},
{
	title: "md-headphones",
	icon: "󰋋",
},
{
	title: "md-headphones_bluetooth",
	icon: "󰥰",
},
{
	title: "md-headphones_box",
	icon: "󰋌",
},
{
	title: "md-headphones_off",
	icon: "󰟎",
},
{
	title: "md-headphones_settings",
	icon: "󰋍",
},
{
	title: "md-headset",
	icon: "󰋎",
},
{
	title: "md-headset_dock",
	icon: "󰋏",
},
{
	title: "md-headset_off",
	icon: "󰋐",
},
{
	title: "md-heart",
	icon: "󰋑",
},
{
	title: "md-heart_box",
	icon: "󰋒",
},
{
	title: "md-heart_box_outline",
	icon: "󰋓",
},
{
	title: "md-heart_broken",
	icon: "󰋔",
},
{
	title: "md-heart_broken_outline",
	icon: "󰴔",
},
{
	title: "md-heart_circle",
	icon: "󰥱",
},
{
	title: "md-heart_circle_outline",
	icon: "󰥲",
},
{
	title: "md-heart_cog",
	icon: "󱙣",
},
{
	title: "md-heart_cog_outline",
	icon: "󱙤",
},
{
	title: "md-heart_flash",
	icon: "󰻹",
},
{
	title: "md-heart_half",
	icon: "󰛟",
},
{
	title: "md-heart_half_full",
	icon: "󰛞",
},
{
	title: "md-heart_half_outline",
	icon: "󰛠",
},
{
	title: "md-heart_minus",
	icon: "󱐯",
},
{
	title: "md-heart_minus_outline",
	icon: "󱐲",
},
{
	title: "md-heart_multiple",
	icon: "󰩖",
},
{
	title: "md-heart_multiple_outline",
	icon: "󰩗",
},
{
	title: "md-heart_off",
	icon: "󰝙",
},
{
	title: "md-heart_off_outline",
	icon: "󱐴",
},
{
	title: "md-heart_outline",
	icon: "󰋕",
},
{
	title: "md-heart_plus",
	icon: "󱐮",
},
{
	title: "md-heart_plus_outline",
	icon: "󱐱",
},
{
	title: "md-heart_pulse",
	icon: "󰗶",
},
{
	title: "md-heart_remove",
	icon: "󱐰",
},
{
	title: "md-heart_remove_outline",
	icon: "󱐳",
},
{
	title: "md-heart_settings",
	icon: "󱙥",
},
{
	title: "md-heart_settings_outline",
	icon: "󱙦",
},
{
	title: "md-heat_pump",
	icon: "󱩃",
},
{
	title: "md-heat_pump_outline",
	icon: "󱩄",
},
{
	title: "md-heat_wave",
	icon: "󱩅",
},
{
	title: "md-heating_coil",
	icon: "󱪯",
},
{
	title: "md-helicopter",
	icon: "󰫂",
},
{
	title: "md-help",
	icon: "󰋖",
},
{
	title: "md-help_box",
	icon: "󰞋",
},
{
	title: "md-help_circle",
	icon: "󰋗",
},
{
	title: "md-help_circle_outline",
	icon: "󰘥",
},
{
	title: "md-help_network",
	icon: "󰛵",
},
{
	title: "md-help_network_outline",
	icon: "󰲊",
},
{
	title: "md-help_rhombus",
	icon: "󰮥",
},
{
	title: "md-help_rhombus_outline",
	icon: "󰮦",
},
{
	title: "md-hexadecimal",
	icon: "󱊧",
},
{
	title: "md-hexagon",
	icon: "󰋘",
},
{
	title: "md-hexagon_multiple",
	icon: "󰛡",
},
{
	title: "md-hexagon_multiple_outline",
	icon: "󱃲",
},
{
	title: "md-hexagon_outline",
	icon: "󰋙",
},
{
	title: "md-hexagon_slice_1",
	icon: "󰫃",
},
{
	title: "md-hexagon_slice_2",
	icon: "󰫄",
},
{
	title: "md-hexagon_slice_3",
	icon: "󰫅",
},
{
	title: "md-hexagon_slice_4",
	icon: "󰫆",
},
{
	title: "md-hexagon_slice_5",
	icon: "󰫇",
},
{
	title: "md-hexagon_slice_6",
	icon: "󰫈",
},
{
	title: "md-hexagram",
	icon: "󰫉",
},
{
	title: "md-hexagram_outline",
	icon: "󰫊",
},
{
	title: "md-high_definition",
	icon: "󰟏",
},
{
	title: "md-high_definition_box",
	icon: "󰡸",
},
{
	title: "md-highway",
	icon: "󰗷",
},
{
	title: "md-hiking",
	icon: "󰵿",
},
{
	title: "md-history",
	icon: "󰋚",
},
{
	title: "md-hockey_puck",
	icon: "󰡹",
},
{
	title: "md-hockey_sticks",
	icon: "󰡺",
},
{
	title: "md-hololens",
	icon: "󰋛",
},
{
	title: "md-home",
	icon: "󰋜",
},
{
	title: "md-home_account",
	icon: "󰠦",
},
{
	title: "md-home_alert",
	icon: "󰡻",
},
{
	title: "md-home_alert_outline",
	icon: "󱗐",
},
{
	title: "md-home_analytics",
	icon: "󰺺",
},
{
	title: "md-home_assistant",
	icon: "󰟐",
},
{
	title: "md-home_automation",
	icon: "󰟑",
},
{
	title: "md-home_battery",
	icon: "󱤁",
},
{
	title: "md-home_battery_outline",
	icon: "󱤂",
},
{
	title: "md-home_circle",
	icon: "󰟒",
},
{
	title: "md-home_circle_outline",
	icon: "󱁍",
},
{
	title: "md-home_city",
	icon: "󰴕",
},
{
	title: "md-home_city_outline",
	icon: "󰴖",
},
{
	title: "md-home_clock",
	icon: "󱨒",
},
{
	title: "md-home_clock_outline",
	icon: "󱨓",
},
{
	title: "md-home_edit",
	icon: "󱅙",
},
{
	title: "md-home_edit_outline",
	icon: "󱅚",
},
{
	title: "md-home_export_outline",
	icon: "󰾛",
},
{
	title: "md-home_flood",
	icon: "󰻺",
},
{
	title: "md-home_floor_0",
	icon: "󰷒",
},
{
	title: "md-home_floor_1",
	icon: "󰶀",
},
{
	title: "md-home_floor_2",
	icon: "󰶁",
},
{
	title: "md-home_floor_3",
	icon: "󰶂",
},
{
	title: "md-home_floor_a",
	icon: "󰶃",
},
{
	title: "md-home_floor_b",
	icon: "󰶄",
},
{
	title: "md-home_floor_g",
	icon: "󰶅",
},
{
	title: "md-home_floor_l",
	icon: "󰶆",
},
{
	title: "md-home_floor_negative_1",
	icon: "󰷓",
},
{
	title: "md-home_group",
	icon: "󰷔",
},
{
	title: "md-home_group_minus",
	icon: "󱧁",
},
{
	title: "md-home_group_plus",
	icon: "󱧀",
},
{
	title: "md-home_group_remove",
	icon: "󱧂",
},
{
	title: "md-home_heart",
	icon: "󰠧",
},
{
	title: "md-home_import_outline",
	icon: "󰾜",
},
{
	title: "md-home_lightbulb",
	icon: "󱉑",
},
{
	title: "md-home_lightbulb_outline",
	icon: "󱉒",
},
{
	title: "md-home_lightning_bolt",
	icon: "󱤃",
},
{
	title: "md-home_lightning_bolt_outline",
	icon: "󱤄",
},
{
	title: "md-home_lock",
	icon: "󰣫",
},
{
	title: "md-home_lock_open",
	icon: "󰣬",
},
{
	title: "md-home_map_marker",
	icon: "󰗸",
},
{
	title: "md-home_minus",
	icon: "󰥴",
},
{
	title: "md-home_minus_outline",
	icon: "󱏕",
},
{
	title: "md-home_modern",
	icon: "󰋝",
},
{
	title: "md-home_off",
	icon: "󱩆",
},
{
	title: "md-home_off_outline",
	icon: "󱩇",
},
{
	title: "md-home_outline",
	icon: "󰚡",
},
{
	title: "md-home_plus",
	icon: "󰥵",
},
{
	title: "md-home_plus_outline",
	icon: "󱏖",
},
{
	title: "md-home_remove",
	icon: "󱉇",
},
{
	title: "md-home_remove_outline",
	icon: "󱏗",
},
{
	title: "md-home_roof",
	icon: "󱄫",
},
{
	title: "md-home_search",
	icon: "󱎰",
},
{
	title: "md-home_search_outline",
	icon: "󱎱",
},
{
	title: "md-home_switch",
	icon: "󱞔",
},
{
	title: "md-home_switch_outline",
	icon: "󱞕",
},
{
	title: "md-home_thermometer",
	icon: "󰽔",
},
{
	title: "md-home_thermometer_outline",
	icon: "󰽕",
},
{
	title: "md-home_variant",
	icon: "󰋞",
},
{
	title: "md-home_variant_outline",
	icon: "󰮧",
},
{
	title: "md-hook",
	icon: "󰛢",
},
{
	title: "md-hook_off",
	icon: "󰛣",
},
{
	title: "md-hoop_house",
	icon: "󰹖",
},
{
	title: "md-hops",
	icon: "󰋟",
},
{
	title: "md-horizontal_rotate_clockwise",
	icon: "󱃳",
},
{
	title: "md-horizontal_rotate_counterclockwise",
	icon: "󱃴",
},
{
	title: "md-horse",
	icon: "󱖿",
},
{
	title: "md-horse_human",
	icon: "󱗀",
},
{
	title: "md-horse_variant",
	icon: "󱗁",
},
{
	title: "md-horse_variant_fast",
	icon: "󱡮",
},
{
	title: "md-horseshoe",
	icon: "󰩘",
},
{
	title: "md-hospital",
	icon: "󰿶",
},
{
	title: "md-hospital_box",
	icon: "󰋠",
},
{
	title: "md-hospital_box_outline",
	icon: "󰿷",
},
{
	title: "md-hospital_building",
	icon: "󰋡",
},
{
	title: "md-hospital_marker",
	icon: "󰋢",
},
{
	title: "md-hot_tub",
	icon: "󰠨",
},
{
	title: "md-hours_24",
	icon: "󱑸",
},
{
	title: "md-hubspot",
	icon: "󰴗",
},
{
	title: "md-hulu",
	icon: "󰠩",
},
{
	title: "md-human",
	icon: "󰋦",
},
{
	title: "md-human_baby_changing_table",
	icon: "󱎋",
},
{
	title: "md-human_cane",
	icon: "󱖁",
},
{
	title: "md-human_capacity_decrease",
	icon: "󱖛",
},
{
	title: "md-human_capacity_increase",
	icon: "󱖜",
},
{
	title: "md-human_child",
	icon: "󰋧",
},
{
	title: "md-human_dolly",
	icon: "󱦀",
},
{
	title: "md-human_edit",
	icon: "󱓨",
},
{
	title: "md-human_female",
	icon: "󰙉",
},
{
	title: "md-human_female_boy",
	icon: "󰩙",
},
{
	title: "md-human_female_dance",
	icon: "󱗉",
},
{
	title: "md-human_female_female",
	icon: "󰩚",
},
{
	title: "md-human_female_girl",
	icon: "󰩛",
},
{
	title: "md-human_greeting",
	icon: "󱟄",
},
{
	title: "md-human_greeting_proximity",
	icon: "󱖝",
},
{
	title: "md-human_greeting_variant",
	icon: "󰙊",
},
{
	title: "md-human_handsdown",
	icon: "󰙋",
},
{
	title: "md-human_handsup",
	icon: "󰙌",
},
{
	title: "md-human_male",
	icon: "󰙍",
},
{
	title: "md-human_male_board",
	icon: "󰢐",
},
{
	title: "md-human_male_board_poll",
	icon: "󰡆",
},
{
	title: "md-human_male_boy",
	icon: "󰩜",
},
{
	title: "md-human_male_child",
	icon: "󱎌",
},
{
	title: "md-human_male_female",
	icon: "󰋨",
},
{
	title: "md-human_male_female_child",
	icon: "󱠣",
},
{
	title: "md-human_male_girl",
	icon: "󰩝",
},
{
	title: "md-human_male_height",
	icon: "󰻻",
},
{
	title: "md-human_male_height_variant",
	icon: "󰻼",
},
{
	title: "md-human_male_male",
	icon: "󰩞",
},
{
	title: "md-human_non_binary",
	icon: "󱡈",
},
{
	title: "md-human_pregnant",
	icon: "󰗏",
},
{
	title: "md-human_queue",
	icon: "󱕱",
},
{
	title: "md-human_scooter",
	icon: "󱇩",
},
{
	title: "md-human_wheelchair",
	icon: "󱎍",
},
{
	title: "md-human_white_cane",
	icon: "󱦁",
},
{
	title: "md-humble_bundle",
	icon: "󰝄",
},
{
	title: "md-hvac",
	icon: "󱍒",
},
{
	title: "md-hvac_off",
	icon: "󱖞",
},
{
	title: "md-hydraulic_oil_level",
	icon: "󱌤",
},
{
	title: "md-hydraulic_oil_temperature",
	icon: "󱌥",
},
{
	title: "md-hydro_power",
	icon: "󱋥",
},
{
	title: "md-hydrogen_station",
	icon: "󱢔",
},
{
	title: "md-ice_cream",
	icon: "󰠪",
},
{
	title: "md-ice_cream_off",
	icon: "󰹒",
},
{
	title: "md-ice_pop",
	icon: "󰻽",
},
{
	title: "md-id_card",
	icon: "󰿀",
},
{
	title: "md-identifier",
	icon: "󰻾",
},
{
	title: "md-ideogram_cjk",
	icon: "󱌱",
},
{
	title: "md-ideogram_cjk_variant",
	icon: "󱌲",
},
{
	title: "md-image",
	icon: "󰋩",
},
{
	title: "md-image_album",
	icon: "󰋪",
},
{
	title: "md-image_area",
	icon: "󰋫",
},
{
	title: "md-image_area_close",
	icon: "󰋬",
},
{
	title: "md-image_auto_adjust",
	icon: "󰿁",
},
{
	title: "md-image_broken",
	icon: "󰋭",
},
{
	title: "md-image_broken_variant",
	icon: "󰋮",
},
{
	title: "md-image_edit",
	icon: "󱇣",
},
{
	title: "md-image_edit_outline",
	icon: "󱇤",
},
{
	title: "md-image_filter_black_white",
	icon: "󰋰",
},
{
	title: "md-image_filter_center_focus",
	icon: "󰋱",
},
{
	title: "md-image_filter_center_focus_strong",
	icon: "󰻿",
},
{
	title: "md-image_filter_center_focus_strong_outline",
	icon: "󰼀",
},
{
	title: "md-image_filter_center_focus_weak",
	icon: "󰋲",
},
{
	title: "md-image_filter_drama",
	icon: "󰋳",
},
{
	title: "md-image_filter_frames",
	icon: "󰋴",
},
{
	title: "md-image_filter_hdr",
	icon: "󰋵",
},
{
	title: "md-image_filter_none",
	icon: "󰋶",
},
{
	title: "md-image_filter_tilt_shift",
	icon: "󰋷",
},
{
	title: "md-image_filter_vintage",
	icon: "󰋸",
},
{
	title: "md-image_frame",
	icon: "󰹉",
},
{
	title: "md-image_lock",
	icon: "󱪰",
},
{
	title: "md-image_lock_outline",
	icon: "󱪱",
},
{
	title: "md-image_marker",
	icon: "󱝻",
},
{
	title: "md-image_marker_outline",
	icon: "󱝼",
},
{
	title: "md-image_minus",
	icon: "󱐙",
},
{
	title: "md-image_move",
	icon: "󰧸",
},
{
	title: "md-image_multiple",
	icon: "󰋹",
},
{
	title: "md-image_multiple_outline",
	icon: "󰋯",
},
{
	title: "md-image_off",
	icon: "󰠫",
},
{
	title: "md-image_off_outline",
	icon: "󱇑",
},
{
	title: "md-image_outline",
	icon: "󰥶",
},
{
	title: "md-image_plus",
	icon: "󰡼",
},
{
	title: "md-image_refresh",
	icon: "󱧾",
},
{
	title: "md-image_refresh_outline",
	icon: "󱧿",
},
{
	title: "md-image_remove",
	icon: "󱐘",
},
{
	title: "md-image_search",
	icon: "󰥷",
},
{
	title: "md-image_search_outline",
	icon: "󰥸",
},
{
	title: "md-image_size_select_actual",
	icon: "󰲍",
},
{
	title: "md-image_size_select_large",
	icon: "󰲎",
},
{
	title: "md-image_size_select_small",
	icon: "󰲏",
},
{
	title: "md-image_sync",
	icon: "󱨀",
},
{
	title: "md-image_sync_outline",
	icon: "󱨁",
},
{
	title: "md-image_text",
	icon: "󱘍",
},
{
	title: "md-import",
	icon: "󰋺",
},
{
	title: "md-inbox",
	icon: "󰚇",
},
{
	title: "md-inbox_arrow_down",
	icon: "󰋻",
},
{
	title: "md-inbox_arrow_down_outline",
	icon: "󱉰",
},
{
	title: "md-inbox_arrow_up",
	icon: "󰏑",
},
{
	title: "md-inbox_arrow_up_outline",
	icon: "󱉱",
},
{
	title: "md-inbox_full",
	icon: "󱉲",
},
{
	title: "md-inbox_full_outline",
	icon: "󱉳",
},
{
	title: "md-inbox_multiple",
	icon: "󰢰",
},
{
	title: "md-inbox_multiple_outline",
	icon: "󰮨",
},
{
	title: "md-inbox_outline",
	icon: "󱉴",
},
{
	title: "md-inbox_remove",
	icon: "󱖟",
},
{
	title: "md-inbox_remove_outline",
	icon: "󱖠",
},
{
	title: "md-incognito",
	icon: "󰗹",
},
{
	title: "md-incognito_circle",
	icon: "󱐡",
},
{
	title: "md-incognito_circle_off",
	icon: "󱐢",
},
{
	title: "md-incognito_off",
	icon: "󰁵",
},
{
	title: "md-induction",
	icon: "󱡌",
},
{
	title: "md-infinity",
	icon: "󰛤",
},
{
	title: "md-information",
	icon: "󰋼",
},
{
	title: "md-information_off",
	icon: "󱞌",
},
{
	title: "md-information_off_outline",
	icon: "󱞍",
},
{
	title: "md-information_outline",
	icon: "󰋽",
},
{
	title: "md-information_variant",
	icon: "󰙎",
},
{
	title: "md-instagram",
	icon: "󰋾",
},
{
	title: "md-instrument_triangle",
	icon: "󱁎",
},
{
	title: "md-integrated_circuit_chip",
	icon: "󱤓",
},
{
	title: "md-invert_colors",
	icon: "󰌁",
},
{
	title: "md-invert_colors_off",
	icon: "󰹊",
},
{
	title: "md-iobroker",
	icon: "󱋨",
},
{
	title: "md-ip",
	icon: "󰩟",
},
{
	title: "md-ip_network",
	icon: "󰩠",
},
{
	title: "md-ip_network_outline",
	icon: "󰲐",
},
{
	title: "md-ip_outline",
	icon: "󱦂",
},
{
	title: "md-ipod",
	icon: "󰲑",
},
{
	title: "md-iron",
	icon: "󱠤",
},
{
	title: "md-iron_board",
	icon: "󱠸",
},
{
	title: "md-iron_outline",
	icon: "󱠥",
},
{
	title: "md-island",
	icon: "󱁏",
},
{
	title: "md-iv_bag",
	icon: "󱂹",
},
{
	title: "md-jabber",
	icon: "󰷕",
},
{
	title: "md-jeepney",
	icon: "󰌂",
},
{
	title: "md-jellyfish",
	icon: "󰼁",
},
{
	title: "md-jellyfish_outline",
	icon: "󰼂",
},
{
	title: "md-jira",
	icon: "󰌃",
},
{
	title: "md-jquery",
	icon: "󰡽",
},
{
	title: "md-jsfiddle",
	icon: "󰌄",
},
{
	title: "md-jump_rope",
	icon: "󱋿",
},
{
	title: "md-kabaddi",
	icon: "󰶇",
},
{
	title: "md-kangaroo",
	icon: "󱕘",
},
{
	title: "md-karate",
	icon: "󰠬",
},
{
	title: "md-kayaking",
	icon: "󰢯",
},
{
	title: "md-keg",
	icon: "󰌅",
},
{
	title: "md-kettle",
	icon: "󰗺",
},
{
	title: "md-kettle_alert",
	icon: "󱌗",
},
{
	title: "md-kettle_alert_outline",
	icon: "󱌘",
},
{
	title: "md-kettle_off",
	icon: "󱌛",
},
{
	title: "md-kettle_off_outline",
	icon: "󱌜",
},
{
	title: "md-kettle_outline",
	icon: "󰽖",
},
{
	title: "md-kettle_pour_over",
	icon: "󱜼",
},
{
	title: "md-kettle_steam",
	icon: "󱌙",
},
{
	title: "md-kettle_steam_outline",
	icon: "󱌚",
},
{
	title: "md-kettlebell",
	icon: "󱌀",
},
{
	title: "md-key",
	icon: "󰌆",
},
{
	title: "md-key_alert",
	icon: "󱦃",
},
{
	title: "md-key_alert_outline",
	icon: "󱦄",
},
{
	title: "md-key_arrow_right",
	icon: "󱌒",
},
{
	title: "md-key_chain",
	icon: "󱕴",
},
{
	title: "md-key_chain_variant",
	icon: "󱕵",
},
{
	title: "md-key_change",
	icon: "󰌇",
},
{
	title: "md-key_link",
	icon: "󱆟",
},
{
	title: "md-key_minus",
	icon: "󰌈",
},
{
	title: "md-key_outline",
	icon: "󰷖",
},
{
	title: "md-key_plus",
	icon: "󰌉",
},
{
	title: "md-key_remove",
	icon: "󰌊",
},
{
	title: "md-key_star",
	icon: "󱆞",
},
{
	title: "md-key_variant",
	icon: "󰌋",
},
{
	title: "md-key_wireless",
	icon: "󰿂",
},
{
	title: "md-keyboard",
	icon: "󰌌",
},
{
	title: "md-keyboard_backspace",
	icon: "󰌍",
},
{
	title: "md-keyboard_caps",
	icon: "󰌎",
},
{
	title: "md-keyboard_close",
	icon: "󰌏",
},
{
	title: "md-keyboard_esc",
	icon: "󱊷",
},
{
	title: "md-keyboard_f1",
	icon: "󱊫",
},
{
	title: "md-keyboard_f10",
	icon: "󱊴",
},
{
	title: "md-keyboard_f11",
	icon: "󱊵",
},
{
	title: "md-keyboard_f12",
	icon: "󱊶",
},
{
	title: "md-keyboard_f2",
	icon: "󱊬",
},
{
	title: "md-keyboard_f3",
	icon: "󱊭",
},
{
	title: "md-keyboard_f4",
	icon: "󱊮",
},
{
	title: "md-keyboard_f5",
	icon: "󱊯",
},
{
	title: "md-keyboard_f6",
	icon: "󱊰",
},
{
	title: "md-keyboard_f7",
	icon: "󱊱",
},
{
	title: "md-keyboard_f8",
	icon: "󱊲",
},
{
	title: "md-keyboard_f9",
	icon: "󱊳",
},
{
	title: "md-keyboard_off",
	icon: "󰌐",
},
{
	title: "md-keyboard_off_outline",
	icon: "󰹋",
},
{
	title: "md-keyboard_outline",
	icon: "󰥻",
},
{
	title: "md-keyboard_return",
	icon: "󰌑",
},
{
	title: "md-keyboard_settings",
	icon: "󰧹",
},
{
	title: "md-keyboard_settings_outline",
	icon: "󰧺",
},
{
	title: "md-keyboard_space",
	icon: "󱁐",
},
{
	title: "md-keyboard_tab",
	icon: "󰌒",
},
{
	title: "md-keyboard_tab_reverse",
	icon: "󰌥",
},
{
	title: "md-keyboard_variant",
	icon: "󰌓",
},
{
	title: "md-khanda",
	icon: "󱃽",
},
{
	title: "md-kickstarter",
	icon: "󰝅",
},
{
	title: "md-kite",
	icon: "󱦅",
},
{
	title: "md-kite_outline",
	icon: "󱦆",
},
{
	title: "md-kitesurfing",
	icon: "󱝄",
},
{
	title: "md-klingon",
	icon: "󱍛",
},
{
	title: "md-knife",
	icon: "󰧻",
},
{
	title: "md-knife_military",
	icon: "󰧼",
},
{
	title: "md-koala",
	icon: "󱜿",
},
{
	title: "md-kodi",
	icon: "󰌔",
},
{
	title: "md-kubernetes",
	icon: "󱃾",
},
{
	title: "md-label",
	icon: "󰌕",
},
{
	title: "md-label_multiple",
	icon: "󱍵",
},
{
	title: "md-label_multiple_outline",
	icon: "󱍶",
},
{
	title: "md-label_off",
	icon: "󰫋",
},
{
	title: "md-label_off_outline",
	icon: "󰫌",
},
{
	title: "md-label_outline",
	icon: "󰌖",
},
{
	title: "md-label_percent",
	icon: "󱋪",
},
{
	title: "md-label_percent_outline",
	icon: "󱋫",
},
{
	title: "md-label_variant",
	icon: "󰫍",
},
{
	title: "md-label_variant_outline",
	icon: "󰫎",
},
{
	title: "md-ladder",
	icon: "󱖢",
},
{
	title: "md-ladybug",
	icon: "󰠭",
},
{
	title: "md-lambda",
	icon: "󰘧",
},
{
	title: "md-lamp",
	icon: "󰚵",
},
{
	title: "md-lamp_outline",
	icon: "󱟐",
},
{
	title: "md-lamps",
	icon: "󱕶",
},
{
	title: "md-lamps_outline",
	icon: "󱟑",
},
{
	title: "md-lan",
	icon: "󰌗",
},
{
	title: "md-lan_check",
	icon: "󱊪",
},
{
	title: "md-lan_connect",
	icon: "󰌘",
},
{
	title: "md-lan_disconnect",
	icon: "󰌙",
},
{
	title: "md-lan_pending",
	icon: "󰌚",
},
{
	title: "md-land_fields",
	icon: "󱪲",
},
{
	title: "md-land_plots",
	icon: "󱪳",
},
{
	title: "md-land_plots_circle",
	icon: "󱪴",
},
{
	title: "md-land_plots_circle_variant",
	icon: "󱪵",
},
{
	title: "md-land_rows_horizontal",
	icon: "󱪶",
},
{
	title: "md-land_rows_vertical",
	icon: "󱪷",
},
{
	title: "md-landslide",
	icon: "󱩈",
},
{
	title: "md-landslide_outline",
	icon: "󱩉",
},
{
	title: "md-language_c",
	icon: "󰙱",
},
{
	title: "md-language_cpp",
	icon: "󰙲",
},
{
	title: "md-language_csharp",
	icon: "󰌛",
},
{
	title: "md-language_css3",
	icon: "󰌜",
},
{
	title: "md-language_fortran",
	icon: "󱈚",
},
{
	title: "md-language_go",
	icon: "󰟓",
},
{
	title: "md-language_haskell",
	icon: "󰲒",
},
{
	title: "md-language_html5",
	icon: "󰌝",
},
{
	title: "md-language_java",
	icon: "󰬷",
},
{
	title: "md-language_javascript",
	icon: "󰌞",
},
{
	title: "md-language_kotlin",
	icon: "󱈙",
},
{
	title: "md-language_lua",
	icon: "󰢱",
},
{
	title: "md-language_markdown",
	icon: "󰍔",
},
{
	title: "md-language_markdown_outline",
	icon: "󰽛",
},
{
	title: "md-language_php",
	icon: "󰌟",
},
{
	title: "md-language_python",
	icon: "󰌠",
},
{
	title: "md-language_r",
	icon: "󰟔",
},
{
	title: "md-language_ruby",
	icon: "󰴭",
},
{
	title: "md-language_ruby_on_rails",
	icon: "󰫏",
},
{
	title: "md-language_rust",
	icon: "󱘗",
},
{
	title: "md-language_swift",
	icon: "󰛥",
},
{
	title: "md-language_typescript",
	icon: "󰛦",
},
{
	title: "md-language_xaml",
	icon: "󰙳",
},
{
	title: "md-laptop",
	icon: "󰌢",
},
{
	title: "md-laptop_account",
	icon: "󱩊",
},
{
	title: "md-laptop_off",
	icon: "󰛧",
},
{
	title: "md-laravel",
	icon: "󰫐",
},
{
	title: "md-laser_pointer",
	icon: "󱒄",
},
{
	title: "md-lasso",
	icon: "󰼃",
},
{
	title: "md-lastpass",
	icon: "󰑆",
},
{
	title: "md-latitude",
	icon: "󰽗",
},
{
	title: "md-launch",
	icon: "󰌧",
},
{
	title: "md-lava_lamp",
	icon: "󰟕",
},
{
	title: "md-layers",
	icon: "󰌨",
},
{
	title: "md-layers_edit",
	icon: "󱢒",
},
{
	title: "md-layers_minus",
	icon: "󰹌",
},
{
	title: "md-layers_off",
	icon: "󰌩",
},
{
	title: "md-layers_off_outline",
	icon: "󰧽",
},
{
	title: "md-layers_outline",
	icon: "󰧾",
},
{
	title: "md-layers_plus",
	icon: "󰹍",
},
{
	title: "md-layers_remove",
	icon: "󰹎",
},
{
	title: "md-layers_search",
	icon: "󱈆",
},
{
	title: "md-layers_search_outline",
	icon: "󱈇",
},
{
	title: "md-layers_triple",
	icon: "󰽘",
},
{
	title: "md-layers_triple_outline",
	icon: "󰽙",
},
{
	title: "md-lead_pencil",
	icon: "󰙏",
},
{
	title: "md-leaf",
	icon: "󰌪",
},
{
	title: "md-leaf_circle",
	icon: "󱤅",
},
{
	title: "md-leaf_circle_outline",
	icon: "󱤆",
},
{
	title: "md-leaf_maple",
	icon: "󰲓",
},
{
	title: "md-leaf_maple_off",
	icon: "󱋚",
},
{
	title: "md-leaf_off",
	icon: "󱋙",
},
{
	title: "md-leak",
	icon: "󰷗",
},
{
	title: "md-leak_off",
	icon: "󰷘",
},
{
	title: "md-lecturn",
	icon: "󱫰",
},
{
	title: "md-led_off",
	icon: "󰌫",
},
{
	title: "md-led_on",
	icon: "󰌬",
},
{
	title: "md-led_outline",
	icon: "󰌭",
},
{
	title: "md-led_strip",
	icon: "󰟖",
},
{
	title: "md-led_strip_variant",
	icon: "󱁑",
},
{
	title: "md-led_strip_variant_off",
	icon: "󱩋",
},
{
	title: "md-led_variant_off",
	icon: "󰌮",
},
{
	title: "md-led_variant_on",
	icon: "󰌯",
},
{
	title: "md-led_variant_outline",
	icon: "󰌰",
},
{
	title: "md-leek",
	icon: "󱅽",
},
{
	title: "md-less_than",
	icon: "󰥼",
},
{
	title: "md-less_than_or_equal",
	icon: "󰥽",
},
{
	title: "md-library",
	icon: "󰌱",
},
{
	title: "md-library_outline",
	icon: "󱨢",
},
{
	title: "md-library_shelves",
	icon: "󰮩",
},
{
	title: "md-license",
	icon: "󰿃",
},
{
	title: "md-lifebuoy",
	icon: "󰡾",
},
{
	title: "md-light_flood_down",
	icon: "󱦇",
},
{
	title: "md-light_flood_up",
	icon: "󱦈",
},
{
	title: "md-light_recessed",
	icon: "󱞛",
},
{
	title: "md-light_switch",
	icon: "󰥾",
},
{
	title: "md-light_switch_off",
	icon: "󱨤",
},
{
	title: "md-lightbulb",
	icon: "󰌵",
},
{
	title: "md-lightbulb_alert",
	icon: "󱧡",
},
{
	title: "md-lightbulb_alert_outline",
	icon: "󱧢",
},
{
	title: "md-lightbulb_auto",
	icon: "󱠀",
},
{
	title: "md-lightbulb_auto_outline",
	icon: "󱠁",
},
{
	title: "md-lightbulb_cfl",
	icon: "󱈈",
},
{
	title: "md-lightbulb_cfl_off",
	icon: "󱈉",
},
{
	title: "md-lightbulb_cfl_spiral",
	icon: "󱉵",
},
{
	title: "md-lightbulb_cfl_spiral_off",
	icon: "󱋃",
},
{
	title: "md-lightbulb_fluorescent_tube",
	icon: "󱠄",
},
{
	title: "md-lightbulb_fluorescent_tube_outline",
	icon: "󱠅",
},
{
	title: "md-lightbulb_group",
	icon: "󱉓",
},
{
	title: "md-lightbulb_group_off",
	icon: "󱋍",
},
{
	title: "md-lightbulb_group_off_outline",
	icon: "󱋎",
},
{
	title: "md-lightbulb_group_outline",
	icon: "󱉔",
},
{
	title: "md-lightbulb_multiple",
	icon: "󱉕",
},
{
	title: "md-lightbulb_multiple_off",
	icon: "󱋏",
},
{
	title: "md-lightbulb_multiple_off_outline",
	icon: "󱋐",
},
{
	title: "md-lightbulb_multiple_outline",
	icon: "󱉖",
},
{
	title: "md-lightbulb_night",
	icon: "󱩌",
},
{
	title: "md-lightbulb_night_outline",
	icon: "󱩍",
},
{
	title: "md-lightbulb_off",
	icon: "󰹏",
},
{
	title: "md-lightbulb_off_outline",
	icon: "󰹐",
},
{
	title: "md-lightbulb_on",
	icon: "󰛨",
},
{
	title: "md-lightbulb_on_10",
	icon: "󱩎",
},
{
	title: "md-lightbulb_on_20",
	icon: "󱩏",
},
{
	title: "md-lightbulb_on_30",
	icon: "󱩐",
},
{
	title: "md-lightbulb_on_40",
	icon: "󱩑",
},
{
	title: "md-lightbulb_on_50",
	icon: "󱩒",
},
{
	title: "md-lightbulb_on_60",
	icon: "󱩓",
},
{
	title: "md-lightbulb_on_70",
	icon: "󱩔",
},
{
	title: "md-lightbulb_on_80",
	icon: "󱩕",
},
{
	title: "md-lightbulb_on_90",
	icon: "󱩖",
},
{
	title: "md-lightbulb_on_outline",
	icon: "󰛩",
},
{
	title: "md-lightbulb_outline",
	icon: "󰌶",
},
{
	title: "md-lightbulb_question",
	icon: "󱧣",
},
{
	title: "md-lightbulb_question_outline",
	icon: "󱧤",
},
{
	title: "md-lightbulb_spot",
	icon: "󱟴",
},
{
	title: "md-lightbulb_spot_off",
	icon: "󱟵",
},
{
	title: "md-lightbulb_variant",
	icon: "󱠂",
},
{
	title: "md-lightbulb_variant_outline",
	icon: "󱠃",
},
{
	title: "md-lighthouse",
	icon: "󰧿",
},
{
	title: "md-lighthouse_on",
	icon: "󰨀",
},
{
	title: "md-lightning_bolt",
	icon: "󱐋",
},
{
	title: "md-lightning_bolt_circle",
	icon: "󰠠",
},
{
	title: "md-lightning_bolt_outline",
	icon: "󱐌",
},
{
	title: "md-line_scan",
	icon: "󰘤",
},
{
	title: "md-lingerie",
	icon: "󱑶",
},
{
	title: "md-link",
	icon: "󰌷",
},
{
	title: "md-link_box",
	icon: "󰴚",
},
{
	title: "md-link_box_outline",
	icon: "󰴛",
},
{
	title: "md-link_box_variant",
	icon: "󰴜",
},
{
	title: "md-link_box_variant_outline",
	icon: "󰴝",
},
{
	title: "md-link_lock",
	icon: "󱂺",
},
{
	title: "md-link_off",
	icon: "󰌸",
},
{
	title: "md-link_plus",
	icon: "󰲔",
},
{
	title: "md-link_variant",
	icon: "󰌹",
},
{
	title: "md-link_variant_minus",
	icon: "󱃿",
},
{
	title: "md-link_variant_off",
	icon: "󰌺",
},
{
	title: "md-link_variant_plus",
	icon: "󱄀",
},
{
	title: "md-link_variant_remove",
	icon: "󱄁",
},
{
	title: "md-linkedin",
	icon: "󰌻",
},
{
	title: "md-linux",
	icon: "󰌽",
},
{
	title: "md-linux_mint",
	icon: "󰣭",
},
{
	title: "md-lipstick",
	icon: "󱎵",
},
{
	title: "md-liquid_spot",
	icon: "󱠦",
},
{
	title: "md-liquor",
	icon: "󱤞",
},
{
	title: "md-list_status",
	icon: "󱖫",
},
{
	title: "md-litecoin",
	icon: "󰩡",
},
{
	title: "md-loading",
	icon: "󰝲",
},
{
	title: "md-location_enter",
	icon: "󰿄",
},
{
	title: "md-location_exit",
	icon: "󰿅",
},
{
	title: "md-lock",
	icon: "󰌾",
},
{
	title: "md-lock_alert",
	icon: "󰣮",
},
{
	title: "md-lock_alert_outline",
	icon: "󱗑",
},
{
	title: "md-lock_check",
	icon: "󱎚",
},
{
	title: "md-lock_check_outline",
	icon: "󱚨",
},
{
	title: "md-lock_clock",
	icon: "󰥿",
},
{
	title: "md-lock_minus",
	icon: "󱚩",
},
{
	title: "md-lock_minus_outline",
	icon: "󱚪",
},
{
	title: "md-lock_off",
	icon: "󱙱",
},
{
	title: "md-lock_off_outline",
	icon: "󱙲",
},
{
	title: "md-lock_open",
	icon: "󰌿",
},
{
	title: "md-lock_open_alert",
	icon: "󱎛",
},
{
	title: "md-lock_open_alert_outline",
	icon: "󱗒",
},
{
	title: "md-lock_open_check",
	icon: "󱎜",
},
{
	title: "md-lock_open_check_outline",
	icon: "󱚫",
},
{
	title: "md-lock_open_minus",
	icon: "󱚬",
},
{
	title: "md-lock_open_minus_outline",
	icon: "󱚭",
},
{
	title: "md-lock_open_outline",
	icon: "󰍀",
},
{
	title: "md-lock_open_plus",
	icon: "󱚮",
},
{
	title: "md-lock_open_plus_outline",
	icon: "󱚯",
},
{
	title: "md-lock_open_remove",
	icon: "󱚰",
},
{
	title: "md-lock_open_remove_outline",
	icon: "󱚱",
},
{
	title: "md-lock_open_variant",
	icon: "󰿆",
},
{
	title: "md-lock_open_variant_outline",
	icon: "󰿇",
},
{
	title: "md-lock_outline",
	icon: "󰍁",
},
{
	title: "md-lock_pattern",
	icon: "󰛪",
},
{
	title: "md-lock_plus",
	icon: "󰗻",
},
{
	title: "md-lock_plus_outline",
	icon: "󱚲",
},
{
	title: "md-lock_question",
	icon: "󰣯",
},
{
	title: "md-lock_remove",
	icon: "󱚳",
},
{
	title: "md-lock_remove_outline",
	icon: "󱚴",
},
{
	title: "md-lock_reset",
	icon: "󰝳",
},
{
	title: "md-lock_smart",
	icon: "󰢲",
},
{
	title: "md-locker",
	icon: "󰟗",
},
{
	title: "md-locker_multiple",
	icon: "󰟘",
},
{
	title: "md-login",
	icon: "󰍂",
},
{
	title: "md-logout",
	icon: "󰍃",
},
{
	title: "md-logout_variant",
	icon: "󰗽",
},
{
	title: "md-longitude",
	icon: "󰽚",
},
{
	title: "md-looks",
	icon: "󰍄",
},
{
	title: "md-lotion",
	icon: "󱖂",
},
{
	title: "md-lotion_outline",
	icon: "󱖃",
},
{
	title: "md-lotion_plus",
	icon: "󱖄",
},
{
	title: "md-lotion_plus_outline",
	icon: "󱖅",
},
{
	title: "md-loupe",
	icon: "󰍅",
},
{
	title: "md-lumx",
	icon: "󰍆",
},
{
	title: "md-lungs",
	icon: "󱂄",
},
{
	title: "md-mace",
	icon: "󱡃",
},
{
	title: "md-magazine_pistol",
	icon: "󰌤",
},
{
	title: "md-magazine_rifle",
	icon: "󰌣",
},
{
	title: "md-magic_staff",
	icon: "󱡄",
},
{
	title: "md-magnet",
	icon: "󰍇",
},
{
	title: "md-magnet_on",
	icon: "󰍈",
},
{
	title: "md-magnify",
	icon: "󰍉",
},
{
	title: "md-magnify_close",
	icon: "󰦀",
},
{
	title: "md-magnify_expand",
	icon: "󱡴",
},
{
	title: "md-magnify_minus",
	icon: "󰍊",
},
{
	title: "md-magnify_minus_cursor",
	icon: "󰩢",
},
{
	title: "md-magnify_minus_outline",
	icon: "󰛬",
},
{
	title: "md-magnify_plus",
	icon: "󰍋",
},
{
	title: "md-magnify_plus_cursor",
	icon: "󰩣",
},
{
	title: "md-magnify_plus_outline",
	icon: "󰛭",
},
{
	title: "md-magnify_remove_cursor",
	icon: "󱈌",
},
{
	title: "md-magnify_remove_outline",
	icon: "󱈍",
},
{
	title: "md-magnify_scan",
	icon: "󱉶",
},
{
	title: "md-mail",
	icon: "󰺻",
},
{
	title: "md-mailbox",
	icon: "󰛮",
},
{
	title: "md-mailbox_open",
	icon: "󰶈",
},
{
	title: "md-mailbox_open_outline",
	icon: "󰶉",
},
{
	title: "md-mailbox_open_up",
	icon: "󰶊",
},
{
	title: "md-mailbox_open_up_outline",
	icon: "󰶋",
},
{
	title: "md-mailbox_outline",
	icon: "󰶌",
},
{
	title: "md-mailbox_up",
	icon: "󰶍",
},
{
	title: "md-mailbox_up_outline",
	icon: "󰶎",
},
{
	title: "md-manjaro",
	icon: "󱘊",
},
{
	title: "md-map",
	icon: "󰍍",
},
{
	title: "md-map_check",
	icon: "󰺼",
},
{
	title: "md-map_check_outline",
	icon: "󰺽",
},
{
	title: "md-map_clock",
	icon: "󰴞",
},
{
	title: "md-map_clock_outline",
	icon: "󰴟",
},
{
	title: "md-map_legend",
	icon: "󰨁",
},
{
	title: "md-map_marker",
	icon: "󰍎",
},
{
	title: "md-map_marker_account",
	icon: "󱣣",
},
{
	title: "md-map_marker_account_outline",
	icon: "󱣤",
},
{
	title: "md-map_marker_alert",
	icon: "󰼅",
},
{
	title: "md-map_marker_alert_outline",
	icon: "󰼆",
},
{
	title: "md-map_marker_check",
	icon: "󰲕",
},
{
	title: "md-map_marker_check_outline",
	icon: "󱋻",
},
{
	title: "md-map_marker_circle",
	icon: "󰍏",
},
{
	title: "md-map_marker_distance",
	icon: "󰣰",
},
{
	title: "md-map_marker_down",
	icon: "󱄂",
},
{
	title: "md-map_marker_left",
	icon: "󱋛",
},
{
	title: "md-map_marker_left_outline",
	icon: "󱋝",
},
{
	title: "md-map_marker_minus",
	icon: "󰙐",
},
{
	title: "md-map_marker_minus_outline",
	icon: "󱋹",
},
{
	title: "md-map_marker_multiple",
	icon: "󰍐",
},
{
	title: "md-map_marker_multiple_outline",
	icon: "󱉷",
},
{
	title: "md-map_marker_off",
	icon: "󰍑",
},
{
	title: "md-map_marker_off_outline",
	icon: "󱋽",
},
{
	title: "md-map_marker_outline",
	icon: "󰟙",
},
{
	title: "md-map_marker_path",
	icon: "󰴠",
},
{
	title: "md-map_marker_plus",
	icon: "󰙑",
},
{
	title: "md-map_marker_plus_outline",
	icon: "󱋸",
},
{
	title: "md-map_marker_question",
	icon: "󰼇",
},
{
	title: "md-map_marker_question_outline",
	icon: "󰼈",
},
{
	title: "md-map_marker_radius",
	icon: "󰍒",
},
{
	title: "md-map_marker_radius_outline",
	icon: "󱋼",
},
{
	title: "md-map_marker_remove",
	icon: "󰼉",
},
{
	title: "md-map_marker_remove_outline",
	icon: "󱋺",
},
{
	title: "md-map_marker_remove_variant",
	icon: "󰼊",
},
{
	title: "md-map_marker_right",
	icon: "󱋜",
},
{
	title: "md-map_marker_right_outline",
	icon: "󱋞",
},
{
	title: "md-map_marker_star",
	icon: "󱘈",
},
{
	title: "md-map_marker_star_outline",
	icon: "󱘉",
},
{
	title: "md-map_marker_up",
	icon: "󱄃",
},
{
	title: "md-map_minus",
	icon: "󰦁",
},
{
	title: "md-map_outline",
	icon: "󰦂",
},
{
	title: "md-map_plus",
	icon: "󰦃",
},
{
	title: "md-map_search",
	icon: "󰦄",
},
{
	title: "md-map_search_outline",
	icon: "󰦅",
},
{
	title: "md-mapbox",
	icon: "󰮪",
},
{
	title: "md-margin",
	icon: "󰍓",
},
{
	title: "md-marker",
	icon: "󰙒",
},
{
	title: "md-marker_cancel",
	icon: "󰷙",
},
{
	title: "md-marker_check",
	icon: "󰍕",
},
{
	title: "md-mastodon",
	icon: "󰫑",
},
{
	title: "md-material_design",
	icon: "󰦆",
},
{
	title: "md-material_ui",
	icon: "󰍗",
},
{
	title: "md-math_compass",
	icon: "󰍘",
},
{
	title: "md-math_cos",
	icon: "󰲖",
},
{
	title: "md-math_integral",
	icon: "󰿈",
},
{
	title: "md-math_integral_box",
	icon: "󰿉",
},
{
	title: "md-math_log",
	icon: "󱂅",
},
{
	title: "md-math_norm",
	icon: "󰿊",
},
{
	title: "md-math_norm_box",
	icon: "󰿋",
},
{
	title: "md-math_sin",
	icon: "󰲗",
},
{
	title: "md-math_tan",
	icon: "󰲘",
},
{
	title: "md-matrix",
	icon: "󰘨",
},
{
	title: "md-medal",
	icon: "󰦇",
},
{
	title: "md-medal_outline",
	icon: "󱌦",
},
{
	title: "md-medical_bag",
	icon: "󰛯",
},
{
	title: "md-medical_cotton_swab",
	icon: "󱪸",
},
{
	title: "md-meditation",
	icon: "󱅻",
},
{
	title: "md-memory",
	icon: "󰍛",
},
{
	title: "md-menorah",
	icon: "󱟔",
},
{
	title: "md-menorah_fire",
	icon: "󱟕",
},
{
	title: "md-menu",
	icon: "󰍜",
},
{
	title: "md-menu_down",
	icon: "󰍝",
},
{
	title: "md-menu_down_outline",
	icon: "󰚶",
},
{
	title: "md-menu_left",
	icon: "󰍞",
},
{
	title: "md-menu_left_outline",
	icon: "󰨂",
},
{
	title: "md-menu_open",
	icon: "󰮫",
},
{
	title: "md-menu_right",
	icon: "󰍟",
},
{
	title: "md-menu_right_outline",
	icon: "󰨃",
},
{
	title: "md-menu_swap",
	icon: "󰩤",
},
{
	title: "md-menu_swap_outline",
	icon: "󰩥",
},
{
	title: "md-menu_up",
	icon: "󰍠",
},
{
	title: "md-menu_up_outline",
	icon: "󰚷",
},
{
	title: "md-merge",
	icon: "󰽜",
},
{
	title: "md-message",
	icon: "󰍡",
},
{
	title: "md-message_alert",
	icon: "󰍢",
},
{
	title: "md-message_alert_outline",
	icon: "󰨄",
},
{
	title: "md-message_arrow_left",
	icon: "󱋲",
},
{
	title: "md-message_arrow_left_outline",
	icon: "󱋳",
},
{
	title: "md-message_arrow_right",
	icon: "󱋴",
},
{
	title: "md-message_arrow_right_outline",
	icon: "󱋵",
},
{
	title: "md-message_badge",
	icon: "󱥁",
},
{
	title: "md-message_badge_outline",
	icon: "󱥂",
},
{
	title: "md-message_bookmark",
	icon: "󱖬",
},
{
	title: "md-message_bookmark_outline",
	icon: "󱖭",
},
{
	title: "md-message_bulleted",
	icon: "󰚢",
},
{
	title: "md-message_bulleted_off",
	icon: "󰚣",
},
{
	title: "md-message_cog",
	icon: "󰛱",
},
{
	title: "md-message_cog_outline",
	icon: "󱅲",
},
{
	title: "md-message_draw",
	icon: "󰍣",
},
{
	title: "md-message_fast",
	icon: "󱧌",
},
{
	title: "md-message_fast_outline",
	icon: "󱧍",
},
{
	title: "md-message_flash",
	icon: "󱖩",
},
{
	title: "md-message_flash_outline",
	icon: "󱖪",
},
{
	title: "md-message_image",
	icon: "󰍤",
},
{
	title: "md-message_image_outline",
	icon: "󱅬",
},
{
	title: "md-message_lock",
	icon: "󰿌",
},
{
	title: "md-message_lock_outline",
	icon: "󱅭",
},
{
	title: "md-message_minus",
	icon: "󱅮",
},
{
	title: "md-message_minus_outline",
	icon: "󱅯",
},
{
	title: "md-message_off",
	icon: "󱙍",
},
{
	title: "md-message_off_outline",
	icon: "󱙎",
},
{
	title: "md-message_outline",
	icon: "󰍥",
},
{
	title: "md-message_plus",
	icon: "󰙓",
},
{
	title: "md-message_plus_outline",
	icon: "󱂻",
},
{
	title: "md-message_processing",
	icon: "󰍦",
},
{
	title: "md-message_processing_outline",
	icon: "󱅰",
},
{
	title: "md-message_question",
	icon: "󱜺",
},
{
	title: "md-message_question_outline",
	icon: "󱜻",
},
{
	title: "md-message_reply",
	icon: "󰍧",
},
{
	title: "md-message_reply_outline",
	icon: "󱜽",
},
{
	title: "md-message_reply_text",
	icon: "󰍨",
},
{
	title: "md-message_reply_text_outline",
	icon: "󱜾",
},
{
	title: "md-message_settings",
	icon: "󰛰",
},
{
	title: "md-message_settings_outline",
	icon: "󱅱",
},
{
	title: "md-message_star",
	icon: "󰚚",
},
{
	title: "md-message_star_outline",
	icon: "󱉐",
},
{
	title: "md-message_text",
	icon: "󰍩",
},
{
	title: "md-message_text_clock",
	icon: "󱅳",
},
{
	title: "md-message_text_clock_outline",
	icon: "󱅴",
},
{
	title: "md-message_text_fast",
	icon: "󱧎",
},
{
	title: "md-message_text_fast_outline",
	icon: "󱧏",
},
{
	title: "md-message_text_lock",
	icon: "󰿍",
},
{
	title: "md-message_text_lock_outline",
	icon: "󱅵",
},
{
	title: "md-message_text_outline",
	icon: "󰍪",
},
{
	title: "md-message_video",
	icon: "󰍫",
},
{
	title: "md-meteor",
	icon: "󰘩",
},
{
	title: "md-meter_electric",
	icon: "󱩗",
},
{
	title: "md-meter_electric_outline",
	icon: "󱩘",
},
{
	title: "md-meter_gas",
	icon: "󱩙",
},
{
	title: "md-meter_gas_outline",
	icon: "󱩚",
},
{
	title: "md-metronome",
	icon: "󰟚",
},
{
	title: "md-metronome_tick",
	icon: "󰟛",
},
{
	title: "md-micro_sd",
	icon: "󰟜",
},
{
	title: "md-microphone",
	icon: "󰍬",
},
{
	title: "md-microphone_minus",
	icon: "󰢳",
},
{
	title: "md-microphone_off",
	icon: "󰍭",
},
{
	title: "md-microphone_outline",
	icon: "󰍮",
},
{
	title: "md-microphone_plus",
	icon: "󰢴",
},
{
	title: "md-microphone_question",
	icon: "󱦉",
},
{
	title: "md-microphone_question_outline",
	icon: "󱦊",
},
{
	title: "md-microphone_settings",
	icon: "󰍯",
},
{
	title: "md-microphone_variant",
	icon: "󰍰",
},
{
	title: "md-microphone_variant_off",
	icon: "󰍱",
},
{
	title: "md-microscope",
	icon: "󰙔",
},
{
	title: "md-microsoft",
	icon: "󰍲",
},
{
	title: "md-microsoft_access",
	icon: "󱎎",
},
{
	title: "md-microsoft_azure",
	icon: "󰠅",
},
{
	title: "md-microsoft_azure_devops",
	icon: "󰿕",
},
{
	title: "md-microsoft_bing",
	icon: "󰂤",
},
{
	title: "md-microsoft_dynamics_365",
	icon: "󰦈",
},
{
	title: "md-microsoft_edge",
	icon: "󰇩",
},
{
	title: "md-microsoft_excel",
	icon: "󱎏",
},
{
	title: "md-microsoft_internet_explorer",
	icon: "󰌀",
},
{
	title: "md-microsoft_office",
	icon: "󰏆",
},
{
	title: "md-microsoft_onedrive",
	icon: "󰏊",
},
{
	title: "md-microsoft_onenote",
	icon: "󰝇",
},
{
	title: "md-microsoft_outlook",
	icon: "󰴢",
},
{
	title: "md-microsoft_powerpoint",
	icon: "󱎐",
},
{
	title: "md-microsoft_sharepoint",
	icon: "󱎑",
},
{
	title: "md-microsoft_teams",
	icon: "󰊻",
},
{
	title: "md-microsoft_visual_studio",
	icon: "󰘐",
},
{
	title: "md-microsoft_visual_studio_code",
	icon: "󰨞",
},
{
	title: "md-microsoft_windows",
	icon: "󰖳",
},
{
	title: "md-microsoft_windows_classic",
	icon: "󰨡",
},
{
	title: "md-microsoft_word",
	icon: "󱎒",
},
{
	title: "md-microsoft_xbox",
	icon: "󰖹",
},
{
	title: "md-microsoft_xbox_controller",
	icon: "󰖺",
},
{
	title: "md-microsoft_xbox_controller_battery_alert",
	icon: "󰝋",
},
{
	title: "md-microsoft_xbox_controller_battery_charging",
	icon: "󰨢",
},
{
	title: "md-microsoft_xbox_controller_battery_empty",
	icon: "󰝌",
},
{
	title: "md-microsoft_xbox_controller_battery_full",
	icon: "󰝍",
},
{
	title: "md-microsoft_xbox_controller_battery_low",
	icon: "󰝎",
},
{
	title: "md-microsoft_xbox_controller_battery_medium",
	icon: "󰝏",
},
{
	title: "md-microsoft_xbox_controller_battery_unknown",
	icon: "󰝐",
},
{
	title: "md-microsoft_xbox_controller_menu",
	icon: "󰹯",
},
{
	title: "md-microsoft_xbox_controller_off",
	icon: "󰖻",
},
{
	title: "md-microsoft_xbox_controller_view",
	icon: "󰹰",
},
{
	title: "md-microwave",
	icon: "󰲙",
},
{
	title: "md-microwave_off",
	icon: "󱐣",
},
{
	title: "md-middleware",
	icon: "󰽝",
},
{
	title: "md-middleware_outline",
	icon: "󰽞",
},
{
	title: "md-midi",
	icon: "󰣱",
},
{
	title: "md-midi_port",
	icon: "󰣲",
},
{
	title: "md-mine",
	icon: "󰷚",
},
{
	title: "md-minecraft",
	icon: "󰍳",
},
{
	title: "md-mini_sd",
	icon: "󰨅",
},
{
	title: "md-minidisc",
	icon: "󰨆",
},
{
	title: "md-minus",
	icon: "󰍴",
},
{
	title: "md-minus_box",
	icon: "󰍵",
},
{
	title: "md-minus_box_multiple",
	icon: "󱅁",
},
{
	title: "md-minus_box_multiple_outline",
	icon: "󱅂",
},
{
	title: "md-minus_box_outline",
	icon: "󰛲",
},
{
	title: "md-minus_circle",
	icon: "󰍶",
},
{
	title: "md-minus_circle_multiple",
	icon: "󰍚",
},
{
	title: "md-minus_circle_multiple_outline",
	icon: "󰫓",
},
{
	title: "md-minus_circle_off",
	icon: "󱑙",
},
{
	title: "md-minus_circle_off_outline",
	icon: "󱑚",
},
{
	title: "md-minus_circle_outline",
	icon: "󰍷",
},
{
	title: "md-minus_network",
	icon: "󰍸",
},
{
	title: "md-minus_network_outline",
	icon: "󰲚",
},
{
	title: "md-minus_thick",
	icon: "󱘹",
},
{
	title: "md-mirror",
	icon: "󱇽",
},
{
	title: "md-mirror_rectangle",
	icon: "󱞟",
},
{
	title: "md-mirror_variant",
	icon: "󱞠",
},
{
	title: "md-mixed_martial_arts",
	icon: "󰶏",
},
{
	title: "md-mixed_reality",
	icon: "󰡿",
},
{
	title: "md-molecule",
	icon: "󰮬",
},
{
	title: "md-molecule_co",
	icon: "󱋾",
},
{
	title: "md-molecule_co2",
	icon: "󰟤",
},
{
	title: "md-monitor",
	icon: "󰍹",
},
{
	title: "md-monitor_account",
	icon: "󱩛",
},
{
	title: "md-monitor_arrow_down",
	icon: "󱧐",
},
{
	title: "md-monitor_arrow_down_variant",
	icon: "󱧑",
},
{
	title: "md-monitor_cellphone",
	icon: "󰦉",
},
{
	title: "md-monitor_cellphone_star",
	icon: "󰦊",
},
{
	title: "md-monitor_dashboard",
	icon: "󰨇",
},
{
	title: "md-monitor_edit",
	icon: "󱋆",
},
{
	title: "md-monitor_eye",
	icon: "󱎴",
},
{
	title: "md-monitor_lock",
	icon: "󰷛",
},
{
	title: "md-monitor_multiple",
	icon: "󰍺",
},
{
	title: "md-monitor_off",
	icon: "󰶐",
},
{
	title: "md-monitor_screenshot",
	icon: "󰹑",
},
{
	title: "md-monitor_share",
	icon: "󱒃",
},
{
	title: "md-monitor_shimmer",
	icon: "󱄄",
},
{
	title: "md-monitor_small",
	icon: "󱡶",
},
{
	title: "md-monitor_speaker",
	icon: "󰽟",
},
{
	title: "md-monitor_speaker_off",
	icon: "󰽠",
},
{
	title: "md-monitor_star",
	icon: "󰷜",
},
{
	title: "md-moon_first_quarter",
	icon: "󰽡",
},
{
	title: "md-moon_full",
	icon: "󰽢",
},
{
	title: "md-moon_last_quarter",
	icon: "󰽣",
},
{
	title: "md-moon_new",
	icon: "󰽤",
},
{
	title: "md-moon_waning_crescent",
	icon: "󰽥",
},
{
	title: "md-moon_waning_gibbous",
	icon: "󰽦",
},
{
	title: "md-moon_waxing_crescent",
	icon: "󰽧",
},
{
	title: "md-moon_waxing_gibbous",
	icon: "󰽨",
},
{
	title: "md-moped",
	icon: "󱂆",
},
{
	title: "md-moped_electric",
	icon: "󱖷",
},
{
	title: "md-moped_electric_outline",
	icon: "󱖸",
},
{
	title: "md-moped_outline",
	icon: "󱖹",
},
{
	title: "md-more",
	icon: "󰍻",
},
{
	title: "md-mortar_pestle",
	icon: "󱝈",
},
{
	title: "md-mortar_pestle_plus",
	icon: "󰏱",
},
{
	title: "md-mosque",
	icon: "󱠧",
},
{
	title: "md-mother_heart",
	icon: "󱌔",
},
{
	title: "md-mother_nurse",
	icon: "󰴡",
},
{
	title: "md-motion",
	icon: "󱖲",
},
{
	title: "md-motion_outline",
	icon: "󱖳",
},
{
	title: "md-motion_pause",
	icon: "󱖐",
},
{
	title: "md-motion_pause_outline",
	icon: "󱖒",
},
{
	title: "md-motion_play",
	icon: "󱖏",
},
{
	title: "md-motion_play_outline",
	icon: "󱖑",
},
{
	title: "md-motion_sensor",
	icon: "󰶑",
},
{
	title: "md-motion_sensor_off",
	icon: "󱐵",
},
{
	title: "md-motorbike",
	icon: "󰍼",
},
{
	title: "md-motorbike_electric",
	icon: "󱖺",
},
{
	title: "md-mouse",
	icon: "󰍽",
},
{
	title: "md-mouse_bluetooth",
	icon: "󰦋",
},
{
	title: "md-mouse_move_down",
	icon: "󱕐",
},
{
	title: "md-mouse_move_up",
	icon: "󱕑",
},
{
	title: "md-mouse_move_vertical",
	icon: "󱕒",
},
{
	title: "md-mouse_off",
	icon: "󰍾",
},
{
	title: "md-mouse_variant",
	icon: "󰍿",
},
{
	title: "md-mouse_variant_off",
	icon: "󰎀",
},
{
	title: "md-move_resize",
	icon: "󰙕",
},
{
	title: "md-move_resize_variant",
	icon: "󰙖",
},
{
	title: "md-movie",
	icon: "󰎁",
},
{
	title: "md-movie_check",
	icon: "󱛳",
},
{
	title: "md-movie_check_outline",
	icon: "󱛴",
},
{
	title: "md-movie_cog",
	icon: "󱛵",
},
{
	title: "md-movie_cog_outline",
	icon: "󱛶",
},
{
	title: "md-movie_edit",
	icon: "󱄢",
},
{
	title: "md-movie_edit_outline",
	icon: "󱄣",
},
{
	title: "md-movie_filter",
	icon: "󱄤",
},
{
	title: "md-movie_filter_outline",
	icon: "󱄥",
},
{
	title: "md-movie_minus",
	icon: "󱛷",
},
{
	title: "md-movie_minus_outline",
	icon: "󱛸",
},
{
	title: "md-movie_off",
	icon: "󱛹",
},
{
	title: "md-movie_off_outline",
	icon: "󱛺",
},
{
	title: "md-movie_open",
	icon: "󰿎",
},
{
	title: "md-movie_open_check",
	icon: "󱛻",
},
{
	title: "md-movie_open_check_outline",
	icon: "󱛼",
},
{
	title: "md-movie_open_cog",
	icon: "󱛽",
},
{
	title: "md-movie_open_cog_outline",
	icon: "󱛾",
},
{
	title: "md-movie_open_edit",
	icon: "󱛿",
},
{
	title: "md-movie_open_edit_outline",
	icon: "󱜀",
},
{
	title: "md-movie_open_minus",
	icon: "󱜁",
},
{
	title: "md-movie_open_minus_outline",
	icon: "󱜂",
},
{
	title: "md-movie_open_off",
	icon: "󱜃",
},
{
	title: "md-movie_open_off_outline",
	icon: "󱜄",
},
{
	title: "md-movie_open_outline",
	icon: "󰿏",
},
{
	title: "md-movie_open_play",
	icon: "󱜅",
},
{
	title: "md-movie_open_play_outline",
	icon: "󱜆",
},
{
	title: "md-movie_open_plus",
	icon: "󱜇",
},
{
	title: "md-movie_open_plus_outline",
	icon: "󱜈",
},
{
	title: "md-movie_open_remove",
	icon: "󱜉",
},
{
	title: "md-movie_open_remove_outline",
	icon: "󱜊",
},
{
	title: "md-movie_open_settings",
	icon: "󱜋",
},
{
	title: "md-movie_open_settings_outline",
	icon: "󱜌",
},
{
	title: "md-movie_open_star",
	icon: "󱜍",
},
{
	title: "md-movie_open_star_outline",
	icon: "󱜎",
},
{
	title: "md-movie_outline",
	icon: "󰷝",
},
{
	title: "md-movie_play",
	icon: "󱜏",
},
{
	title: "md-movie_play_outline",
	icon: "󱜐",
},
{
	title: "md-movie_plus",
	icon: "󱜑",
},
{
	title: "md-movie_plus_outline",
	icon: "󱜒",
},
{
	title: "md-movie_remove",
	icon: "󱜓",
},
{
	title: "md-movie_remove_outline",
	icon: "󱜔",
},
{
	title: "md-movie_roll",
	icon: "󰟞",
},
{
	title: "md-movie_search",
	icon: "󱇒",
},
{
	title: "md-movie_search_outline",
	icon: "󱇓",
},
{
	title: "md-movie_settings",
	icon: "󱜕",
},
{
	title: "md-movie_settings_outline",
	icon: "󱜖",
},
{
	title: "md-movie_star",
	icon: "󱜗",
},
{
	title: "md-movie_star_outline",
	icon: "󱜘",
},
{
	title: "md-mower",
	icon: "󱙯",
},
{
	title: "md-mower_bag",
	icon: "󱙰",
},
{
	title: "md-muffin",
	icon: "󰦌",
},
{
	title: "md-multicast",
	icon: "󱢓",
},
{
	title: "md-multiplication",
	icon: "󰎂",
},
{
	title: "md-multiplication_box",
	icon: "󰎃",
},
{
	title: "md-mushroom",
	icon: "󰟟",
},
{
	title: "md-mushroom_off",
	icon: "󱏺",
},
{
	title: "md-mushroom_off_outline",
	icon: "󱏻",
},
{
	title: "md-mushroom_outline",
	icon: "󰟠",
},
{
	title: "md-music",
	icon: "󰝚",
},
{
	title: "md-music_accidental_double_flat",
	icon: "󰽩",
},
{
	title: "md-music_accidental_double_sharp",
	icon: "󰽪",
},
{
	title: "md-music_accidental_flat",
	icon: "󰽫",
},
{
	title: "md-music_accidental_natural",
	icon: "󰽬",
},
{
	title: "md-music_accidental_sharp",
	icon: "󰽭",
},
{
	title: "md-music_box",
	icon: "󰎄",
},
{
	title: "md-music_box_multiple",
	icon: "󰌳",
},
{
	title: "md-music_box_multiple_outline",
	icon: "󰼄",
},
{
	title: "md-music_box_outline",
	icon: "󰎅",
},
{
	title: "md-music_circle",
	icon: "󰎆",
},
{
	title: "md-music_circle_outline",
	icon: "󰫔",
},
{
	title: "md-music_clef_alto",
	icon: "󰽮",
},
{
	title: "md-music_clef_bass",
	icon: "󰽯",
},
{
	title: "md-music_clef_treble",
	icon: "󰽰",
},
{
	title: "md-music_note",
	icon: "󰎇",
},
{
	title: "md-music_note_bluetooth",
	icon: "󰗾",
},
{
	title: "md-music_note_bluetooth_off",
	icon: "󰗿",
},
{
	title: "md-music_note_eighth_dotted",
	icon: "󰽱",
},
{
	title: "md-music_note_half",
	icon: "󰎉",
},
{
	title: "md-music_note_half_dotted",
	icon: "󰽲",
},
{
	title: "md-music_note_off",
	icon: "󰎊",
},
{
	title: "md-music_note_off_outline",
	icon: "󰽳",
},
{
	title: "md-music_note_outline",
	icon: "󰽴",
},
{
	title: "md-music_note_plus",
	icon: "󰷞",
},
{
	title: "md-music_note_quarter",
	icon: "󰎋",
},
{
	title: "md-music_note_quarter_dotted",
	icon: "󰽵",
},
{
	title: "md-music_note_sixteenth",
	icon: "󰎌",
},
{
	title: "md-music_note_sixteenth_dotted",
	icon: "󰽶",
},
{
	title: "md-music_note_whole",
	icon: "󰎍",
},
{
	title: "md-music_note_whole_dotted",
	icon: "󰽷",
},
{
	title: "md-music_off",
	icon: "󰝛",
},
{
	title: "md-music_rest_eighth",
	icon: "󰽸",
},
{
	title: "md-music_rest_half",
	icon: "󰽹",
},
{
	title: "md-music_rest_quarter",
	icon: "󰽺",
},
{
	title: "md-music_rest_sixteenth",
	icon: "󰽻",
},
{
	title: "md-music_rest_whole",
	icon: "󰽼",
},
{
	title: "md-mustache",
	icon: "󱗞",
},
{
	title: "md-nail",
	icon: "󰷟",
},
{
	title: "md-nas",
	icon: "󰣳",
},
{
	title: "md-nativescript",
	icon: "󰢀",
},
{
	title: "md-nature",
	icon: "󰎎",
},
{
	title: "md-nature_people",
	icon: "󰎏",
},
{
	title: "md-navigation",
	icon: "󰎐",
},
{
	title: "md-navigation_outline",
	icon: "󱘇",
},
{
	title: "md-navigation_variant_outline",
	icon: "󱣱",
},
{
	title: "md-near_me",
	icon: "󰗍",
},
{
	title: "md-necklace",
	icon: "󰼋",
},
{
	title: "md-needle",
	icon: "󰎑",
},
{
	title: "md-needle_off",
	icon: "󱧒",
},
{
	title: "md-netflix",
	icon: "󰝆",
},
{
	title: "md-network",
	icon: "󰛳",
},
{
	title: "md-network_off",
	icon: "󰲛",
},
{
	title: "md-network_off_outline",
	icon: "󰲜",
},
{
	title: "md-network_outline",
	icon: "󰲝",
},
{
	title: "md-network_pos",
	icon: "󱫋",
},
{
	title: "md-network_strength_1",
	icon: "󰣴",
},
{
	title: "md-network_strength_1_alert",
	icon: "󰣵",
},
{
	title: "md-network_strength_2",
	icon: "󰣶",
},
{
	title: "md-network_strength_2_alert",
	icon: "󰣷",
},
{
	title: "md-network_strength_3",
	icon: "󰣸",
},
{
	title: "md-network_strength_3_alert",
	icon: "󰣹",
},
{
	title: "md-network_strength_4",
	icon: "󰣺",
},
{
	title: "md-network_strength_4_alert",
	icon: "󰣻",
},
{
	title: "md-network_strength_4_cog",
	icon: "󱤚",
},
{
	title: "md-network_strength_off",
	icon: "󰣼",
},
{
	title: "md-network_strength_off_outline",
	icon: "󰣽",
},
{
	title: "md-network_strength_outline",
	icon: "󰣾",
},
{
	title: "md-new_box",
	icon: "󰎔",
},
{
	title: "md-newspaper",
	icon: "󰎕",
},
{
	title: "md-newspaper_check",
	icon: "󱥃",
},
{
	title: "md-newspaper_minus",
	icon: "󰼌",
},
{
	title: "md-newspaper_plus",
	icon: "󰼍",
},
{
	title: "md-newspaper_remove",
	icon: "󱥄",
},
{
	title: "md-newspaper_variant",
	icon: "󱀁",
},
{
	title: "md-newspaper_variant_multiple",
	icon: "󱀂",
},
{
	title: "md-newspaper_variant_multiple_outline",
	icon: "󱀃",
},
{
	title: "md-newspaper_variant_outline",
	icon: "󱀄",
},
{
	title: "md-nfc",
	icon: "󰎖",
},
{
	title: "md-nfc_search_variant",
	icon: "󰹓",
},
{
	title: "md-nfc_tap",
	icon: "󰎗",
},
{
	title: "md-nfc_variant",
	icon: "󰎘",
},
{
	title: "md-nfc_variant_off",
	icon: "󰹔",
},
{
	title: "md-ninja",
	icon: "󰝴",
},
{
	title: "md-nintendo_game_boy",
	icon: "󱎓",
},
{
	title: "md-nintendo_switch",
	icon: "󰟡",
},
{
	title: "md-nintendo_wii",
	icon: "󰖫",
},
{
	title: "md-nintendo_wiiu",
	icon: "󰜭",
},
{
	title: "md-nix",
	icon: "󱄅",
},
{
	title: "md-nodejs",
	icon: "󰎙",
},
{
	title: "md-noodles",
	icon: "󱅾",
},
{
	title: "md-not_equal",
	icon: "󰦍",
},
{
	title: "md-not_equal_variant",
	icon: "󰦎",
},
{
	title: "md-note",
	icon: "󰎚",
},
{
	title: "md-note_alert",
	icon: "󱝽",
},
{
	title: "md-note_alert_outline",
	icon: "󱝾",
},
{
	title: "md-note_check",
	icon: "󱝿",
},
{
	title: "md-note_check_outline",
	icon: "󱞀",
},
{
	title: "md-note_edit",
	icon: "󱞁",
},
{
	title: "md-note_edit_outline",
	icon: "󱞂",
},
{
	title: "md-note_minus",
	icon: "󱙏",
},
{
	title: "md-note_minus_outline",
	icon: "󱙐",
},
{
	title: "md-note_multiple",
	icon: "󰚸",
},
{
	title: "md-note_multiple_outline",
	icon: "󰚹",
},
{
	title: "md-note_off",
	icon: "󱞃",
},
{
	title: "md-note_off_outline",
	icon: "󱞄",
},
{
	title: "md-note_outline",
	icon: "󰎛",
},
{
	title: "md-note_plus",
	icon: "󰎜",
},
{
	title: "md-note_plus_outline",
	icon: "󰎝",
},
{
	title: "md-note_remove",
	icon: "󱙑",
},
{
	title: "md-note_remove_outline",
	icon: "󱙒",
},
{
	title: "md-note_search",
	icon: "󱙓",
},
{
	title: "md-note_search_outline",
	icon: "󱙔",
},
{
	title: "md-note_text",
	icon: "󰎞",
},
{
	title: "md-note_text_outline",
	icon: "󱇗",
},
{
	title: "md-notebook",
	icon: "󰠮",
},
{
	title: "md-notebook_check",
	icon: "󱓵",
},
{
	title: "md-notebook_check_outline",
	icon: "󱓶",
},
{
	title: "md-notebook_edit",
	icon: "󱓧",
},
{
	title: "md-notebook_edit_outline",
	icon: "󱓩",
},
{
	title: "md-notebook_heart",
	icon: "󱨋",
},
{
	title: "md-notebook_heart_outline",
	icon: "󱨌",
},
{
	title: "md-notebook_minus",
	icon: "󱘐",
},
{
	title: "md-notebook_minus_outline",
	icon: "󱘑",
},
{
	title: "md-notebook_multiple",
	icon: "󰹕",
},
{
	title: "md-notebook_outline",
	icon: "󰺿",
},
{
	title: "md-notebook_plus",
	icon: "󱘒",
},
{
	title: "md-notebook_plus_outline",
	icon: "󱘓",
},
{
	title: "md-notebook_remove",
	icon: "󱘔",
},
{
	title: "md-notebook_remove_outline",
	icon: "󱘕",
},
{
	title: "md-notification_clear_all",
	icon: "󰎟",
},
{
	title: "md-npm",
	icon: "󰛷",
},
{
	title: "md-nuke",
	icon: "󰚤",
},
{
	title: "md-null",
	icon: "󰟢",
},
{
	title: "md-numeric",
	icon: "󰎠",
},
{
	title: "md-numeric_0_box",
	icon: "󰎡",
},
{
	title: "md-numeric_0_box_multiple",
	icon: "󰼎",
},
{
	title: "md-numeric_0_box_multiple_outline",
	icon: "󰎢",
},
{
	title: "md-numeric_0_box_outline",
	icon: "󰎣",
},
{
	title: "md-numeric_1",
	icon: "󰬺",
},
{
	title: "md-numeric_10",
	icon: "󰿩",
},
{
	title: "md-numeric_10_box",
	icon: "󰽽",
},
{
	title: "md-numeric_10_box_multiple",
	icon: "󰿪",
},
{
	title: "md-numeric_10_box_multiple_outline",
	icon: "󰿫",
},
{
	title: "md-numeric_10_box_outline",
	icon: "󰽾",
},
{
	title: "md-numeric_10_circle",
	icon: "󰿬",
},
{
	title: "md-numeric_10_circle_outline",
	icon: "󰿭",
},
{
	title: "md-numeric_1_box",
	icon: "󰎤",
},
{
	title: "md-numeric_1_box_multiple",
	icon: "󰼏",
},
{
	title: "md-numeric_1_box_multiple_outline",
	icon: "󰎥",
},
{
	title: "md-numeric_1_box_outline",
	icon: "󰎦",
},
{
	title: "md-numeric_1_circle",
	icon: "󰲠",
},
{
	title: "md-numeric_1_circle_outline",
	icon: "󰲡",
},
{
	title: "md-numeric_2",
	icon: "󰬻",
},
{
	title: "md-numeric_2_box",
	icon: "󰎧",
},
{
	title: "md-numeric_2_box_multiple",
	icon: "󰼐",
},
{
	title: "md-numeric_2_box_multiple_outline",
	icon: "󰎨",
},
{
	title: "md-numeric_2_box_outline",
	icon: "󰎩",
},
{
	title: "md-numeric_2_circle",
	icon: "󰲢",
},
{
	title: "md-numeric_2_circle_outline",
	icon: "󰲣",
},
{
	title: "md-numeric_3",
	icon: "󰬼",
},
{
	title: "md-numeric_3_box",
	icon: "󰎪",
},
{
	title: "md-numeric_3_box_multiple",
	icon: "󰼑",
},
{
	title: "md-numeric_3_box_multiple_outline",
	icon: "󰎫",
},
{
	title: "md-numeric_3_box_outline",
	icon: "󰎬",
},
{
	title: "md-numeric_3_circle",
	icon: "󰲤",
},
{
	title: "md-numeric_3_circle_outline",
	icon: "󰲥",
},
{
	title: "md-numeric_4",
	icon: "󰬽",
},
{
	title: "md-numeric_4_box",
	icon: "󰎭",
},
{
	title: "md-numeric_4_box_multiple",
	icon: "󰼒",
},
{
	title: "md-numeric_4_box_multiple_outline",
	icon: "󰎲",
},
{
	title: "md-numeric_4_box_outline",
	icon: "󰎮",
},
{
	title: "md-numeric_4_circle",
	icon: "󰲦",
},
{
	title: "md-numeric_4_circle_outline",
	icon: "󰲧",
},
{
	title: "md-numeric_5",
	icon: "󰬾",
},
{
	title: "md-numeric_5_box",
	icon: "󰎱",
},
{
	title: "md-numeric_5_box_multiple",
	icon: "󰼓",
},
{
	title: "md-numeric_5_box_multiple_outline",
	icon: "󰎯",
},
{
	title: "md-numeric_5_box_outline",
	icon: "󰎰",
},
{
	title: "md-numeric_5_circle",
	icon: "󰲨",
},
{
	title: "md-numeric_5_circle_outline",
	icon: "󰲩",
},
{
	title: "md-numeric_6",
	icon: "󰬿",
},
{
	title: "md-numeric_6_box",
	icon: "󰎳",
},
{
	title: "md-numeric_6_box_multiple",
	icon: "󰼔",
},
{
	title: "md-numeric_6_box_multiple_outline",
	icon: "󰎴",
},
{
	title: "md-numeric_6_box_outline",
	icon: "󰎵",
},
{
	title: "md-numeric_6_circle",
	icon: "󰲪",
},
{
	title: "md-numeric_6_circle_outline",
	icon: "󰲫",
},
{
	title: "md-numeric_7",
	icon: "󰭀",
},
{
	title: "md-numeric_7_box",
	icon: "󰎶",
},
{
	title: "md-numeric_7_box_multiple",
	icon: "󰼕",
},
{
	title: "md-numeric_7_box_multiple_outline",
	icon: "󰎷",
},
{
	title: "md-numeric_7_box_outline",
	icon: "󰎸",
},
{
	title: "md-numeric_7_circle",
	icon: "󰲬",
},
{
	title: "md-numeric_7_circle_outline",
	icon: "󰲭",
},
{
	title: "md-numeric_8",
	icon: "󰭁",
},
{
	title: "md-numeric_8_box",
	icon: "󰎹",
},
{
	title: "md-numeric_8_box_multiple",
	icon: "󰼖",
},
{
	title: "md-numeric_8_box_multiple_outline",
	icon: "󰎺",
},
{
	title: "md-numeric_8_box_outline",
	icon: "󰎻",
},
{
	title: "md-numeric_8_circle",
	icon: "󰲮",
},
{
	title: "md-numeric_8_circle_outline",
	icon: "󰲯",
},
{
	title: "md-numeric_9",
	icon: "󰭂",
},
{
	title: "md-numeric_9_box",
	icon: "󰎼",
},
{
	title: "md-numeric_9_box_multiple",
	icon: "󰼗",
},
{
	title: "md-numeric_9_box_multiple_outline",
	icon: "󰎽",
},
{
	title: "md-numeric_9_box_outline",
	icon: "󰎾",
},
{
	title: "md-numeric_9_circle",
	icon: "󰲰",
},
{
	title: "md-numeric_9_circle_outline",
	icon: "󰲱",
},
{
	title: "md-numeric_9_plus",
	icon: "󰿮",
},
{
	title: "md-numeric_9_plus_box",
	icon: "󰎿",
},
{
	title: "md-numeric_9_plus_box_multiple",
	icon: "󰼘",
},
{
	title: "md-numeric_9_plus_box_multiple_outline",
	icon: "󰏀",
},
{
	title: "md-numeric_9_plus_box_outline",
	icon: "󰏁",
},
{
	title: "md-numeric_9_plus_circle",
	icon: "󰲲",
},
{
	title: "md-numeric_9_plus_circle_outline",
	icon: "󰲳",
},
{
	title: "md-numeric_negative_1",
	icon: "󱁒",
},
{
	title: "md-numeric_off",
	icon: "󱧓",
},
{
	title: "md-numeric_positive_1",
	icon: "󱗋",
},
{
	title: "md-nut",
	icon: "󰛸",
},
{
	title: "md-nutrition",
	icon: "󰏂",
},
{
	title: "md-nuxt",
	icon: "󱄆",
},
{
	title: "md-oar",
	icon: "󰙼",
},
{
	title: "md-ocarina",
	icon: "󰷠",
},
{
	title: "md-oci",
	icon: "󱋩",
},
{
	title: "md-ocr",
	icon: "󱄺",
},
{
	title: "md-octagon",
	icon: "󰏃",
},
{
	title: "md-octagon_outline",
	icon: "󰏄",
},
{
	title: "md-octagram",
	icon: "󰛹",
},
{
	title: "md-octagram_outline",
	icon: "󰝵",
},
{
	title: "md-octahedron",
	icon: "󱥐",
},
{
	title: "md-octahedron_off",
	icon: "󱥑",
},
{
	title: "md-odnoklassniki",
	icon: "󰏅",
},
{
	title: "md-offer",
	icon: "󱈛",
},
{
	title: "md-office_building",
	icon: "󰦑",
},
{
	title: "md-office_building_cog",
	icon: "󱥉",
},
{
	title: "md-office_building_cog_outline",
	icon: "󱥊",
},
{
	title: "md-office_building_marker",
	icon: "󱔠",
},
{
	title: "md-office_building_marker_outline",
	icon: "󱔡",
},
{
	title: "md-office_building_outline",
	icon: "󱔟",
},
{
	title: "md-oil",
	icon: "󰏇",
},
{
	title: "md-oil_lamp",
	icon: "󰼙",
},
{
	title: "md-oil_level",
	icon: "󱁓",
},
{
	title: "md-oil_temperature",
	icon: "󰿸",
},
{
	title: "md-om",
	icon: "󰥳",
},
{
	title: "md-omega",
	icon: "󰏉",
},
{
	title: "md-one_up",
	icon: "󰮭",
},
{
	title: "md-onepassword",
	icon: "󰢁",
},
{
	title: "md-opacity",
	icon: "󰗌",
},
{
	title: "md-open_in_app",
	icon: "󰏋",
},
{
	title: "md-open_in_new",
	icon: "󰏌",
},
{
	title: "md-open_source_initiative",
	icon: "󰮮",
},
{
	title: "md-openid",
	icon: "󰏍",
},
{
	title: "md-opera",
	icon: "󰏎",
},
{
	title: "md-orbit",
	icon: "󰀘",
},
{
	title: "md-orbit_variant",
	icon: "󱗛",
},
{
	title: "md-order_alphabetical_ascending",
	icon: "󰈍",
},
{
	title: "md-order_alphabetical_descending",
	icon: "󰴇",
},
{
	title: "md-order_bool_ascending",
	icon: "󰊾",
},
{
	title: "md-order_bool_ascending_variant",
	icon: "󰦏",
},
{
	title: "md-order_bool_descending",
	icon: "󱎄",
},
{
	title: "md-order_bool_descending_variant",
	icon: "󰦐",
},
{
	title: "md-order_numeric_ascending",
	icon: "󰕅",
},
{
	title: "md-order_numeric_descending",
	icon: "󰕆",
},
{
	title: "md-origin",
	icon: "󰭃",
},
{
	title: "md-ornament",
	icon: "󰏏",
},
{
	title: "md-ornament_variant",
	icon: "󰏐",
},
{
	title: "md-outdoor_lamp",
	icon: "󱁔",
},
{
	title: "md-overscan",
	icon: "󱀅",
},
{
	title: "md-owl",
	icon: "󰏒",
},
{
	title: "md-pac_man",
	icon: "󰮯",
},
{
	title: "md-package",
	icon: "󰏓",
},
{
	title: "md-package_down",
	icon: "󰏔",
},
{
	title: "md-package_up",
	icon: "󰏕",
},
{
	title: "md-package_variant",
	icon: "󰏖",
},
{
	title: "md-package_variant_closed",
	icon: "󰏗",
},
{
	title: "md-package_variant_closed_minus",
	icon: "󱧔",
},
{
	title: "md-package_variant_closed_plus",
	icon: "󱧕",
},
{
	title: "md-package_variant_closed_remove",
	icon: "󱧖",
},
{
	title: "md-package_variant_minus",
	icon: "󱧗",
},
{
	title: "md-package_variant_plus",
	icon: "󱧘",
},
{
	title: "md-package_variant_remove",
	icon: "󱧙",
},
{
	title: "md-page_first",
	icon: "󰘀",
},
{
	title: "md-page_last",
	icon: "󰘁",
},
{
	title: "md-page_layout_body",
	icon: "󰛺",
},
{
	title: "md-page_layout_footer",
	icon: "󰛻",
},
{
	title: "md-page_layout_header",
	icon: "󰛼",
},
{
	title: "md-page_layout_header_footer",
	icon: "󰽿",
},
{
	title: "md-page_layout_sidebar_left",
	icon: "󰛽",
},
{
	title: "md-page_layout_sidebar_right",
	icon: "󰛾",
},
{
	title: "md-page_next",
	icon: "󰮰",
},
{
	title: "md-page_next_outline",
	icon: "󰮱",
},
{
	title: "md-page_previous",
	icon: "󰮲",
},
{
	title: "md-page_previous_outline",
	icon: "󰮳",
},
{
	title: "md-pail",
	icon: "󱐗",
},
{
	title: "md-pail_minus",
	icon: "󱐷",
},
{
	title: "md-pail_minus_outline",
	icon: "󱐼",
},
{
	title: "md-pail_off",
	icon: "󱐹",
},
{
	title: "md-pail_off_outline",
	icon: "󱐾",
},
{
	title: "md-pail_outline",
	icon: "󱐺",
},
{
	title: "md-pail_plus",
	icon: "󱐶",
},
{
	title: "md-pail_plus_outline",
	icon: "󱐻",
},
{
	title: "md-pail_remove",
	icon: "󱐸",
},
{
	title: "md-pail_remove_outline",
	icon: "󱐽",
},
{
	title: "md-palette",
	icon: "󰏘",
},
{
	title: "md-palette_advanced",
	icon: "󰏙",
},
{
	title: "md-palette_outline",
	icon: "󰸌",
},
{
	title: "md-palette_swatch",
	icon: "󰢵",
},
{
	title: "md-palette_swatch_outline",
	icon: "󱍜",
},
{
	title: "md-palette_swatch_variant",
	icon: "󱥚",
},
{
	title: "md-palm_tree",
	icon: "󱁕",
},
{
	title: "md-pan",
	icon: "󰮴",
},
{
	title: "md-pan_bottom_left",
	icon: "󰮵",
},
{
	title: "md-pan_bottom_right",
	icon: "󰮶",
},
{
	title: "md-pan_down",
	icon: "󰮷",
},
{
	title: "md-pan_horizontal",
	icon: "󰮸",
},
{
	title: "md-pan_left",
	icon: "󰮹",
},
{
	title: "md-pan_right",
	icon: "󰮺",
},
{
	title: "md-pan_top_left",
	icon: "󰮻",
},
{
	title: "md-pan_top_right",
	icon: "󰮼",
},
{
	title: "md-pan_up",
	icon: "󰮽",
},
{
	title: "md-pan_vertical",
	icon: "󰮾",
},
{
	title: "md-panda",
	icon: "󰏚",
},
{
	title: "md-pandora",
	icon: "󰏛",
},
{
	title: "md-panorama",
	icon: "󰏜",
},
{
	title: "md-panorama_fisheye",
	icon: "󰏝",
},
{
	title: "md-panorama_horizontal",
	icon: "󱤨",
},
{
	title: "md-panorama_horizontal_outline",
	icon: "󰏞",
},
{
	title: "md-panorama_outline",
	icon: "󱦌",
},
{
	title: "md-panorama_sphere",
	icon: "󱦍",
},
{
	title: "md-panorama_sphere_outline",
	icon: "󱦎",
},
{
	title: "md-panorama_variant",
	icon: "󱦏",
},
{
	title: "md-panorama_variant_outline",
	icon: "󱦐",
},
{
	title: "md-panorama_vertical",
	icon: "󱤩",
},
{
	title: "md-panorama_vertical_outline",
	icon: "󰏟",
},
{
	title: "md-panorama_wide_angle",
	icon: "󱥟",
},
{
	title: "md-panorama_wide_angle_outline",
	icon: "󰏠",
},
{
	title: "md-paper_cut_vertical",
	icon: "󰏡",
},
{
	title: "md-paper_roll",
	icon: "󱅗",
},
{
	title: "md-paper_roll_outline",
	icon: "󱅘",
},
{
	title: "md-paperclip",
	icon: "󰏢",
},
{
	title: "md-paperclip_check",
	icon: "󱫆",
},
{
	title: "md-paperclip_lock",
	icon: "󱧚",
},
{
	title: "md-paperclip_minus",
	icon: "󱫇",
},
{
	title: "md-paperclip_off",
	icon: "󱫈",
},
{
	title: "md-paperclip_plus",
	icon: "󱫉",
},
{
	title: "md-paperclip_remove",
	icon: "󱫊",
},
{
	title: "md-parachute",
	icon: "󰲴",
},
{
	title: "md-parachute_outline",
	icon: "󰲵",
},
{
	title: "md-paragliding",
	icon: "󱝅",
},
{
	title: "md-parking",
	icon: "󰏣",
},
{
	title: "md-party_popper",
	icon: "󱁖",
},
{
	title: "md-passport",
	icon: "󰟣",
},
{
	title: "md-passport_biometric",
	icon: "󰷡",
},
{
	title: "md-pasta",
	icon: "󱅠",
},
{
	title: "md-patio_heater",
	icon: "󰾀",
},
{
	title: "md-patreon",
	icon: "󰢂",
},
{
	title: "md-pause",
	icon: "󰏤",
},
{
	title: "md-pause_circle",
	icon: "󰏥",
},
{
	title: "md-pause_circle_outline",
	icon: "󰏦",
},
{
	title: "md-pause_octagon",
	icon: "󰏧",
},
{
	title: "md-pause_octagon_outline",
	icon: "󰏨",
},
{
	title: "md-paw",
	icon: "󰏩",
},
{
	title: "md-paw_off",
	icon: "󰙗",
},
{
	title: "md-paw_off_outline",
	icon: "󱙶",
},
{
	title: "md-paw_outline",
	icon: "󱙵",
},
{
	title: "md-peace",
	icon: "󰢄",
},
{
	title: "md-peanut",
	icon: "󰿼",
},
{
	title: "md-peanut_off",
	icon: "󰿽",
},
{
	title: "md-peanut_off_outline",
	icon: "󰿿",
},
{
	title: "md-peanut_outline",
	icon: "󰿾",
},
{
	title: "md-pen",
	icon: "󰏪",
},
{
	title: "md-pen_lock",
	icon: "󰷢",
},
{
	title: "md-pen_minus",
	icon: "󰷣",
},
{
	title: "md-pen_off",
	icon: "󰷤",
},
{
	title: "md-pen_plus",
	icon: "󰷥",
},
{
	title: "md-pen_remove",
	icon: "󰷦",
},
{
	title: "md-pencil",
	icon: "󰏫",
},
{
	title: "md-pencil_box",
	icon: "󰏬",
},
{
	title: "md-pencil_box_multiple",
	icon: "󱅄",
},
{
	title: "md-pencil_box_multiple_outline",
	icon: "󱅅",
},
{
	title: "md-pencil_box_outline",
	icon: "󰏭",
},
{
	title: "md-pencil_circle",
	icon: "󰛿",
},
{
	title: "md-pencil_circle_outline",
	icon: "󰝶",
},
{
	title: "md-pencil_lock",
	icon: "󰏮",
},
{
	title: "md-pencil_lock_outline",
	icon: "󰷧",
},
{
	title: "md-pencil_minus",
	icon: "󰷨",
},
{
	title: "md-pencil_minus_outline",
	icon: "󰷩",
},
{
	title: "md-pencil_off",
	icon: "󰏯",
},
{
	title: "md-pencil_off_outline",
	icon: "󰷪",
},
{
	title: "md-pencil_outline",
	icon: "󰲶",
},
{
	title: "md-pencil_plus",
	icon: "󰷫",
},
{
	title: "md-pencil_plus_outline",
	icon: "󰷬",
},
{
	title: "md-pencil_remove",
	icon: "󰷭",
},
{
	title: "md-pencil_remove_outline",
	icon: "󰷮",
},
{
	title: "md-pencil_ruler",
	icon: "󱍓",
},
{
	title: "md-penguin",
	icon: "󰻀",
},
{
	title: "md-pentagon",
	icon: "󰜁",
},
{
	title: "md-pentagon_outline",
	icon: "󰜀",
},
{
	title: "md-pentagram",
	icon: "󱙧",
},
{
	title: "md-percent",
	icon: "󰏰",
},
{
	title: "md-percent_box",
	icon: "󱨂",
},
{
	title: "md-percent_box_outline",
	icon: "󱨃",
},
{
	title: "md-percent_circle",
	icon: "󱨄",
},
{
	title: "md-percent_circle_outline",
	icon: "󱨅",
},
{
	title: "md-percent_outline",
	icon: "󱉸",
},
{
	title: "md-periodic_table",
	icon: "󰢶",
},
{
	title: "md-perspective_less",
	icon: "󰴣",
},
{
	title: "md-perspective_more",
	icon: "󰴤",
},
{
	title: "md-ph",
	icon: "󱟅",
},
{
	title: "md-phone",
	icon: "󰏲",
},
{
	title: "md-phone_alert",
	icon: "󰼚",
},
{
	title: "md-phone_alert_outline",
	icon: "󱆎",
},
{
	title: "md-phone_bluetooth",
	icon: "󰏳",
},
{
	title: "md-phone_bluetooth_outline",
	icon: "󱆏",
},
{
	title: "md-phone_cancel",
	icon: "󱂼",
},
{
	title: "md-phone_cancel_outline",
	icon: "󱆐",
},
{
	title: "md-phone_check",
	icon: "󱆩",
},
{
	title: "md-phone_check_outline",
	icon: "󱆪",
},
{
	title: "md-phone_classic",
	icon: "󰘂",
},
{
	title: "md-phone_classic_off",
	icon: "󱉹",
},
{
	title: "md-phone_clock",
	icon: "󱧛",
},
{
	title: "md-phone_dial",
	icon: "󱕙",
},
{
	title: "md-phone_dial_outline",
	icon: "󱕚",
},
{
	title: "md-phone_forward",
	icon: "󰏴",
},
{
	title: "md-phone_forward_outline",
	icon: "󱆑",
},
{
	title: "md-phone_hangup",
	icon: "󰏵",
},
{
	title: "md-phone_hangup_outline",
	icon: "󱆒",
},
{
	title: "md-phone_in_talk",
	icon: "󰏶",
},
{
	title: "md-phone_in_talk_outline",
	icon: "󱆂",
},
{
	title: "md-phone_incoming",
	icon: "󰏷",
},
{
	title: "md-phone_incoming_outline",
	icon: "󱆓",
},
{
	title: "md-phone_lock",
	icon: "󰏸",
},
{
	title: "md-phone_lock_outline",
	icon: "󱆔",
},
{
	title: "md-phone_log",
	icon: "󰏹",
},
{
	title: "md-phone_log_outline",
	icon: "󱆕",
},
{
	title: "md-phone_message",
	icon: "󱆖",
},
{
	title: "md-phone_message_outline",
	icon: "󱆗",
},
{
	title: "md-phone_minus",
	icon: "󰙘",
},
{
	title: "md-phone_minus_outline",
	icon: "󱆘",
},
{
	title: "md-phone_missed",
	icon: "󰏺",
},
{
	title: "md-phone_missed_outline",
	icon: "󱆥",
},
{
	title: "md-phone_off",
	icon: "󰷯",
},
{
	title: "md-phone_off_outline",
	icon: "󱆦",
},
{
	title: "md-phone_outgoing",
	icon: "󰏻",
},
{
	title: "md-phone_outgoing_outline",
	icon: "󱆙",
},
{
	title: "md-phone_outline",
	icon: "󰷰",
},
{
	title: "md-phone_paused",
	icon: "󰏼",
},
{
	title: "md-phone_paused_outline",
	icon: "󱆚",
},
{
	title: "md-phone_plus",
	icon: "󰙙",
},
{
	title: "md-phone_plus_outline",
	icon: "󱆛",
},
{
	title: "md-phone_refresh",
	icon: "󱦓",
},
{
	title: "md-phone_refresh_outline",
	icon: "󱦔",
},
{
	title: "md-phone_remove",
	icon: "󱔯",
},
{
	title: "md-phone_remove_outline",
	icon: "󱔰",
},
{
	title: "md-phone_return",
	icon: "󰠯",
},
{
	title: "md-phone_return_outline",
	icon: "󱆜",
},
{
	title: "md-phone_ring",
	icon: "󱆫",
},
{
	title: "md-phone_ring_outline",
	icon: "󱆬",
},
{
	title: "md-phone_rotate_landscape",
	icon: "󰢅",
},
{
	title: "md-phone_rotate_portrait",
	icon: "󰢆",
},
{
	title: "md-phone_settings",
	icon: "󰏽",
},
{
	title: "md-phone_settings_outline",
	icon: "󱆝",
},
{
	title: "md-phone_sync",
	icon: "󱦕",
},
{
	title: "md-phone_sync_outline",
	icon: "󱦖",
},
{
	title: "md-phone_voip",
	icon: "󰏾",
},
{
	title: "md-pi",
	icon: "󰏿",
},
{
	title: "md-pi_box",
	icon: "󰐀",
},
{
	title: "md-pi_hole",
	icon: "󰷱",
},
{
	title: "md-piano",
	icon: "󰙽",
},
{
	title: "md-piano_off",
	icon: "󰚘",
},
{
	title: "md-pickaxe",
	icon: "󰢷",
},
{
	title: "md-picture_in_picture_bottom_right",
	icon: "󰹗",
},
{
	title: "md-picture_in_picture_bottom_right_outline",
	icon: "󰹘",
},
{
	title: "md-picture_in_picture_top_right",
	icon: "󰹙",
},
{
	title: "md-picture_in_picture_top_right_outline",
	icon: "󰹚",
},
{
	title: "md-pier",
	icon: "󰢇",
},
{
	title: "md-pier_crane",
	icon: "󰢈",
},
{
	title: "md-pig",
	icon: "󰐁",
},
{
	title: "md-pig_variant",
	icon: "󱀆",
},
{
	title: "md-pig_variant_outline",
	icon: "󱙸",
},
{
	title: "md-piggy_bank",
	icon: "󱀇",
},
{
	title: "md-piggy_bank_outline",
	icon: "󱙹",
},
{
	title: "md-pill",
	icon: "󰐂",
},
{
	title: "md-pill_off",
	icon: "󱩜",
},
{
	title: "md-pillar",
	icon: "󰜂",
},
{
	title: "md-pin",
	icon: "󰐃",
},
{
	title: "md-pin_off",
	icon: "󰐄",
},
{
	title: "md-pin_off_outline",
	icon: "󰤰",
},
{
	title: "md-pin_outline",
	icon: "󰤱",
},
{
	title: "md-pine_tree",
	icon: "󰐅",
},
{
	title: "md-pine_tree_box",
	icon: "󰐆",
},
{
	title: "md-pine_tree_fire",
	icon: "󱐚",
},
{
	title: "md-pinterest",
	icon: "󰐇",
},
{
	title: "md-pinwheel",
	icon: "󰫕",
},
{
	title: "md-pinwheel_outline",
	icon: "󰫖",
},
{
	title: "md-pipe",
	icon: "󰟥",
},
{
	title: "md-pipe_disconnected",
	icon: "󰟦",
},
{
	title: "md-pipe_leak",
	icon: "󰢉",
},
{
	title: "md-pipe_valve",
	icon: "󱡍",
},
{
	title: "md-pipe_wrench",
	icon: "󱍔",
},
{
	title: "md-pirate",
	icon: "󰨈",
},
{
	title: "md-pistol",
	icon: "󰜃",
},
{
	title: "md-piston",
	icon: "󰢊",
},
{
	title: "md-pitchfork",
	icon: "󱕓",
},
{
	title: "md-pizza",
	icon: "󰐉",
},
{
	title: "md-play",
	icon: "󰐊",
},
{
	title: "md-play_box",
	icon: "󱉺",
},
{
	title: "md-play_box_lock",
	icon: "󱨖",
},
{
	title: "md-play_box_lock_open",
	icon: "󱨗",
},
{
	title: "md-play_box_lock_open_outline",
	icon: "󱨘",
},
{
	title: "md-play_box_lock_outline",
	icon: "󱨙",
},
{
	title: "md-play_box_multiple",
	icon: "󰴙",
},
{
	title: "md-play_box_multiple_outline",
	icon: "󱏦",
},
{
	title: "md-play_box_outline",
	icon: "󰐋",
},
{
	title: "md-play_circle",
	icon: "󰐌",
},
{
	title: "md-play_circle_outline",
	icon: "󰐍",
},
{
	title: "md-play_network",
	icon: "󰢋",
},
{
	title: "md-play_network_outline",
	icon: "󰲷",
},
{
	title: "md-play_outline",
	icon: "󰼛",
},
{
	title: "md-play_pause",
	icon: "󰐎",
},
{
	title: "md-play_protected_content",
	icon: "󰐏",
},
{
	title: "md-play_speed",
	icon: "󰣿",
},
{
	title: "md-playlist_check",
	icon: "󰗇",
},
{
	title: "md-playlist_edit",
	icon: "󰤀",
},
{
	title: "md-playlist_minus",
	icon: "󰐐",
},
{
	title: "md-playlist_music",
	icon: "󰲸",
},
{
	title: "md-playlist_music_outline",
	icon: "󰲹",
},
{
	title: "md-playlist_play",
	icon: "󰐑",
},
{
	title: "md-playlist_plus",
	icon: "󰐒",
},
{
	title: "md-playlist_remove",
	icon: "󰐓",
},
{
	title: "md-playlist_star",
	icon: "󰷲",
},
{
	title: "md-plex",
	icon: "󰚺",
},
{
	title: "md-pliers",
	icon: "󱦤",
},
{
	title: "md-plus",
	icon: "󰐕",
},
{
	title: "md-plus_box",
	icon: "󰐖",
},
{
	title: "md-plus_box_multiple",
	icon: "󰌴",
},
{
	title: "md-plus_box_multiple_outline",
	icon: "󱅃",
},
{
	title: "md-plus_box_outline",
	icon: "󰜄",
},
{
	title: "md-plus_circle",
	icon: "󰐗",
},
{
	title: "md-plus_circle_multiple",
	icon: "󰍌",
},
{
	title: "md-plus_circle_multiple_outline",
	icon: "󰐘",
},
{
	title: "md-plus_circle_outline",
	icon: "󰐙",
},
{
	title: "md-plus_lock",
	icon: "󱩝",
},
{
	title: "md-plus_lock_open",
	icon: "󱩞",
},
{
	title: "md-plus_minus",
	icon: "󰦒",
},
{
	title: "md-plus_minus_box",
	icon: "󰦓",
},
{
	title: "md-plus_minus_variant",
	icon: "󱓉",
},
{
	title: "md-plus_network",
	icon: "󰐚",
},
{
	title: "md-plus_network_outline",
	icon: "󰲺",
},
{
	title: "md-plus_outline",
	icon: "󰜅",
},
{
	title: "md-plus_thick",
	icon: "󱇬",
},
{
	title: "md-podcast",
	icon: "󰦔",
},
{
	title: "md-podium",
	icon: "󰴥",
},
{
	title: "md-podium_bronze",
	icon: "󰴦",
},
{
	title: "md-podium_gold",
	icon: "󰴧",
},
{
	title: "md-podium_silver",
	icon: "󰴨",
},
{
	title: "md-point_of_sale",
	icon: "󰶒",
},
{
	title: "md-pokeball",
	icon: "󰐝",
},
{
	title: "md-pokemon_go",
	icon: "󰨉",
},
{
	title: "md-poker_chip",
	icon: "󰠰",
},
{
	title: "md-polaroid",
	icon: "󰐞",
},
{
	title: "md-police_badge",
	icon: "󱅧",
},
{
	title: "md-police_badge_outline",
	icon: "󱅨",
},
{
	title: "md-police_station",
	icon: "󱠹",
},
{
	title: "md-poll",
	icon: "󰐟",
},
{
	title: "md-polo",
	icon: "󱓃",
},
{
	title: "md-polymer",
	icon: "󰐡",
},
{
	title: "md-pool",
	icon: "󰘆",
},
{
	title: "md-pool_thermometer",
	icon: "󱩟",
},
{
	title: "md-popcorn",
	icon: "󰐢",
},
{
	title: "md-post",
	icon: "󱀈",
},
{
	title: "md-post_lamp",
	icon: "󱩠",
},
{
	title: "md-post_outline",
	icon: "󱀉",
},
{
	title: "md-postage_stamp",
	icon: "󰲻",
},
{
	title: "md-pot",
	icon: "󰋥",
},
{
	title: "md-pot_mix",
	icon: "󰙛",
},
{
	title: "md-pot_mix_outline",
	icon: "󰙷",
},
{
	title: "md-pot_outline",
	icon: "󰋿",
},
{
	title: "md-pot_steam",
	icon: "󰙚",
},
{
	title: "md-pot_steam_outline",
	icon: "󰌦",
},
{
	title: "md-pound",
	icon: "󰐣",
},
{
	title: "md-pound_box",
	icon: "󰐤",
},
{
	title: "md-pound_box_outline",
	icon: "󱅿",
},
{
	title: "md-power",
	icon: "󰐥",
},
{
	title: "md-power_cycle",
	icon: "󰤁",
},
{
	title: "md-power_off",
	icon: "󰤂",
},
{
	title: "md-power_on",
	icon: "󰤃",
},
{
	title: "md-power_plug",
	icon: "󰚥",
},
{
	title: "md-power_plug_off",
	icon: "󰚦",
},
{
	title: "md-power_plug_off_outline",
	icon: "󱐤",
},
{
	title: "md-power_plug_outline",
	icon: "󱐥",
},
{
	title: "md-power_settings",
	icon: "󰐦",
},
{
	title: "md-power_sleep",
	icon: "󰤄",
},
{
	title: "md-power_socket",
	icon: "󰐧",
},
{
	title: "md-power_socket_au",
	icon: "󰤅",
},
{
	title: "md-power_socket_ch",
	icon: "󰾳",
},
{
	title: "md-power_socket_de",
	icon: "󱄇",
},
{
	title: "md-power_socket_eu",
	icon: "󰟧",
},
{
	title: "md-power_socket_fr",
	icon: "󱄈",
},
{
	title: "md-power_socket_it",
	icon: "󱓿",
},
{
	title: "md-power_socket_jp",
	icon: "󱄉",
},
{
	title: "md-power_socket_uk",
	icon: "󰟨",
},
{
	title: "md-power_socket_us",
	icon: "󰟩",
},
{
	title: "md-power_standby",
	icon: "󰤆",
},
{
	title: "md-powershell",
	icon: "󰨊",
},
{
	title: "md-prescription",
	icon: "󰜆",
},
{
	title: "md-presentation",
	icon: "󰐨",
},
{
	title: "md-presentation_play",
	icon: "󰐩",
},
{
	title: "md-pretzel",
	icon: "󱕢",
},
{
	title: "md-printer",
	icon: "󰐪",
},
{
	title: "md-printer_3d",
	icon: "󰐫",
},
{
	title: "md-printer_3d_nozzle",
	icon: "󰹛",
},
{
	title: "md-printer_3d_nozzle_alert",
	icon: "󱇀",
},
{
	title: "md-printer_3d_nozzle_alert_outline",
	icon: "󱇁",
},
{
	title: "md-printer_3d_nozzle_heat",
	icon: "󱢸",
},
{
	title: "md-printer_3d_nozzle_heat_outline",
	icon: "󱢹",
},
{
	title: "md-printer_3d_nozzle_outline",
	icon: "󰹜",
},
{
	title: "md-printer_alert",
	icon: "󰐬",
},
{
	title: "md-printer_check",
	icon: "󱅆",
},
{
	title: "md-printer_eye",
	icon: "󱑘",
},
{
	title: "md-printer_off",
	icon: "󰹝",
},
{
	title: "md-printer_off_outline",
	icon: "󱞅",
},
{
	title: "md-printer_outline",
	icon: "󱞆",
},
{
	title: "md-printer_pos",
	icon: "󱁗",
},
{
	title: "md-printer_search",
	icon: "󱑗",
},
{
	title: "md-printer_settings",
	icon: "󰜇",
},
{
	title: "md-printer_wireless",
	icon: "󰨋",
},
{
	title: "md-priority_high",
	icon: "󰘃",
},
{
	title: "md-priority_low",
	icon: "󰘄",
},
{
	title: "md-professional_hexagon",
	icon: "󰐭",
},
{
	title: "md-progress_alert",
	icon: "󰲼",
},
{
	title: "md-progress_check",
	icon: "󰦕",
},
{
	title: "md-progress_clock",
	icon: "󰦖",
},
{
	title: "md-progress_close",
	icon: "󱄊",
},
{
	title: "md-progress_download",
	icon: "󰦗",
},
{
	title: "md-progress_pencil",
	icon: "󱞇",
},
{
	title: "md-progress_question",
	icon: "󱔢",
},
{
	title: "md-progress_star",
	icon: "󱞈",
},
{
	title: "md-progress_upload",
	icon: "󰦘",
},
{
	title: "md-progress_wrench",
	icon: "󰲽",
},
{
	title: "md-projector",
	icon: "󰐮",
},
{
	title: "md-projector_off",
	icon: "󱨣",
},
{
	title: "md-projector_screen",
	icon: "󰐯",
},
{
	title: "md-projector_screen_off",
	icon: "󱠍",
},
{
	title: "md-projector_screen_off_outline",
	icon: "󱠎",
},
{
	title: "md-projector_screen_outline",
	icon: "󱜤",
},
{
	title: "md-projector_screen_variant",
	icon: "󱠏",
},
{
	title: "md-projector_screen_variant_off",
	icon: "󱠐",
},
{
	title: "md-projector_screen_variant_off_outline",
	icon: "󱠑",
},
{
	title: "md-projector_screen_variant_outline",
	icon: "󱠒",
},
{
	title: "md-propane_tank",
	icon: "󱍗",
},
{
	title: "md-propane_tank_outline",
	icon: "󱍘",
},
{
	title: "md-protocol",
	icon: "󰿘",
},
{
	title: "md-publish",
	icon: "󰚧",
},
{
	title: "md-publish_off",
	icon: "󱥅",
},
{
	title: "md-pulse",
	icon: "󰐰",
},
{
	title: "md-pump",
	icon: "󱐂",
},
{
	title: "md-pumpkin",
	icon: "󰮿",
},
{
	title: "md-purse",
	icon: "󰼜",
},
{
	title: "md-purse_outline",
	icon: "󰼝",
},
{
	title: "md-puzzle",
	icon: "󰐱",
},
{
	title: "md-puzzle_check",
	icon: "󱐦",
},
{
	title: "md-puzzle_check_outline",
	icon: "󱐧",
},
{
	title: "md-puzzle_edit",
	icon: "󱓓",
},
{
	title: "md-puzzle_edit_outline",
	icon: "󱓙",
},
{
	title: "md-puzzle_heart",
	icon: "󱓔",
},
{
	title: "md-puzzle_heart_outline",
	icon: "󱓚",
},
{
	title: "md-puzzle_minus",
	icon: "󱓑",
},
{
	title: "md-puzzle_minus_outline",
	icon: "󱓗",
},
{
	title: "md-puzzle_outline",
	icon: "󰩦",
},
{
	title: "md-puzzle_plus",
	icon: "󱓐",
},
{
	title: "md-puzzle_plus_outline",
	icon: "󱓖",
},
{
	title: "md-puzzle_remove",
	icon: "󱓒",
},
{
	title: "md-puzzle_remove_outline",
	icon: "󱓘",
},
{
	title: "md-puzzle_star",
	icon: "󱓕",
},
{
	title: "md-puzzle_star_outline",
	icon: "󱓛",
},
{
	title: "md-pyramid",
	icon: "󱥒",
},
{
	title: "md-pyramid_off",
	icon: "󱥓",
},
{
	title: "md-qi",
	icon: "󰦙",
},
{
	title: "md-qqchat",
	icon: "󰘅",
},
{
	title: "md-qrcode",
	icon: "󰐲",
},
{
	title: "md-qrcode_edit",
	icon: "󰢸",
},
{
	title: "md-qrcode_minus",
	icon: "󱆌",
},
{
	title: "md-qrcode_plus",
	icon: "󱆋",
},
{
	title: "md-qrcode_remove",
	icon: "󱆍",
},
{
	title: "md-qrcode_scan",
	icon: "󰐳",
},
{
	title: "md-quadcopter",
	icon: "󰐴",
},
{
	title: "md-quality_high",
	icon: "󰐵",
},
{
	title: "md-quality_low",
	icon: "󰨌",
},
{
	title: "md-quality_medium",
	icon: "󰨍",
},
{
	title: "md-quora",
	icon: "󰴩",
},
{
	title: "md-rabbit",
	icon: "󰤇",
},
{
	title: "md-rabbit_variant",
	icon: "󱩡",
},
{
	title: "md-rabbit_variant_outline",
	icon: "󱩢",
},
{
	title: "md-racing_helmet",
	icon: "󰶓",
},
{
	title: "md-racquetball",
	icon: "󰶔",
},
{
	title: "md-radar",
	icon: "󰐷",
},
{
	title: "md-radiator",
	icon: "󰐸",
},
{
	title: "md-radiator_disabled",
	icon: "󰫗",
},
{
	title: "md-radiator_off",
	icon: "󰫘",
},
{
	title: "md-radio",
	icon: "󰐹",
},
{
	title: "md-radio_am",
	icon: "󰲾",
},
{
	title: "md-radio_fm",
	icon: "󰲿",
},
{
	title: "md-radio_handheld",
	icon: "󰐺",
},
{
	title: "md-radio_off",
	icon: "󱈜",
},
{
	title: "md-radio_tower",
	icon: "󰐻",
},
{
	title: "md-radioactive",
	icon: "󰐼",
},
{
	title: "md-radioactive_circle",
	icon: "󱡝",
},
{
	title: "md-radioactive_circle_outline",
	icon: "󱡞",
},
{
	title: "md-radioactive_off",
	icon: "󰻁",
},
{
	title: "md-radiobox_marked",
	icon: "󰐾",
},
{
	title: "md-radiology_box",
	icon: "󱓅",
},
{
	title: "md-radiology_box_outline",
	icon: "󱓆",
},
{
	title: "md-radius",
	icon: "󰳀",
},
{
	title: "md-radius_outline",
	icon: "󰳁",
},
{
	title: "md-railroad_light",
	icon: "󰼞",
},
{
	title: "md-rake",
	icon: "󱕄",
},
{
	title: "md-raspberry_pi",
	icon: "󰐿",
},
{
	title: "md-raw",
	icon: "󱨏",
},
{
	title: "md-raw_off",
	icon: "󱨐",
},
{
	title: "md-ray_end",
	icon: "󰑀",
},
{
	title: "md-ray_end_arrow",
	icon: "󰑁",
},
{
	title: "md-ray_start",
	icon: "󰑂",
},
{
	title: "md-ray_start_arrow",
	icon: "󰑃",
},
{
	title: "md-ray_start_end",
	icon: "󰑄",
},
{
	title: "md-ray_start_vertex_end",
	icon: "󱗘",
},
{
	title: "md-ray_vertex",
	icon: "󰑅",
},
{
	title: "md-razor_double_edge",
	icon: "󱦗",
},
{
	title: "md-razor_single_edge",
	icon: "󱦘",
},
{
	title: "md-react",
	icon: "󰜈",
},
{
	title: "md-read",
	icon: "󰑇",
},
{
	title: "md-receipt",
	icon: "󰑉",
},
{
	title: "md-receipt_outline",
	icon: "󱧜",
},
{
	title: "md-receipt_text_check",
	icon: "󱩣",
},
{
	title: "md-receipt_text_check_outline",
	icon: "󱩤",
},
{
	title: "md-receipt_text_minus",
	icon: "󱩥",
},
{
	title: "md-receipt_text_minus_outline",
	icon: "󱩦",
},
{
	title: "md-receipt_text_plus",
	icon: "󱩧",
},
{
	title: "md-receipt_text_plus_outline",
	icon: "󱩨",
},
{
	title: "md-receipt_text_remove",
	icon: "󱩩",
},
{
	title: "md-receipt_text_remove_outline",
	icon: "󱩪",
},
{
	title: "md-record",
	icon: "󰑊",
},
{
	title: "md-record_circle",
	icon: "󰻂",
},
{
	title: "md-record_circle_outline",
	icon: "󰻃",
},
{
	title: "md-record_player",
	icon: "󰦚",
},
{
	title: "md-record_rec",
	icon: "󰑋",
},
{
	title: "md-rectangle",
	icon: "󰹞",
},
{
	title: "md-rectangle_outline",
	icon: "󰹟",
},
{
	title: "md-recycle",
	icon: "󰑌",
},
{
	title: "md-recycle_variant",
	icon: "󱎝",
},
{
	title: "md-reddit",
	icon: "󰑍",
},
{
	title: "md-redhat",
	icon: "󱄛",
},
{
	title: "md-redo",
	icon: "󰑎",
},
{
	title: "md-redo_variant",
	icon: "󰑏",
},
{
	title: "md-reflect_horizontal",
	icon: "󰨎",
},
{
	title: "md-reflect_vertical",
	icon: "󰨏",
},
{
	title: "md-refresh",
	icon: "󰑐",
},
{
	title: "md-refresh_auto",
	icon: "󱣲",
},
{
	title: "md-refresh_circle",
	icon: "󱍷",
},
{
	title: "md-regex",
	icon: "󰑑",
},
{
	title: "md-registered_trademark",
	icon: "󰩧",
},
{
	title: "md-reiterate",
	icon: "󱖈",
},
{
	title: "md-relation_many_to_many",
	icon: "󱒖",
},
{
	title: "md-relation_many_to_one",
	icon: "󱒗",
},
{
	title: "md-relation_many_to_one_or_many",
	icon: "󱒘",
},
{
	title: "md-relation_many_to_only_one",
	icon: "󱒙",
},
{
	title: "md-relation_many_to_zero_or_many",
	icon: "󱒚",
},
{
	title: "md-relation_many_to_zero_or_one",
	icon: "󱒛",
},
{
	title: "md-relation_one_or_many_to_many",
	icon: "󱒜",
},
{
	title: "md-relation_one_or_many_to_one",
	icon: "󱒝",
},
{
	title: "md-relation_one_or_many_to_one_or_many",
	icon: "󱒞",
},
{
	title: "md-relation_one_or_many_to_only_one",
	icon: "󱒟",
},
{
	title: "md-relation_one_or_many_to_zero_or_many",
	icon: "󱒠",
},
{
	title: "md-relation_one_or_many_to_zero_or_one",
	icon: "󱒡",
},
{
	title: "md-relation_one_to_many",
	icon: "󱒢",
},
{
	title: "md-relation_one_to_one",
	icon: "󱒣",
},
{
	title: "md-relation_one_to_one_or_many",
	icon: "󱒤",
},
{
	title: "md-relation_one_to_only_one",
	icon: "󱒥",
},
{
	title: "md-relation_one_to_zero_or_many",
	icon: "󱒦",
},
{
	title: "md-relation_one_to_zero_or_one",
	icon: "󱒧",
},
{
	title: "md-relation_only_one_to_many",
	icon: "󱒨",
},
{
	title: "md-relation_only_one_to_one",
	icon: "󱒩",
},
{
	title: "md-relation_only_one_to_one_or_many",
	icon: "󱒪",
},
{
	title: "md-relation_only_one_to_only_one",
	icon: "󱒫",
},
{
	title: "md-relation_only_one_to_zero_or_many",
	icon: "󱒬",
},
{
	title: "md-relation_only_one_to_zero_or_one",
	icon: "󱒭",
},
{
	title: "md-relation_zero_or_many_to_many",
	icon: "󱒮",
},
{
	title: "md-relation_zero_or_many_to_one",
	icon: "󱒯",
},
{
	title: "md-relation_zero_or_many_to_one_or_many",
	icon: "󱒰",
},
{
	title: "md-relation_zero_or_many_to_only_one",
	icon: "󱒱",
},
{
	title: "md-relation_zero_or_many_to_zero_or_many",
	icon: "󱒲",
},
{
	title: "md-relation_zero_or_many_to_zero_or_one",
	icon: "󱒳",
},
{
	title: "md-relation_zero_or_one_to_many",
	icon: "󱒴",
},
{
	title: "md-relation_zero_or_one_to_one",
	icon: "󱒵",
},
{
	title: "md-relation_zero_or_one_to_one_or_many",
	icon: "󱒶",
},
{
	title: "md-relation_zero_or_one_to_only_one",
	icon: "󱒷",
},
{
	title: "md-relation_zero_or_one_to_zero_or_many",
	icon: "󱒸",
},
{
	title: "md-relation_zero_or_one_to_zero_or_one",
	icon: "󱒹",
},
{
	title: "md-relative_scale",
	icon: "󰑒",
},
{
	title: "md-reload",
	icon: "󰑓",
},
{
	title: "md-reload_alert",
	icon: "󱄋",
},
{
	title: "md-reminder",
	icon: "󰢌",
},
{
	title: "md-remote",
	icon: "󰑔",
},
{
	title: "md-remote_desktop",
	icon: "󰢹",
},
{
	title: "md-remote_off",
	icon: "󰻄",
},
{
	title: "md-remote_tv",
	icon: "󰻅",
},
{
	title: "md-remote_tv_off",
	icon: "󰻆",
},
{
	title: "md-rename_box",
	icon: "󰑕",
},
{
	title: "md-reorder_horizontal",
	icon: "󰚈",
},
{
	title: "md-reorder_vertical",
	icon: "󰚉",
},
{
	title: "md-repeat",
	icon: "󰑖",
},
{
	title: "md-repeat_off",
	icon: "󰑗",
},
{
	title: "md-repeat_once",
	icon: "󰑘",
},
{
	title: "md-repeat_variant",
	icon: "󰕇",
},
{
	title: "md-replay",
	icon: "󰑙",
},
{
	title: "md-reply",
	icon: "󰑚",
},
{
	title: "md-reply_all",
	icon: "󰑛",
},
{
	title: "md-reply_all_outline",
	icon: "󰼟",
},
{
	title: "md-reply_circle",
	icon: "󱆮",
},
{
	title: "md-reply_outline",
	icon: "󰼠",
},
{
	title: "md-reproduction",
	icon: "󰑜",
},
{
	title: "md-resistor",
	icon: "󰭄",
},
{
	title: "md-resistor_nodes",
	icon: "󰭅",
},
{
	title: "md-resize",
	icon: "󰩨",
},
{
	title: "md-resize_bottom_right",
	icon: "󰑝",
},
{
	title: "md-responsive",
	icon: "󰑞",
},
{
	title: "md-restart",
	icon: "󰜉",
},
{
	title: "md-restart_alert",
	icon: "󱄌",
},
{
	title: "md-restart_off",
	icon: "󰶕",
},
{
	title: "md-restore",
	icon: "󰦛",
},
{
	title: "md-restore_alert",
	icon: "󱄍",
},
{
	title: "md-rewind",
	icon: "󰑟",
},
{
	title: "md-rewind_10",
	icon: "󰴪",
},
{
	title: "md-rewind_15",
	icon: "󱥆",
},
{
	title: "md-rewind_30",
	icon: "󰶖",
},
{
	title: "md-rewind_5",
	icon: "󱇹",
},
{
	title: "md-rewind_60",
	icon: "󱘌",
},
{
	title: "md-rewind_outline",
	icon: "󰜊",
},
{
	title: "md-rhombus",
	icon: "󰜋",
},
{
	title: "md-rhombus_medium",
	icon: "󰨐",
},
{
	title: "md-rhombus_medium_outline",
	icon: "󱓜",
},
{
	title: "md-rhombus_outline",
	icon: "󰜌",
},
{
	title: "md-rhombus_split",
	icon: "󰨑",
},
{
	title: "md-rhombus_split_outline",
	icon: "󱓝",
},
{
	title: "md-ribbon",
	icon: "󰑠",
},
{
	title: "md-rice",
	icon: "󰟪",
},
{
	title: "md-rickshaw",
	icon: "󱖻",
},
{
	title: "md-rickshaw_electric",
	icon: "󱖼",
},
{
	title: "md-ring",
	icon: "󰟫",
},
{
	title: "md-rivet",
	icon: "󰹠",
},
{
	title: "md-road",
	icon: "󰑡",
},
{
	title: "md-road_variant",
	icon: "󰑢",
},
{
	title: "md-robber",
	icon: "󱁘",
},
{
	title: "md-robot",
	icon: "󰚩",
},
{
	title: "md-robot_angry",
	icon: "󱚝",
},
{
	title: "md-robot_angry_outline",
	icon: "󱚞",
},
{
	title: "md-robot_confused",
	icon: "󱚟",
},
{
	title: "md-robot_confused_outline",
	icon: "󱚠",
},
{
	title: "md-robot_dead",
	icon: "󱚡",
},
{
	title: "md-robot_dead_outline",
	icon: "󱚢",
},
{
	title: "md-robot_excited",
	icon: "󱚣",
},
{
	title: "md-robot_excited_outline",
	icon: "󱚤",
},
{
	title: "md-robot_happy",
	icon: "󱜙",
},
{
	title: "md-robot_happy_outline",
	icon: "󱜚",
},
{
	title: "md-robot_industrial",
	icon: "󰭆",
},
{
	title: "md-robot_industrial_outline",
	icon: "󱨚",
},
{
	title: "md-robot_love",
	icon: "󱚥",
},
{
	title: "md-robot_love_outline",
	icon: "󱚦",
},
{
	title: "md-robot_mower",
	icon: "󱇷",
},
{
	title: "md-robot_mower_outline",
	icon: "󱇳",
},
{
	title: "md-robot_off",
	icon: "󱚧",
},
{
	title: "md-robot_off_outline",
	icon: "󱙻",
},
{
	title: "md-robot_outline",
	icon: "󱙺",
},
{
	title: "md-robot_vacuum",
	icon: "󰜍",
},
{
	title: "md-robot_vacuum_variant",
	icon: "󰤈",
},
{
	title: "md-rocket",
	icon: "󰑣",
},
{
	title: "md-rocket_launch",
	icon: "󱓞",
},
{
	title: "md-rocket_launch_outline",
	icon: "󱓟",
},
{
	title: "md-rocket_outline",
	icon: "󱎯",
},
{
	title: "md-rodent",
	icon: "󱌧",
},
{
	title: "md-roller_shade",
	icon: "󱩫",
},
{
	title: "md-roller_shade_closed",
	icon: "󱩬",
},
{
	title: "md-roller_skate",
	icon: "󰴫",
},
{
	title: "md-roller_skate_off",
	icon: "󰅅",
},
{
	title: "md-rollerblade",
	icon: "󰴬",
},
{
	title: "md-rollerblade_off",
	icon: "󰀮",
},
{
	title: "md-rollupjs",
	icon: "󰯀",
},
{
	title: "md-rolodex",
	icon: "󱪹",
},
{
	title: "md-rolodex_outline",
	icon: "󱪺",
},
{
	title: "md-roman_numeral_2",
	icon: "󱂉",
},
{
	title: "md-roman_numeral_3",
	icon: "󱂊",
},
{
	title: "md-roman_numeral_4",
	icon: "󱂋",
},
{
	title: "md-roman_numeral_6",
	icon: "󱂍",
},
{
	title: "md-roman_numeral_7",
	icon: "󱂎",
},
{
	title: "md-roman_numeral_8",
	icon: "󱂏",
},
{
	title: "md-roman_numeral_9",
	icon: "󱂐",
},
{
	title: "md-room_service",
	icon: "󰢍",
},
{
	title: "md-room_service_outline",
	icon: "󰶗",
},
{
	title: "md-rotate_360",
	icon: "󱦙",
},
{
	title: "md-rotate_3d",
	icon: "󰻇",
},
{
	title: "md-rotate_3d_variant",
	icon: "󰑤",
},
{
	title: "md-rotate_left",
	icon: "󰑥",
},
{
	title: "md-rotate_left_variant",
	icon: "󰑦",
},
{
	title: "md-rotate_orbit",
	icon: "󰶘",
},
{
	title: "md-rotate_right",
	icon: "󰑧",
},
{
	title: "md-rotate_right_variant",
	icon: "󰑨",
},
{
	title: "md-rounded_corner",
	icon: "󰘇",
},
{
	title: "md-router",
	icon: "󱇢",
},
{
	title: "md-router_network",
	icon: "󱂇",
},
{
	title: "md-router_wireless",
	icon: "󰑩",
},
{
	title: "md-router_wireless_off",
	icon: "󱖣",
},
{
	title: "md-router_wireless_settings",
	icon: "󰩩",
},
{
	title: "md-routes",
	icon: "󰑪",
},
{
	title: "md-routes_clock",
	icon: "󱁙",
},
{
	title: "md-rowing",
	icon: "󰘈",
},
{
	title: "md-rss",
	icon: "󰑫",
},
{
	title: "md-rss_box",
	icon: "󰑬",
},
{
	title: "md-rss_off",
	icon: "󰼡",
},
{
	title: "md-rug",
	icon: "󱑵",
},
{
	title: "md-rugby",
	icon: "󰶙",
},
{
	title: "md-ruler",
	icon: "󰑭",
},
{
	title: "md-ruler_square",
	icon: "󰳂",
},
{
	title: "md-ruler_square_compass",
	icon: "󰺾",
},
{
	title: "md-run",
	icon: "󰜎",
},
{
	title: "md-run_fast",
	icon: "󰑮",
},
{
	title: "md-rv_truck",
	icon: "󱇔",
},
{
	title: "md-sack",
	icon: "󰴮",
},
{
	title: "md-sack_percent",
	icon: "󰴯",
},
{
	title: "md-safe",
	icon: "󰩪",
},
{
	title: "md-safe_square",
	icon: "󱉼",
},
{
	title: "md-safe_square_outline",
	icon: "󱉽",
},
{
	title: "md-safety_goggles",
	icon: "󰴰",
},
{
	title: "md-sail_boat",
	icon: "󰻈",
},
{
	title: "md-sail_boat_sink",
	icon: "󱫯",
},
{
	title: "md-sale",
	icon: "󰑯",
},
{
	title: "md-sale_outline",
	icon: "󱨆",
},
{
	title: "md-salesforce",
	icon: "󰢎",
},
{
	title: "md-sass",
	icon: "󰟬",
},
{
	title: "md-satellite",
	icon: "󰑰",
},
{
	title: "md-satellite_uplink",
	icon: "󰤉",
},
{
	title: "md-satellite_variant",
	icon: "󰑱",
},
{
	title: "md-sausage",
	icon: "󰢺",
},
{
	title: "md-sausage_off",
	icon: "󱞉",
},
{
	title: "md-saw_blade",
	icon: "󰹡",
},
{
	title: "md-sawtooth_wave",
	icon: "󱑺",
},
{
	title: "md-saxophone",
	icon: "󰘉",
},
{
	title: "md-scale",
	icon: "󰑲",
},
{
	title: "md-scale_balance",
	icon: "󰗑",
},
{
	title: "md-scale_bathroom",
	icon: "󰑳",
},
{
	title: "md-scale_off",
	icon: "󱁚",
},
{
	title: "md-scale_unbalanced",
	icon: "󱦸",
},
{
	title: "md-scan_helper",
	icon: "󱏘",
},
{
	title: "md-scanner",
	icon: "󰚫",
},
{
	title: "md-scanner_off",
	icon: "󰤊",
},
{
	title: "md-scatter_plot",
	icon: "󰻉",
},
{
	title: "md-scatter_plot_outline",
	icon: "󰻊",
},
{
	title: "md-scent",
	icon: "󱥘",
},
{
	title: "md-scent_off",
	icon: "󱥙",
},
{
	title: "md-school",
	icon: "󰑴",
},
{
	title: "md-school_outline",
	icon: "󱆀",
},
{
	title: "md-scissors_cutting",
	icon: "󰩫",
},
{
	title: "md-scooter",
	icon: "󱖽",
},
{
	title: "md-scooter_electric",
	icon: "󱖾",
},
{
	title: "md-scoreboard",
	icon: "󱉾",
},
{
	title: "md-scoreboard_outline",
	icon: "󱉿",
},
{
	title: "md-screen_rotation",
	icon: "󰑵",
},
{
	title: "md-screen_rotation_lock",
	icon: "󰑸",
},
{
	title: "md-screw_flat_top",
	icon: "󰷳",
},
{
	title: "md-screw_lag",
	icon: "󰷴",
},
{
	title: "md-screw_machine_flat_top",
	icon: "󰷵",
},
{
	title: "md-screw_machine_round_top",
	icon: "󰷶",
},
{
	title: "md-screw_round_top",
	icon: "󰷷",
},
{
	title: "md-screwdriver",
	icon: "󰑶",
},
{
	title: "md-script",
	icon: "󰯁",
},
{
	title: "md-script_outline",
	icon: "󰑷",
},
{
	title: "md-script_text",
	icon: "󰯂",
},
{
	title: "md-script_text_key",
	icon: "󱜥",
},
{
	title: "md-script_text_key_outline",
	icon: "󱜦",
},
{
	title: "md-script_text_outline",
	icon: "󰯃",
},
{
	title: "md-script_text_play",
	icon: "󱜧",
},
{
	title: "md-script_text_play_outline",
	icon: "󱜨",
},
{
	title: "md-sd",
	icon: "󰑹",
},
{
	title: "md-seal",
	icon: "󰑺",
},
{
	title: "md-seal_variant",
	icon: "󰿙",
},
{
	title: "md-search_web",
	icon: "󰜏",
},
{
	title: "md-seat",
	icon: "󰳃",
},
{
	title: "md-seat_flat",
	icon: "󰑻",
},
{
	title: "md-seat_flat_angled",
	icon: "󰑼",
},
{
	title: "md-seat_individual_suite",
	icon: "󰑽",
},
{
	title: "md-seat_legroom_extra",
	icon: "󰑾",
},
{
	title: "md-seat_legroom_normal",
	icon: "󰑿",
},
{
	title: "md-seat_legroom_reduced",
	icon: "󰒀",
},
{
	title: "md-seat_outline",
	icon: "󰳄",
},
{
	title: "md-seat_passenger",
	icon: "󱉉",
},
{
	title: "md-seat_recline_extra",
	icon: "󰒁",
},
{
	title: "md-seat_recline_normal",
	icon: "󰒂",
},
{
	title: "md-seatbelt",
	icon: "󰳅",
},
{
	title: "md-security",
	icon: "󰒃",
},
{
	title: "md-security_network",
	icon: "󰒄",
},
{
	title: "md-seed",
	icon: "󰹢",
},
{
	title: "md-seed_off",
	icon: "󱏽",
},
{
	title: "md-seed_off_outline",
	icon: "󱏾",
},
{
	title: "md-seed_outline",
	icon: "󰹣",
},
{
	title: "md-seed_plus",
	icon: "󱩭",
},
{
	title: "md-seed_plus_outline",
	icon: "󱩮",
},
{
	title: "md-seesaw",
	icon: "󱖤",
},
{
	title: "md-segment",
	icon: "󰻋",
},
{
	title: "md-select",
	icon: "󰒅",
},
{
	title: "md-select_all",
	icon: "󰒆",
},
{
	title: "md-select_color",
	icon: "󰴱",
},
{
	title: "md-select_compare",
	icon: "󰫙",
},
{
	title: "md-select_drag",
	icon: "󰩬",
},
{
	title: "md-select_group",
	icon: "󰾂",
},
{
	title: "md-select_inverse",
	icon: "󰒇",
},
{
	title: "md-select_marker",
	icon: "󱊀",
},
{
	title: "md-select_multiple",
	icon: "󱊁",
},
{
	title: "md-select_multiple_marker",
	icon: "󱊂",
},
{
	title: "md-select_off",
	icon: "󰒈",
},
{
	title: "md-select_place",
	icon: "󰿚",
},
{
	title: "md-select_remove",
	icon: "󱟁",
},
{
	title: "md-select_search",
	icon: "󱈄",
},
{
	title: "md-selection",
	icon: "󰒉",
},
{
	title: "md-selection_drag",
	icon: "󰩭",
},
{
	title: "md-selection_ellipse",
	icon: "󰴲",
},
{
	title: "md-selection_ellipse_arrow_inside",
	icon: "󰼢",
},
{
	title: "md-selection_ellipse_remove",
	icon: "󱟂",
},
{
	title: "md-selection_marker",
	icon: "󱊃",
},
{
	title: "md-selection_multiple",
	icon: "󱊅",
},
{
	title: "md-selection_multiple_marker",
	icon: "󱊄",
},
{
	title: "md-selection_off",
	icon: "󰝷",
},
{
	title: "md-selection_remove",
	icon: "󱟃",
},
{
	title: "md-selection_search",
	icon: "󱈅",
},
{
	title: "md-semantic_web",
	icon: "󱌖",
},
{
	title: "md-send",
	icon: "󰒊",
},
{
	title: "md-send_check",
	icon: "󱅡",
},
{
	title: "md-send_check_outline",
	icon: "󱅢",
},
{
	title: "md-send_circle",
	icon: "󰷸",
},
{
	title: "md-send_circle_outline",
	icon: "󰷹",
},
{
	title: "md-send_clock",
	icon: "󱅣",
},
{
	title: "md-send_clock_outline",
	icon: "󱅤",
},
{
	title: "md-send_lock",
	icon: "󰟭",
},
{
	title: "md-send_lock_outline",
	icon: "󱅦",
},
{
	title: "md-send_outline",
	icon: "󱅥",
},
{
	title: "md-serial_port",
	icon: "󰙜",
},
{
	title: "md-server",
	icon: "󰒋",
},
{
	title: "md-server_minus",
	icon: "󰒌",
},
{
	title: "md-server_network",
	icon: "󰒍",
},
{
	title: "md-server_network_off",
	icon: "󰒎",
},
{
	title: "md-server_off",
	icon: "󰒏",
},
{
	title: "md-server_plus",
	icon: "󰒐",
},
{
	title: "md-server_remove",
	icon: "󰒑",
},
{
	title: "md-server_security",
	icon: "󰒒",
},
{
	title: "md-set_all",
	icon: "󰝸",
},
{
	title: "md-set_center",
	icon: "󰝹",
},
{
	title: "md-set_center_right",
	icon: "󰝺",
},
{
	title: "md-set_left",
	icon: "󰝻",
},
{
	title: "md-set_left_center",
	icon: "󰝼",
},
{
	title: "md-set_left_right",
	icon: "󰝽",
},
{
	title: "md-set_merge",
	icon: "󱓠",
},
{
	title: "md-set_none",
	icon: "󰝾",
},
{
	title: "md-set_right",
	icon: "󰝿",
},
{
	title: "md-set_split",
	icon: "󱓡",
},
{
	title: "md-set_square",
	icon: "󱑝",
},
{
	title: "md-set_top_box",
	icon: "󰦟",
},
{
	title: "md-settings_helper",
	icon: "󰩮",
},
{
	title: "md-shaker",
	icon: "󱄎",
},
{
	title: "md-shaker_outline",
	icon: "󱄏",
},
{
	title: "md-shape",
	icon: "󰠱",
},
{
	title: "md-shape_circle_plus",
	icon: "󰙝",
},
{
	title: "md-shape_outline",
	icon: "󰠲",
},
{
	title: "md-shape_oval_plus",
	icon: "󱇺",
},
{
	title: "md-shape_plus",
	icon: "󰒕",
},
{
	title: "md-shape_polygon_plus",
	icon: "󰙞",
},
{
	title: "md-shape_rectangle_plus",
	icon: "󰙟",
},
{
	title: "md-shape_square_plus",
	icon: "󰙠",
},
{
	title: "md-shape_square_rounded_plus",
	icon: "󱓺",
},
{
	title: "md-share",
	icon: "󰒖",
},
{
	title: "md-share_all",
	icon: "󱇴",
},
{
	title: "md-share_all_outline",
	icon: "󱇵",
},
{
	title: "md-share_circle",
	icon: "󱆭",
},
{
	title: "md-share_off",
	icon: "󰼣",
},
{
	title: "md-share_off_outline",
	icon: "󰼤",
},
{
	title: "md-share_outline",
	icon: "󰤲",
},
{
	title: "md-share_variant",
	icon: "󰒗",
},
{
	title: "md-share_variant_outline",
	icon: "󱔔",
},
{
	title: "md-shark",
	icon: "󱢺",
},
{
	title: "md-shark_fin",
	icon: "󱙳",
},
{
	title: "md-shark_fin_outline",
	icon: "󱙴",
},
{
	title: "md-shark_off",
	icon: "󱢻",
},
{
	title: "md-sheep",
	icon: "󰳆",
},
{
	title: "md-shield",
	icon: "󰒘",
},
{
	title: "md-shield_account",
	icon: "󰢏",
},
{
	title: "md-shield_account_outline",
	icon: "󰨒",
},
{
	title: "md-shield_account_variant",
	icon: "󱖧",
},
{
	title: "md-shield_account_variant_outline",
	icon: "󱖨",
},
{
	title: "md-shield_airplane",
	icon: "󰚻",
},
{
	title: "md-shield_airplane_outline",
	icon: "󰳇",
},
{
	title: "md-shield_alert",
	icon: "󰻌",
},
{
	title: "md-shield_alert_outline",
	icon: "󰻍",
},
{
	title: "md-shield_bug",
	icon: "󱏚",
},
{
	title: "md-shield_bug_outline",
	icon: "󱏛",
},
{
	title: "md-shield_car",
	icon: "󰾃",
},
{
	title: "md-shield_check",
	icon: "󰕥",
},
{
	title: "md-shield_check_outline",
	icon: "󰳈",
},
{
	title: "md-shield_cross",
	icon: "󰳉",
},
{
	title: "md-shield_cross_outline",
	icon: "󰳊",
},
{
	title: "md-shield_crown",
	icon: "󱢼",
},
{
	title: "md-shield_crown_outline",
	icon: "󱢽",
},
{
	title: "md-shield_edit",
	icon: "󱆠",
},
{
	title: "md-shield_edit_outline",
	icon: "󱆡",
},
{
	title: "md-shield_half",
	icon: "󱍠",
},
{
	title: "md-shield_half_full",
	icon: "󰞀",
},
{
	title: "md-shield_home",
	icon: "󰚊",
},
{
	title: "md-shield_home_outline",
	icon: "󰳋",
},
{
	title: "md-shield_key",
	icon: "󰯄",
},
{
	title: "md-shield_key_outline",
	icon: "󰯅",
},
{
	title: "md-shield_link_variant",
	icon: "󰴳",
},
{
	title: "md-shield_link_variant_outline",
	icon: "󰴴",
},
{
	title: "md-shield_lock",
	icon: "󰦝",
},
{
	title: "md-shield_lock_open",
	icon: "󱦚",
},
{
	title: "md-shield_lock_open_outline",
	icon: "󱦛",
},
{
	title: "md-shield_lock_outline",
	icon: "󰳌",
},
{
	title: "md-shield_moon",
	icon: "󱠨",
},
{
	title: "md-shield_moon_outline",
	icon: "󱠩",
},
{
	title: "md-shield_off",
	icon: "󰦞",
},
{
	title: "md-shield_off_outline",
	icon: "󰦜",
},
{
	title: "md-shield_outline",
	icon: "󰒙",
},
{
	title: "md-shield_plus",
	icon: "󰫚",
},
{
	title: "md-shield_plus_outline",
	icon: "󰫛",
},
{
	title: "md-shield_refresh",
	icon: "󰂪",
},
{
	title: "md-shield_refresh_outline",
	icon: "󰇠",
},
{
	title: "md-shield_remove",
	icon: "󰫜",
},
{
	title: "md-shield_remove_outline",
	icon: "󰫝",
},
{
	title: "md-shield_search",
	icon: "󰶚",
},
{
	title: "md-shield_star",
	icon: "󱄻",
},
{
	title: "md-shield_star_outline",
	icon: "󱄼",
},
{
	title: "md-shield_sun",
	icon: "󱁝",
},
{
	title: "md-shield_sun_outline",
	icon: "󱁞",
},
{
	title: "md-shield_sword",
	icon: "󱢾",
},
{
	title: "md-shield_sword_outline",
	icon: "󱢿",
},
{
	title: "md-shield_sync",
	icon: "󱆢",
},
{
	title: "md-shield_sync_outline",
	icon: "󱆣",
},
{
	title: "md-shimmer",
	icon: "󱕅",
},
{
	title: "md-ship_wheel",
	icon: "󰠳",
},
{
	title: "md-shipping_pallet",
	icon: "󱡎",
},
{
	title: "md-shoe_ballet",
	icon: "󱗊",
},
{
	title: "md-shoe_cleat",
	icon: "󱗇",
},
{
	title: "md-shoe_formal",
	icon: "󰭇",
},
{
	title: "md-shoe_heel",
	icon: "󰭈",
},
{
	title: "md-shoe_print",
	icon: "󰷺",
},
{
	title: "md-shoe_sneaker",
	icon: "󱗈",
},
{
	title: "md-shopping",
	icon: "󰒚",
},
{
	title: "md-shopping_music",
	icon: "󰒛",
},
{
	title: "md-shopping_outline",
	icon: "󱇕",
},
{
	title: "md-shopping_search",
	icon: "󰾄",
},
{
	title: "md-shopping_search_outline",
	icon: "󱩯",
},
{
	title: "md-shore",
	icon: "󱓹",
},
{
	title: "md-shovel",
	icon: "󰜐",
},
{
	title: "md-shovel_off",
	icon: "󰜑",
},
{
	title: "md-shower",
	icon: "󰦠",
},
{
	title: "md-shower_head",
	icon: "󰦡",
},
{
	title: "md-shredder",
	icon: "󰒜",
},
{
	title: "md-shuffle",
	icon: "󰒝",
},
{
	title: "md-shuffle_disabled",
	icon: "󰒞",
},
{
	title: "md-shuffle_variant",
	icon: "󰒟",
},
{
	title: "md-shuriken",
	icon: "󱍿",
},
{
	title: "md-sickle",
	icon: "󱣀",
},
{
	title: "md-sigma",
	icon: "󰒠",
},
{
	title: "md-sigma_lower",
	icon: "󰘫",
},
{
	title: "md-sign_caution",
	icon: "󰒡",
},
{
	title: "md-sign_direction",
	icon: "󰞁",
},
{
	title: "md-sign_direction_minus",
	icon: "󱀀",
},
{
	title: "md-sign_direction_plus",
	icon: "󰿜",
},
{
	title: "md-sign_direction_remove",
	icon: "󰿝",
},
{
	title: "md-sign_pole",
	icon: "󱓸",
},
{
	title: "md-sign_real_estate",
	icon: "󱄘",
},
{
	title: "md-sign_text",
	icon: "󰞂",
},
{
	title: "md-signal",
	icon: "󰒢",
},
{
	title: "md-signal_2g",
	icon: "󰜒",
},
{
	title: "md-signal_3g",
	icon: "󰜓",
},
{
	title: "md-signal_4g",
	icon: "󰜔",
},
{
	title: "md-signal_5g",
	icon: "󰩯",
},
{
	title: "md-signal_cellular_1",
	icon: "󰢼",
},
{
	title: "md-signal_cellular_2",
	icon: "󰢽",
},
{
	title: "md-signal_cellular_3",
	icon: "󰢾",
},
{
	title: "md-signal_cellular_outline",
	icon: "󰢿",
},
{
	title: "md-signal_distance_variant",
	icon: "󰹤",
},
{
	title: "md-signal_hspa",
	icon: "󰜕",
},
{
	title: "md-signal_hspa_plus",
	icon: "󰜖",
},
{
	title: "md-signal_off",
	icon: "󰞃",
},
{
	title: "md-signal_variant",
	icon: "󰘊",
},
{
	title: "md-signature",
	icon: "󰷻",
},
{
	title: "md-signature_freehand",
	icon: "󰷼",
},
{
	title: "md-signature_image",
	icon: "󰷽",
},
{
	title: "md-signature_text",
	icon: "󰷾",
},
{
	title: "md-silo",
	icon: "󰭉",
},
{
	title: "md-silverware",
	icon: "󰒣",
},
{
	title: "md-silverware_clean",
	icon: "󰿞",
},
{
	title: "md-silverware_fork",
	icon: "󰒤",
},
{
	title: "md-silverware_fork_knife",
	icon: "󰩰",
},
{
	title: "md-silverware_spoon",
	icon: "󰒥",
},
{
	title: "md-silverware_variant",
	icon: "󰒦",
},
{
	title: "md-sim",
	icon: "󰒧",
},
{
	title: "md-sim_alert",
	icon: "󰒨",
},
{
	title: "md-sim_alert_outline",
	icon: "󱗓",
},
{
	title: "md-sim_off",
	icon: "󰒩",
},
{
	title: "md-sim_off_outline",
	icon: "󱗔",
},
{
	title: "md-sim_outline",
	icon: "󱗕",
},
{
	title: "md-simple_icons",
	icon: "󱌝",
},
{
	title: "md-sina_weibo",
	icon: "󰫟",
},
{
	title: "md-sine_wave",
	icon: "󰥛",
},
{
	title: "md-sitemap",
	icon: "󰒪",
},
{
	title: "md-sitemap_outline",
	icon: "󱦜",
},
{
	title: "md-size_m",
	icon: "󱎥",
},
{
	title: "md-size_s",
	icon: "󱎤",
},
{
	title: "md-size_xl",
	icon: "󱎧",
},
{
	title: "md-size_xs",
	icon: "󱎣",
},
{
	title: "md-size_xxl",
	icon: "󱎨",
},
{
	title: "md-size_xxs",
	icon: "󱎢",
},
{
	title: "md-size_xxxl",
	icon: "󱎩",
},
{
	title: "md-skate",
	icon: "󰴵",
},
{
	title: "md-skate_off",
	icon: "󰚙",
},
{
	title: "md-skateboard",
	icon: "󱓂",
},
{
	title: "md-skateboarding",
	icon: "󰔁",
},
{
	title: "md-skew_less",
	icon: "󰴶",
},
{
	title: "md-skew_more",
	icon: "󰴷",
},
{
	title: "md-ski",
	icon: "󱌄",
},
{
	title: "md-ski_cross_country",
	icon: "󱌅",
},
{
	title: "md-ski_water",
	icon: "󱌆",
},
{
	title: "md-skip_backward",
	icon: "󰒫",
},
{
	title: "md-skip_backward_outline",
	icon: "󰼥",
},
{
	title: "md-skip_forward",
	icon: "󰒬",
},
{
	title: "md-skip_forward_outline",
	icon: "󰼦",
},
{
	title: "md-skip_next",
	icon: "󰒭",
},
{
	title: "md-skip_next_circle",
	icon: "󰙡",
},
{
	title: "md-skip_next_circle_outline",
	icon: "󰙢",
},
{
	title: "md-skip_next_outline",
	icon: "󰼧",
},
{
	title: "md-skip_previous",
	icon: "󰒮",
},
{
	title: "md-skip_previous_circle",
	icon: "󰙣",
},
{
	title: "md-skip_previous_circle_outline",
	icon: "󰙤",
},
{
	title: "md-skip_previous_outline",
	icon: "󰼨",
},
{
	title: "md-skull",
	icon: "󰚌",
},
{
	title: "md-skull_crossbones",
	icon: "󰯆",
},
{
	title: "md-skull_crossbones_outline",
	icon: "󰯇",
},
{
	title: "md-skull_outline",
	icon: "󰯈",
},
{
	title: "md-skull_scan",
	icon: "󱓇",
},
{
	title: "md-skull_scan_outline",
	icon: "󱓈",
},
{
	title: "md-skype",
	icon: "󰒯",
},
{
	title: "md-skype_business",
	icon: "󰒰",
},
{
	title: "md-slack",
	icon: "󰒱",
},
{
	title: "md-slash_forward",
	icon: "󰿟",
},
{
	title: "md-slash_forward_box",
	icon: "󰿠",
},
{
	title: "md-sledding",
	icon: "󰐛",
},
{
	title: "md-sleep",
	icon: "󰒲",
},
{
	title: "md-sleep_off",
	icon: "󰒳",
},
{
	title: "md-slide",
	icon: "󱖥",
},
{
	title: "md-slope_downhill",
	icon: "󰷿",
},
{
	title: "md-slope_uphill",
	icon: "󰸀",
},
{
	title: "md-slot_machine",
	icon: "󱄔",
},
{
	title: "md-slot_machine_outline",
	icon: "󱄕",
},
{
	title: "md-smart_card",
	icon: "󱂽",
},
{
	title: "md-smart_card_off",
	icon: "󱣷",
},
{
	title: "md-smart_card_off_outline",
	icon: "󱣸",
},
{
	title: "md-smart_card_outline",
	icon: "󱂾",
},
{
	title: "md-smart_card_reader",
	icon: "󱂿",
},
{
	title: "md-smart_card_reader_outline",
	icon: "󱃀",
},
{
	title: "md-smog",
	icon: "󰩱",
},
{
	title: "md-smoke",
	icon: "󱞙",
},
{
	title: "md-smoke_detector",
	icon: "󰎒",
},
{
	title: "md-smoke_detector_alert",
	icon: "󱤮",
},
{
	title: "md-smoke_detector_alert_outline",
	icon: "󱤯",
},
{
	title: "md-smoke_detector_off",
	icon: "󱠉",
},
{
	title: "md-smoke_detector_off_outline",
	icon: "󱠊",
},
{
	title: "md-smoke_detector_outline",
	icon: "󱠈",
},
{
	title: "md-smoke_detector_variant",
	icon: "󱠋",
},
{
	title: "md-smoke_detector_variant_alert",
	icon: "󱤰",
},
{
	title: "md-smoke_detector_variant_off",
	icon: "󱠌",
},
{
	title: "md-smoking",
	icon: "󰒴",
},
{
	title: "md-smoking_off",
	icon: "󰒵",
},
{
	title: "md-smoking_pipe",
	icon: "󱐍",
},
{
	title: "md-smoking_pipe_off",
	icon: "󱐨",
},
{
	title: "md-snail",
	icon: "󱙷",
},
{
	title: "md-snake",
	icon: "󱔎",
},
{
	title: "md-snapchat",
	icon: "󰒶",
},
{
	title: "md-snowboard",
	icon: "󱌇",
},
{
	title: "md-snowflake",
	icon: "󰜗",
},
{
	title: "md-snowflake_alert",
	icon: "󰼩",
},
{
	title: "md-snowflake_check",
	icon: "󱩰",
},
{
	title: "md-snowflake_melt",
	icon: "󱋋",
},
{
	title: "md-snowflake_off",
	icon: "󱓣",
},
{
	title: "md-snowflake_thermometer",
	icon: "󱩱",
},
{
	title: "md-snowflake_variant",
	icon: "󰼪",
},
{
	title: "md-snowman",
	icon: "󰒷",
},
{
	title: "md-snowmobile",
	icon: "󰛝",
},
{
	title: "md-snowshoeing",
	icon: "󱩲",
},
{
	title: "md-soccer",
	icon: "󰒸",
},
{
	title: "md-soccer_field",
	icon: "󰠴",
},
{
	title: "md-social_distance_2_meters",
	icon: "󱕹",
},
{
	title: "md-social_distance_6_feet",
	icon: "󱕺",
},
{
	title: "md-sofa",
	icon: "󰒹",
},
{
	title: "md-sofa_outline",
	icon: "󱕭",
},
{
	title: "md-sofa_single",
	icon: "󱕮",
},
{
	title: "md-sofa_single_outline",
	icon: "󱕯",
},
{
	title: "md-solar_panel",
	icon: "󰶛",
},
{
	title: "md-solar_panel_large",
	icon: "󰶜",
},
{
	title: "md-solar_power",
	icon: "󰩲",
},
{
	title: "md-solar_power_variant",
	icon: "󱩳",
},
{
	title: "md-solar_power_variant_outline",
	icon: "󱩴",
},
{
	title: "md-soldering_iron",
	icon: "󱂒",
},
{
	title: "md-solid",
	icon: "󰚍",
},
{
	title: "md-sony_playstation",
	icon: "󰐔",
},
{
	title: "md-sort",
	icon: "󰒺",
},
{
	title: "md-sort_alphabetical_ascending",
	icon: "󰖽",
},
{
	title: "md-sort_alphabetical_ascending_variant",
	icon: "󱅈",
},
{
	title: "md-sort_alphabetical_descending",
	icon: "󰖿",
},
{
	title: "md-sort_alphabetical_descending_variant",
	icon: "󱅉",
},
{
	title: "md-sort_alphabetical_variant",
	icon: "󰒻",
},
{
	title: "md-sort_ascending",
	icon: "󰒼",
},
{
	title: "md-sort_bool_ascending",
	icon: "󱎅",
},
{
	title: "md-sort_bool_ascending_variant",
	icon: "󱎆",
},
{
	title: "md-sort_bool_descending",
	icon: "󱎇",
},
{
	title: "md-sort_bool_descending_variant",
	icon: "󱎈",
},
{
	title: "md-sort_calendar_ascending",
	icon: "󱕇",
},
{
	title: "md-sort_calendar_descending",
	icon: "󱕈",
},
{
	title: "md-sort_clock_ascending",
	icon: "󱕉",
},
{
	title: "md-sort_clock_ascending_outline",
	icon: "󱕊",
},
{
	title: "md-sort_clock_descending",
	icon: "󱕋",
},
{
	title: "md-sort_clock_descending_outline",
	icon: "󱕌",
},
{
	title: "md-sort_descending",
	icon: "󰒽",
},
{
	title: "md-sort_numeric_ascending",
	icon: "󱎉",
},
{
	title: "md-sort_numeric_ascending_variant",
	icon: "󰤍",
},
{
	title: "md-sort_numeric_descending",
	icon: "󱎊",
},
{
	title: "md-sort_numeric_descending_variant",
	icon: "󰫒",
},
{
	title: "md-sort_numeric_variant",
	icon: "󰒾",
},
{
	title: "md-sort_reverse_variant",
	icon: "󰌼",
},
{
	title: "md-sort_variant",
	icon: "󰒿",
},
{
	title: "md-sort_variant_lock",
	icon: "󰳍",
},
{
	title: "md-sort_variant_lock_open",
	icon: "󰳎",
},
{
	title: "md-sort_variant_off",
	icon: "󱪻",
},
{
	title: "md-sort_variant_remove",
	icon: "󱅇",
},
{
	title: "md-soundbar",
	icon: "󱟛",
},
{
	title: "md-soundcloud",
	icon: "󰓀",
},
{
	title: "md-source_branch",
	icon: "󰘬",
},
{
	title: "md-source_branch_check",
	icon: "󱓏",
},
{
	title: "md-source_branch_minus",
	icon: "󱓋",
},
{
	title: "md-source_branch_plus",
	icon: "󱓊",
},
{
	title: "md-source_branch_refresh",
	icon: "󱓍",
},
{
	title: "md-source_branch_remove",
	icon: "󱓌",
},
{
	title: "md-source_branch_sync",
	icon: "󱓎",
},
{
	title: "md-source_commit",
	icon: "󰜘",
},
{
	title: "md-source_commit_end",
	icon: "󰜙",
},
{
	title: "md-source_commit_end_local",
	icon: "󰜚",
},
{
	title: "md-source_commit_local",
	icon: "󰜛",
},
{
	title: "md-source_commit_next_local",
	icon: "󰜜",
},
{
	title: "md-source_commit_start",
	icon: "󰜝",
},
{
	title: "md-source_commit_start_next_local",
	icon: "󰜞",
},
{
	title: "md-source_fork",
	icon: "󰓁",
},
{
	title: "md-source_merge",
	icon: "󰘭",
},
{
	title: "md-source_pull",
	icon: "󰓂",
},
{
	title: "md-source_repository",
	icon: "󰳏",
},
{
	title: "md-source_repository_multiple",
	icon: "󰳐",
},
{
	title: "md-soy_sauce",
	icon: "󰟮",
},
{
	title: "md-soy_sauce_off",
	icon: "󱏼",
},
{
	title: "md-spa",
	icon: "󰳑",
},
{
	title: "md-spa_outline",
	icon: "󰳒",
},
{
	title: "md-space_invaders",
	icon: "󰯉",
},
{
	title: "md-space_station",
	icon: "󱎃",
},
{
	title: "md-spade",
	icon: "󰹥",
},
{
	title: "md-speaker",
	icon: "󰓃",
},
{
	title: "md-speaker_bluetooth",
	icon: "󰦢",
},
{
	title: "md-speaker_multiple",
	icon: "󰴸",
},
{
	title: "md-speaker_off",
	icon: "󰓄",
},
{
	title: "md-speaker_wireless",
	icon: "󰜟",
},
{
	title: "md-spear",
	icon: "󱡅",
},
{
	title: "md-speedometer",
	icon: "󰓅",
},
{
	title: "md-speedometer_medium",
	icon: "󰾅",
},
{
	title: "md-speedometer_slow",
	icon: "󰾆",
},
{
	title: "md-spellcheck",
	icon: "󰓆",
},
{
	title: "md-sphere",
	icon: "󱥔",
},
{
	title: "md-sphere_off",
	icon: "󱥕",
},
{
	title: "md-spider",
	icon: "󱇪",
},
{
	title: "md-spider_thread",
	icon: "󱇫",
},
{
	title: "md-spider_web",
	icon: "󰯊",
},
{
	title: "md-spirit_level",
	icon: "󱓱",
},
{
	title: "md-spoon_sugar",
	icon: "󱐩",
},
{
	title: "md-spotify",
	icon: "󰓇",
},
{
	title: "md-spotlight",
	icon: "󰓈",
},
{
	title: "md-spotlight_beam",
	icon: "󰓉",
},
{
	title: "md-spray",
	icon: "󰙥",
},
{
	title: "md-spray_bottle",
	icon: "󰫠",
},
{
	title: "md-sprinkler",
	icon: "󱁟",
},
{
	title: "md-sprinkler_fire",
	icon: "󱦝",
},
{
	title: "md-sprinkler_variant",
	icon: "󱁠",
},
{
	title: "md-sprout",
	icon: "󰹦",
},
{
	title: "md-sprout_outline",
	icon: "󰹧",
},
{
	title: "md-square",
	icon: "󰝤",
},
{
	title: "md-square_circle",
	icon: "󱔀",
},
{
	title: "md-square_edit_outline",
	icon: "󰤌",
},
{
	title: "md-square_medium",
	icon: "󰨓",
},
{
	title: "md-square_medium_outline",
	icon: "󰨔",
},
{
	title: "md-square_off",
	icon: "󱋮",
},
{
	title: "md-square_off_outline",
	icon: "󱋯",
},
{
	title: "md-square_opacity",
	icon: "󱡔",
},
{
	title: "md-square_outline",
	icon: "󰝣",
},
{
	title: "md-square_root",
	icon: "󰞄",
},
{
	title: "md-square_root_box",
	icon: "󰦣",
},
{
	title: "md-square_rounded",
	icon: "󱓻",
},
{
	title: "md-square_rounded_badge",
	icon: "󱨇",
},
{
	title: "md-square_rounded_badge_outline",
	icon: "󱨈",
},
{
	title: "md-square_rounded_outline",
	icon: "󱓼",
},
{
	title: "md-square_small",
	icon: "󰨕",
},
{
	title: "md-square_wave",
	icon: "󱑻",
},
{
	title: "md-squeegee",
	icon: "󰫡",
},
{
	title: "md-ssh",
	icon: "󰣀",
},
{
	title: "md-stack_exchange",
	icon: "󰘋",
},
{
	title: "md-stack_overflow",
	icon: "󰓌",
},
{
	title: "md-stackpath",
	icon: "󰍙",
},
{
	title: "md-stadium",
	icon: "󰿹",
},
{
	title: "md-stadium_variant",
	icon: "󰜠",
},
{
	title: "md-stairs",
	icon: "󰓍",
},
{
	title: "md-stairs_box",
	icon: "󱎞",
},
{
	title: "md-stairs_down",
	icon: "󱊾",
},
{
	title: "md-stairs_up",
	icon: "󱊽",
},
{
	title: "md-stamper",
	icon: "󰴹",
},
{
	title: "md-standard_definition",
	icon: "󰟯",
},
{
	title: "md-star",
	icon: "󰓎",
},
{
	title: "md-star_box",
	icon: "󰩳",
},
{
	title: "md-star_box_multiple",
	icon: "󱊆",
},
{
	title: "md-star_box_multiple_outline",
	icon: "󱊇",
},
{
	title: "md-star_box_outline",
	icon: "󰩴",
},
{
	title: "md-star_check",
	icon: "󱕦",
},
{
	title: "md-star_check_outline",
	icon: "󱕪",
},
{
	title: "md-star_circle",
	icon: "󰓏",
},
{
	title: "md-star_circle_outline",
	icon: "󰦤",
},
{
	title: "md-star_cog",
	icon: "󱙨",
},
{
	title: "md-star_cog_outline",
	icon: "󱙩",
},
{
	title: "md-star_crescent",
	icon: "󰥹",
},
{
	title: "md-star_david",
	icon: "󰥺",
},
{
	title: "md-star_face",
	icon: "󰦥",
},
{
	title: "md-star_four_points",
	icon: "󰫢",
},
{
	title: "md-star_four_points_outline",
	icon: "󰫣",
},
{
	title: "md-star_half",
	icon: "󰉆",
},
{
	title: "md-star_half_full",
	icon: "󰓐",
},
{
	title: "md-star_minus",
	icon: "󱕤",
},
{
	title: "md-star_minus_outline",
	icon: "󱕨",
},
{
	title: "md-star_off",
	icon: "󰓑",
},
{
	title: "md-star_off_outline",
	icon: "󱕛",
},
{
	title: "md-star_outline",
	icon: "󰓒",
},
{
	title: "md-star_plus",
	icon: "󱕣",
},
{
	title: "md-star_plus_outline",
	icon: "󱕧",
},
{
	title: "md-star_remove",
	icon: "󱕥",
},
{
	title: "md-star_remove_outline",
	icon: "󱕩",
},
{
	title: "md-star_settings",
	icon: "󱙪",
},
{
	title: "md-star_settings_outline",
	icon: "󱙫",
},
{
	title: "md-star_shooting",
	icon: "󱝁",
},
{
	title: "md-star_shooting_outline",
	icon: "󱝂",
},
{
	title: "md-star_three_points",
	icon: "󰫤",
},
{
	title: "md-star_three_points_outline",
	icon: "󰫥",
},
{
	title: "md-state_machine",
	icon: "󱇯",
},
{
	title: "md-steam",
	icon: "󰓓",
},
{
	title: "md-steering",
	icon: "󰓔",
},
{
	title: "md-steering_off",
	icon: "󰤎",
},
{
	title: "md-step_backward",
	icon: "󰓕",
},
{
	title: "md-step_backward_2",
	icon: "󰓖",
},
{
	title: "md-step_forward",
	icon: "󰓗",
},
{
	title: "md-step_forward_2",
	icon: "󰓘",
},
{
	title: "md-stethoscope",
	icon: "󰓙",
},
{
	title: "md-sticker",
	icon: "󱍤",
},
{
	title: "md-sticker_alert",
	icon: "󱍥",
},
{
	title: "md-sticker_alert_outline",
	icon: "󱍦",
},
{
	title: "md-sticker_check",
	icon: "󱍧",
},
{
	title: "md-sticker_check_outline",
	icon: "󱍨",
},
{
	title: "md-sticker_circle_outline",
	icon: "󰗐",
},
{
	title: "md-sticker_emoji",
	icon: "󰞅",
},
{
	title: "md-sticker_minus",
	icon: "󱍩",
},
{
	title: "md-sticker_minus_outline",
	icon: "󱍪",
},
{
	title: "md-sticker_outline",
	icon: "󱍫",
},
{
	title: "md-sticker_plus",
	icon: "󱍬",
},
{
	title: "md-sticker_plus_outline",
	icon: "󱍭",
},
{
	title: "md-sticker_remove",
	icon: "󱍮",
},
{
	title: "md-sticker_remove_outline",
	icon: "󱍯",
},
{
	title: "md-sticker_text",
	icon: "󱞎",
},
{
	title: "md-sticker_text_outline",
	icon: "󱞏",
},
{
	title: "md-stocking",
	icon: "󰓚",
},
{
	title: "md-stomach",
	icon: "󱂓",
},
{
	title: "md-stool",
	icon: "󱥝",
},
{
	title: "md-stool_outline",
	icon: "󱥞",
},
{
	title: "md-stop",
	icon: "󰓛",
},
{
	title: "md-stop_circle",
	icon: "󰙦",
},
{
	title: "md-stop_circle_outline",
	icon: "󰙧",
},
{
	title: "md-storage_tank",
	icon: "󱩵",
},
{
	title: "md-storage_tank_outline",
	icon: "󱩶",
},
{
	title: "md-store",
	icon: "󰓜",
},
{
	title: "md-store_24_hour",
	icon: "󰓝",
},
{
	title: "md-store_alert",
	icon: "󱣁",
},
{
	title: "md-store_alert_outline",
	icon: "󱣂",
},
{
	title: "md-store_check",
	icon: "󱣃",
},
{
	title: "md-store_check_outline",
	icon: "󱣄",
},
{
	title: "md-store_clock",
	icon: "󱣅",
},
{
	title: "md-store_clock_outline",
	icon: "󱣆",
},
{
	title: "md-store_cog",
	icon: "󱣇",
},
{
	title: "md-store_cog_outline",
	icon: "󱣈",
},
{
	title: "md-store_edit",
	icon: "󱣉",
},
{
	title: "md-store_edit_outline",
	icon: "󱣊",
},
{
	title: "md-store_marker",
	icon: "󱣋",
},
{
	title: "md-store_marker_outline",
	icon: "󱣌",
},
{
	title: "md-store_minus",
	icon: "󱙞",
},
{
	title: "md-store_minus_outline",
	icon: "󱣍",
},
{
	title: "md-store_off",
	icon: "󱣎",
},
{
	title: "md-store_off_outline",
	icon: "󱣏",
},
{
	title: "md-store_outline",
	icon: "󱍡",
},
{
	title: "md-store_plus",
	icon: "󱙟",
},
{
	title: "md-store_plus_outline",
	icon: "󱣐",
},
{
	title: "md-store_remove",
	icon: "󱙠",
},
{
	title: "md-store_remove_outline",
	icon: "󱣑",
},
{
	title: "md-store_search",
	icon: "󱣒",
},
{
	title: "md-store_search_outline",
	icon: "󱣓",
},
{
	title: "md-store_settings",
	icon: "󱣔",
},
{
	title: "md-store_settings_outline",
	icon: "󱣕",
},
{
	title: "md-storefront",
	icon: "󰟇",
},
{
	title: "md-storefront_outline",
	icon: "󱃁",
},
{
	title: "md-stove",
	icon: "󰓞",
},
{
	title: "md-strategy",
	icon: "󱇖",
},
{
	title: "md-stretch_to_page",
	icon: "󰼫",
},
{
	title: "md-stretch_to_page_outline",
	icon: "󰼬",
},
{
	title: "md-string_lights",
	icon: "󱊺",
},
{
	title: "md-string_lights_off",
	icon: "󱊻",
},
{
	title: "md-subdirectory_arrow_left",
	icon: "󰘌",
},
{
	title: "md-subdirectory_arrow_right",
	icon: "󰘍",
},
{
	title: "md-submarine",
	icon: "󱕬",
},
{
	title: "md-subtitles",
	icon: "󰨖",
},
{
	title: "md-subtitles_outline",
	icon: "󰨗",
},
{
	title: "md-subway",
	icon: "󰚬",
},
{
	title: "md-subway_alert_variant",
	icon: "󰶝",
},
{
	title: "md-subway_variant",
	icon: "󰓟",
},
{
	title: "md-summit",
	icon: "󰞆",
},
{
	title: "md-sun_clock",
	icon: "󱩷",
},
{
	title: "md-sun_clock_outline",
	icon: "󱩸",
},
{
	title: "md-sun_compass",
	icon: "󱦥",
},
{
	title: "md-sun_snowflake",
	icon: "󱞖",
},
{
	title: "md-sun_snowflake_variant",
	icon: "󱩹",
},
{
	title: "md-sun_thermometer",
	icon: "󱣖",
},
{
	title: "md-sun_thermometer_outline",
	icon: "󱣗",
},
{
	title: "md-sun_wireless",
	icon: "󱟾",
},
{
	title: "md-sun_wireless_outline",
	icon: "󱟿",
},
{
	title: "md-sunglasses",
	icon: "󰓠",
},
{
	title: "md-surfing",
	icon: "󱝆",
},
{
	title: "md-surround_sound",
	icon: "󰗅",
},
{
	title: "md-surround_sound_2_0",
	icon: "󰟰",
},
{
	title: "md-surround_sound_2_1",
	icon: "󱜩",
},
{
	title: "md-surround_sound_3_1",
	icon: "󰟱",
},
{
	title: "md-surround_sound_5_1",
	icon: "󰟲",
},
{
	title: "md-surround_sound_5_1_2",
	icon: "󱜪",
},
{
	title: "md-surround_sound_7_1",
	icon: "󰟳",
},
{
	title: "md-svg",
	icon: "󰜡",
},
{
	title: "md-swap_horizontal",
	icon: "󰓡",
},
{
	title: "md-swap_horizontal_bold",
	icon: "󰯍",
},
{
	title: "md-swap_horizontal_circle",
	icon: "󰿡",
},
{
	title: "md-swap_horizontal_circle_outline",
	icon: "󰿢",
},
{
	title: "md-swap_horizontal_variant",
	icon: "󰣁",
},
{
	title: "md-swap_vertical",
	icon: "󰓢",
},
{
	title: "md-swap_vertical_bold",
	icon: "󰯎",
},
{
	title: "md-swap_vertical_circle",
	icon: "󰿣",
},
{
	title: "md-swap_vertical_circle_outline",
	icon: "󰿤",
},
{
	title: "md-swap_vertical_variant",
	icon: "󰣂",
},
{
	title: "md-swim",
	icon: "󰓣",
},
{
	title: "md-switch",
	icon: "󰓤",
},
{
	title: "md-sword",
	icon: "󰓥",
},
{
	title: "md-sword_cross",
	icon: "󰞇",
},
{
	title: "md-syllabary_hangul",
	icon: "󱌳",
},
{
	title: "md-syllabary_hiragana",
	icon: "󱌴",
},
{
	title: "md-syllabary_katakana",
	icon: "󱌵",
},
{
	title: "md-syllabary_katakana_halfwidth",
	icon: "󱌶",
},
{
	title: "md-symbol",
	icon: "󱔁",
},
{
	title: "md-symfony",
	icon: "󰫦",
},
{
	title: "md-sync",
	icon: "󰓦",
},
{
	title: "md-sync_alert",
	icon: "󰓧",
},
{
	title: "md-sync_circle",
	icon: "󱍸",
},
{
	title: "md-sync_off",
	icon: "󰓨",
},
{
	title: "md-tab",
	icon: "󰓩",
},
{
	title: "md-tab_minus",
	icon: "󰭋",
},
{
	title: "md-tab_plus",
	icon: "󰝜",
},
{
	title: "md-tab_remove",
	icon: "󰭌",
},
{
	title: "md-tab_search",
	icon: "󱦞",
},
{
	title: "md-tab_unselected",
	icon: "󰓪",
},
{
	title: "md-table",
	icon: "󰓫",
},
{
	title: "md-table_account",
	icon: "󱎹",
},
{
	title: "md-table_alert",
	icon: "󱎺",
},
{
	title: "md-table_arrow_down",
	icon: "󱎻",
},
{
	title: "md-table_arrow_left",
	icon: "󱎼",
},
{
	title: "md-table_arrow_right",
	icon: "󱎽",
},
{
	title: "md-table_arrow_up",
	icon: "󱎾",
},
{
	title: "md-table_border",
	icon: "󰨘",
},
{
	title: "md-table_cancel",
	icon: "󱎿",
},
{
	title: "md-table_chair",
	icon: "󱁡",
},
{
	title: "md-table_check",
	icon: "󱏀",
},
{
	title: "md-table_clock",
	icon: "󱏁",
},
{
	title: "md-table_cog",
	icon: "󱏂",
},
{
	title: "md-table_column",
	icon: "󰠵",
},
{
	title: "md-table_column_plus_after",
	icon: "󰓬",
},
{
	title: "md-table_column_plus_before",
	icon: "󰓭",
},
{
	title: "md-table_column_remove",
	icon: "󰓮",
},
{
	title: "md-table_column_width",
	icon: "󰓯",
},
{
	title: "md-table_edit",
	icon: "󰓰",
},
{
	title: "md-table_eye",
	icon: "󱂔",
},
{
	title: "md-table_eye_off",
	icon: "󱏃",
},
{
	title: "md-table_furniture",
	icon: "󰖼",
},
{
	title: "md-table_headers_eye",
	icon: "󱈝",
},
{
	title: "md-table_headers_eye_off",
	icon: "󱈞",
},
{
	title: "md-table_heart",
	icon: "󱏄",
},
{
	title: "md-table_key",
	icon: "󱏅",
},
{
	title: "md-table_large",
	icon: "󰓱",
},
{
	title: "md-table_large_plus",
	icon: "󰾇",
},
{
	title: "md-table_large_remove",
	icon: "󰾈",
},
{
	title: "md-table_lock",
	icon: "󱏆",
},
{
	title: "md-table_merge_cells",
	icon: "󰦦",
},
{
	title: "md-table_minus",
	icon: "󱏇",
},
{
	title: "md-table_multiple",
	icon: "󱏈",
},
{
	title: "md-table_network",
	icon: "󱏉",
},
{
	title: "md-table_of_contents",
	icon: "󰠶",
},
{
	title: "md-table_off",
	icon: "󱏊",
},
{
	title: "md-table_picnic",
	icon: "󱝃",
},
{
	title: "md-table_pivot",
	icon: "󱠼",
},
{
	title: "md-table_plus",
	icon: "󰩵",
},
{
	title: "md-table_refresh",
	icon: "󱎠",
},
{
	title: "md-table_remove",
	icon: "󰩶",
},
{
	title: "md-table_row",
	icon: "󰠷",
},
{
	title: "md-table_row_height",
	icon: "󰓲",
},
{
	title: "md-table_row_plus_after",
	icon: "󰓳",
},
{
	title: "md-table_row_plus_before",
	icon: "󰓴",
},
{
	title: "md-table_row_remove",
	icon: "󰓵",
},
{
	title: "md-table_search",
	icon: "󰤏",
},
{
	title: "md-table_settings",
	icon: "󰠸",
},
{
	title: "md-table_split_cell",
	icon: "󱐪",
},
{
	title: "md-table_star",
	icon: "󱏋",
},
{
	title: "md-table_sync",
	icon: "󱎡",
},
{
	title: "md-table_tennis",
	icon: "󰹨",
},
{
	title: "md-tablet",
	icon: "󰓶",
},
{
	title: "md-tablet_android",
	icon: "󰓷",
},
{
	title: "md-tablet_cellphone",
	icon: "󰦧",
},
{
	title: "md-tablet_dashboard",
	icon: "󰻎",
},
{
	title: "md-taco",
	icon: "󰝢",
},
{
	title: "md-tag",
	icon: "󰓹",
},
{
	title: "md-tag_arrow_down",
	icon: "󱜫",
},
{
	title: "md-tag_arrow_down_outline",
	icon: "󱜬",
},
{
	title: "md-tag_arrow_left",
	icon: "󱜭",
},
{
	title: "md-tag_arrow_left_outline",
	icon: "󱜮",
},
{
	title: "md-tag_arrow_right",
	icon: "󱜯",
},
{
	title: "md-tag_arrow_right_outline",
	icon: "󱜰",
},
{
	title: "md-tag_arrow_up",
	icon: "󱜱",
},
{
	title: "md-tag_arrow_up_outline",
	icon: "󱜲",
},
{
	title: "md-tag_check",
	icon: "󱩺",
},
{
	title: "md-tag_check_outline",
	icon: "󱩻",
},
{
	title: "md-tag_faces",
	icon: "󰓺",
},
{
	title: "md-tag_heart",
	icon: "󰚋",
},
{
	title: "md-tag_heart_outline",
	icon: "󰯏",
},
{
	title: "md-tag_minus",
	icon: "󰤐",
},
{
	title: "md-tag_minus_outline",
	icon: "󱈟",
},
{
	title: "md-tag_multiple",
	icon: "󰓻",
},
{
	title: "md-tag_multiple_outline",
	icon: "󱋷",
},
{
	title: "md-tag_off",
	icon: "󱈠",
},
{
	title: "md-tag_off_outline",
	icon: "󱈡",
},
{
	title: "md-tag_outline",
	icon: "󰓼",
},
{
	title: "md-tag_plus",
	icon: "󰜢",
},
{
	title: "md-tag_plus_outline",
	icon: "󱈢",
},
{
	title: "md-tag_remove",
	icon: "󰜣",
},
{
	title: "md-tag_remove_outline",
	icon: "󱈣",
},
{
	title: "md-tag_search",
	icon: "󱤇",
},
{
	title: "md-tag_search_outline",
	icon: "󱤈",
},
{
	title: "md-tag_text",
	icon: "󱈤",
},
{
	title: "md-tag_text_outline",
	icon: "󰓽",
},
{
	title: "md-tailwind",
	icon: "󱏿",
},
{
	title: "md-tally_mark_1",
	icon: "󱪼",
},
{
	title: "md-tally_mark_2",
	icon: "󱪽",
},
{
	title: "md-tally_mark_3",
	icon: "󱪾",
},
{
	title: "md-tally_mark_4",
	icon: "󱪿",
},
{
	title: "md-tally_mark_5",
	icon: "󱫀",
},
{
	title: "md-tangram",
	icon: "󰓸",
},
{
	title: "md-tank",
	icon: "󰴺",
},
{
	title: "md-tanker_truck",
	icon: "󰿥",
},
{
	title: "md-tape_drive",
	icon: "󱛟",
},
{
	title: "md-tape_measure",
	icon: "󰭍",
},
{
	title: "md-target",
	icon: "󰓾",
},
{
	title: "md-target_account",
	icon: "󰯐",
},
{
	title: "md-target_variant",
	icon: "󰩷",
},
{
	title: "md-taxi",
	icon: "󰓿",
},
{
	title: "md-tea",
	icon: "󰶞",
},
{
	title: "md-tea_outline",
	icon: "󰶟",
},
{
	title: "md-teamviewer",
	icon: "󰔀",
},
{
	title: "md-teddy_bear",
	icon: "󱣻",
},
{
	title: "md-telescope",
	icon: "󰭎",
},
{
	title: "md-television",
	icon: "󰔂",
},
{
	title: "md-television_ambient_light",
	icon: "󱍖",
},
{
	title: "md-television_box",
	icon: "󰠹",
},
{
	title: "md-television_classic",
	icon: "󰟴",
},
{
	title: "md-television_classic_off",
	icon: "󰠺",
},
{
	title: "md-television_guide",
	icon: "󰔃",
},
{
	title: "md-television_off",
	icon: "󰠻",
},
{
	title: "md-television_pause",
	icon: "󰾉",
},
{
	title: "md-television_play",
	icon: "󰻏",
},
{
	title: "md-television_shimmer",
	icon: "󱄐",
},
{
	title: "md-television_stop",
	icon: "󰾊",
},
{
	title: "md-temperature_celsius",
	icon: "󰔄",
},
{
	title: "md-temperature_fahrenheit",
	icon: "󰔅",
},
{
	title: "md-temperature_kelvin",
	icon: "󰔆",
},
{
	title: "md-tennis",
	icon: "󰶠",
},
{
	title: "md-tennis_ball",
	icon: "󰔇",
},
{
	title: "md-tent",
	icon: "󰔈",
},
{
	title: "md-terraform",
	icon: "󱁢",
},
{
	title: "md-test_tube",
	icon: "󰙨",
},
{
	title: "md-test_tube_empty",
	icon: "󰤑",
},
{
	title: "md-test_tube_off",
	icon: "󰤒",
},
{
	title: "md-text",
	icon: "󰦨",
},
{
	title: "md-text_account",
	icon: "󱕰",
},
{
	title: "md-text_box",
	icon: "󰈚",
},
{
	title: "md-text_box_check",
	icon: "󰺦",
},
{
	title: "md-text_box_check_outline",
	icon: "󰺧",
},
{
	title: "md-text_box_edit",
	icon: "󱩼",
},
{
	title: "md-text_box_edit_outline",
	icon: "󱩽",
},
{
	title: "md-text_box_minus",
	icon: "󰺨",
},
{
	title: "md-text_box_minus_outline",
	icon: "󰺩",
},
{
	title: "md-text_box_multiple",
	icon: "󰪷",
},
{
	title: "md-text_box_multiple_outline",
	icon: "󰪸",
},
{
	title: "md-text_box_outline",
	icon: "󰧭",
},
{
	title: "md-text_box_plus",
	icon: "󰺪",
},
{
	title: "md-text_box_plus_outline",
	icon: "󰺫",
},
{
	title: "md-text_box_remove",
	icon: "󰺬",
},
{
	title: "md-text_box_remove_outline",
	icon: "󰺭",
},
{
	title: "md-text_box_search",
	icon: "󰺮",
},
{
	title: "md-text_box_search_outline",
	icon: "󰺯",
},
{
	title: "md-text_long",
	icon: "󰦪",
},
{
	title: "md-text_recognition",
	icon: "󱄽",
},
{
	title: "md-text_search",
	icon: "󱎸",
},
{
	title: "md-text_search_variant",
	icon: "󱩾",
},
{
	title: "md-text_shadow",
	icon: "󰙩",
},
{
	title: "md-text_short",
	icon: "󰦩",
},
{
	title: "md-text_to_speech",
	icon: "󰔊",
},
{
	title: "md-text_to_speech_off",
	icon: "󰔋",
},
{
	title: "md-texture",
	icon: "󰔌",
},
{
	title: "md-texture_box",
	icon: "󰿦",
},
{
	title: "md-theater",
	icon: "󰔍",
},
{
	title: "md-theme_light_dark",
	icon: "󰔎",
},
{
	title: "md-thermometer",
	icon: "󰔏",
},
{
	title: "md-thermometer_alert",
	icon: "󰸁",
},
{
	title: "md-thermometer_bluetooth",
	icon: "󱢕",
},
{
	title: "md-thermometer_check",
	icon: "󱩿",
},
{
	title: "md-thermometer_chevron_down",
	icon: "󰸂",
},
{
	title: "md-thermometer_chevron_up",
	icon: "󰸃",
},
{
	title: "md-thermometer_high",
	icon: "󱃂",
},
{
	title: "md-thermometer_lines",
	icon: "󰔐",
},
{
	title: "md-thermometer_low",
	icon: "󱃃",
},
{
	title: "md-thermometer_minus",
	icon: "󰸄",
},
{
	title: "md-thermometer_off",
	icon: "󱔱",
},
{
	title: "md-thermometer_plus",
	icon: "󰸅",
},
{
	title: "md-thermometer_water",
	icon: "󱪀",
},
{
	title: "md-thermostat",
	icon: "󰎓",
},
{
	title: "md-thermostat_box",
	icon: "󰢑",
},
{
	title: "md-thought_bubble",
	icon: "󰟶",
},
{
	title: "md-thought_bubble_outline",
	icon: "󰟷",
},
{
	title: "md-thumb_down",
	icon: "󰔑",
},
{
	title: "md-thumb_down_outline",
	icon: "󰔒",
},
{
	title: "md-thumb_up",
	icon: "󰔓",
},
{
	title: "md-thumb_up_outline",
	icon: "󰔔",
},
{
	title: "md-thumbs_up_down",
	icon: "󰔕",
},
{
	title: "md-thumbs_up_down_outline",
	icon: "󱤔",
},
{
	title: "md-ticket",
	icon: "󰔖",
},
{
	title: "md-ticket_account",
	icon: "󰔗",
},
{
	title: "md-ticket_confirmation",
	icon: "󰔘",
},
{
	title: "md-ticket_confirmation_outline",
	icon: "󱎪",
},
{
	title: "md-ticket_outline",
	icon: "󰤓",
},
{
	title: "md-ticket_percent",
	icon: "󰜤",
},
{
	title: "md-ticket_percent_outline",
	icon: "󱐫",
},
{
	title: "md-tie",
	icon: "󰔙",
},
{
	title: "md-tilde",
	icon: "󰜥",
},
{
	title: "md-tilde_off",
	icon: "󱣳",
},
{
	title: "md-timelapse",
	icon: "󰔚",
},
{
	title: "md-timeline",
	icon: "󰯑",
},
{
	title: "md-timeline_alert",
	icon: "󰾕",
},
{
	title: "md-timeline_alert_outline",
	icon: "󰾘",
},
{
	title: "md-timeline_check",
	icon: "󱔲",
},
{
	title: "md-timeline_check_outline",
	icon: "󱔳",
},
{
	title: "md-timeline_clock",
	icon: "󱇻",
},
{
	title: "md-timeline_clock_outline",
	icon: "󱇼",
},
{
	title: "md-timeline_help",
	icon: "󰾙",
},
{
	title: "md-timeline_help_outline",
	icon: "󰾚",
},
{
	title: "md-timeline_minus",
	icon: "󱔴",
},
{
	title: "md-timeline_minus_outline",
	icon: "󱔵",
},
{
	title: "md-timeline_outline",
	icon: "󰯒",
},
{
	title: "md-timeline_plus",
	icon: "󰾖",
},
{
	title: "md-timeline_plus_outline",
	icon: "󰾗",
},
{
	title: "md-timeline_remove",
	icon: "󱔶",
},
{
	title: "md-timeline_remove_outline",
	icon: "󱔷",
},
{
	title: "md-timeline_text",
	icon: "󰯓",
},
{
	title: "md-timeline_text_outline",
	icon: "󰯔",
},
{
	title: "md-timer",
	icon: "󱎫",
},
{
	title: "md-timer_10",
	icon: "󰔜",
},
{
	title: "md-timer_3",
	icon: "󰔝",
},
{
	title: "md-timer_alert",
	icon: "󱫌",
},
{
	title: "md-timer_alert_outline",
	icon: "󱫍",
},
{
	title: "md-timer_cancel",
	icon: "󱫎",
},
{
	title: "md-timer_cancel_outline",
	icon: "󱫏",
},
{
	title: "md-timer_check",
	icon: "󱫐",
},
{
	title: "md-timer_check_outline",
	icon: "󱫑",
},
{
	title: "md-timer_cog",
	icon: "󱤥",
},
{
	title: "md-timer_cog_outline",
	icon: "󱤦",
},
{
	title: "md-timer_edit",
	icon: "󱫒",
},
{
	title: "md-timer_edit_outline",
	icon: "󱫓",
},
{
	title: "md-timer_lock",
	icon: "󱫔",
},
{
	title: "md-timer_lock_open",
	icon: "󱫕",
},
{
	title: "md-timer_lock_open_outline",
	icon: "󱫖",
},
{
	title: "md-timer_lock_outline",
	icon: "󱫗",
},
{
	title: "md-timer_marker",
	icon: "󱫘",
},
{
	title: "md-timer_marker_outline",
	icon: "󱫙",
},
{
	title: "md-timer_minus",
	icon: "󱫚",
},
{
	title: "md-timer_minus_outline",
	icon: "󱫛",
},
{
	title: "md-timer_music",
	icon: "󱫜",
},
{
	title: "md-timer_music_outline",
	icon: "󱫝",
},
{
	title: "md-timer_off",
	icon: "󱎬",
},
{
	title: "md-timer_off_outline",
	icon: "󰔞",
},
{
	title: "md-timer_outline",
	icon: "󰔛",
},
{
	title: "md-timer_pause",
	icon: "󱫞",
},
{
	title: "md-timer_pause_outline",
	icon: "󱫟",
},
{
	title: "md-timer_play",
	icon: "󱫠",
},
{
	title: "md-timer_play_outline",
	icon: "󱫡",
},
{
	title: "md-timer_plus",
	icon: "󱫢",
},
{
	title: "md-timer_plus_outline",
	icon: "󱫣",
},
{
	title: "md-timer_refresh",
	icon: "󱫤",
},
{
	title: "md-timer_refresh_outline",
	icon: "󱫥",
},
{
	title: "md-timer_remove",
	icon: "󱫦",
},
{
	title: "md-timer_remove_outline",
	icon: "󱫧",
},
{
	title: "md-timer_sand",
	icon: "󰔟",
},
{
	title: "md-timer_sand_complete",
	icon: "󱦟",
},
{
	title: "md-timer_sand_empty",
	icon: "󰚭",
},
{
	title: "md-timer_sand_full",
	icon: "󰞌",
},
{
	title: "md-timer_sand_paused",
	icon: "󱦠",
},
{
	title: "md-timer_settings",
	icon: "󱤣",
},
{
	title: "md-timer_settings_outline",
	icon: "󱤤",
},
{
	title: "md-timer_star",
	icon: "󱫨",
},
{
	title: "md-timer_star_outline",
	icon: "󱫩",
},
{
	title: "md-timer_stop",
	icon: "󱫪",
},
{
	title: "md-timer_stop_outline",
	icon: "󱫫",
},
{
	title: "md-timer_sync",
	icon: "󱫬",
},
{
	title: "md-timer_sync_outline",
	icon: "󱫭",
},
{
	title: "md-timetable",
	icon: "󰔠",
},
{
	title: "md-tire",
	icon: "󱢖",
},
{
	title: "md-toaster",
	icon: "󱁣",
},
{
	title: "md-toaster_off",
	icon: "󱆷",
},
{
	title: "md-toaster_oven",
	icon: "󰳓",
},
{
	title: "md-toggle_switch",
	icon: "󰔡",
},
{
	title: "md-toggle_switch_off",
	icon: "󰔢",
},
{
	title: "md-toggle_switch_off_outline",
	icon: "󰨙",
},
{
	title: "md-toggle_switch_outline",
	icon: "󰨚",
},
{
	title: "md-toggle_switch_variant",
	icon: "󱨥",
},
{
	title: "md-toggle_switch_variant_off",
	icon: "󱨦",
},
{
	title: "md-toilet",
	icon: "󰦫",
},
{
	title: "md-toolbox",
	icon: "󰦬",
},
{
	title: "md-toolbox_outline",
	icon: "󰦭",
},
{
	title: "md-tools",
	icon: "󱁤",
},
{
	title: "md-tooltip",
	icon: "󰔣",
},
{
	title: "md-tooltip_account",
	icon: "󰀌",
},
{
	title: "md-tooltip_cellphone",
	icon: "󱠻",
},
{
	title: "md-tooltip_check",
	icon: "󱕜",
},
{
	title: "md-tooltip_check_outline",
	icon: "󱕝",
},
{
	title: "md-tooltip_edit",
	icon: "󰔤",
},
{
	title: "md-tooltip_edit_outline",
	icon: "󱋅",
},
{
	title: "md-tooltip_image",
	icon: "󰔥",
},
{
	title: "md-tooltip_image_outline",
	icon: "󰯕",
},
{
	title: "md-tooltip_minus",
	icon: "󱕞",
},
{
	title: "md-tooltip_minus_outline",
	icon: "󱕟",
},
{
	title: "md-tooltip_outline",
	icon: "󰔦",
},
{
	title: "md-tooltip_plus",
	icon: "󰯖",
},
{
	title: "md-tooltip_plus_outline",
	icon: "󰔧",
},
{
	title: "md-tooltip_remove",
	icon: "󱕠",
},
{
	title: "md-tooltip_remove_outline",
	icon: "󱕡",
},
{
	title: "md-tooltip_text",
	icon: "󰔨",
},
{
	title: "md-tooltip_text_outline",
	icon: "󰯗",
},
{
	title: "md-tooth",
	icon: "󰣃",
},
{
	title: "md-tooth_outline",
	icon: "󰔩",
},
{
	title: "md-toothbrush",
	icon: "󱄩",
},
{
	title: "md-toothbrush_electric",
	icon: "󱄬",
},
{
	title: "md-toothbrush_paste",
	icon: "󱄪",
},
{
	title: "md-torch",
	icon: "󱘆",
},
{
	title: "md-tortoise",
	icon: "󰴻",
},
{
	title: "md-toslink",
	icon: "󱊸",
},
{
	title: "md-tournament",
	icon: "󰦮",
},
{
	title: "md-tow_truck",
	icon: "󰠼",
},
{
	title: "md-tower_beach",
	icon: "󰚁",
},
{
	title: "md-tower_fire",
	icon: "󰚂",
},
{
	title: "md-town_hall",
	icon: "󱡵",
},
{
	title: "md-toy_brick",
	icon: "󱊈",
},
{
	title: "md-toy_brick_marker",
	icon: "󱊉",
},
{
	title: "md-toy_brick_marker_outline",
	icon: "󱊊",
},
{
	title: "md-toy_brick_minus",
	icon: "󱊋",
},
{
	title: "md-toy_brick_minus_outline",
	icon: "󱊌",
},
{
	title: "md-toy_brick_outline",
	icon: "󱊍",
},
{
	title: "md-toy_brick_plus",
	icon: "󱊎",
},
{
	title: "md-toy_brick_plus_outline",
	icon: "󱊏",
},
{
	title: "md-toy_brick_remove",
	icon: "󱊐",
},
{
	title: "md-toy_brick_remove_outline",
	icon: "󱊑",
},
{
	title: "md-toy_brick_search",
	icon: "󱊒",
},
{
	title: "md-toy_brick_search_outline",
	icon: "󱊓",
},
{
	title: "md-track_light",
	icon: "󰤔",
},
{
	title: "md-trackpad",
	icon: "󰟸",
},
{
	title: "md-trackpad_lock",
	icon: "󰤳",
},
{
	title: "md-tractor",
	icon: "󰢒",
},
{
	title: "md-tractor_variant",
	icon: "󱓄",
},
{
	title: "md-trademark",
	icon: "󰩸",
},
{
	title: "md-traffic_cone",
	icon: "󱍼",
},
{
	title: "md-traffic_light",
	icon: "󰔫",
},
{
	title: "md-traffic_light_outline",
	icon: "󱠪",
},
{
	title: "md-train",
	icon: "󰔬",
},
{
	title: "md-train_car",
	icon: "󰯘",
},
{
	title: "md-train_car_passenger",
	icon: "󱜳",
},
{
	title: "md-train_car_passenger_door",
	icon: "󱜴",
},
{
	title: "md-train_car_passenger_door_open",
	icon: "󱜵",
},
{
	title: "md-train_car_passenger_variant",
	icon: "󱜶",
},
{
	title: "md-train_variant",
	icon: "󰣄",
},
{
	title: "md-tram",
	icon: "󰔭",
},
{
	title: "md-tram_side",
	icon: "󰿧",
},
{
	title: "md-transcribe",
	icon: "󰔮",
},
{
	title: "md-transcribe_close",
	icon: "󰔯",
},
{
	title: "md-transfer",
	icon: "󱁥",
},
{
	title: "md-transfer_down",
	icon: "󰶡",
},
{
	title: "md-transfer_left",
	icon: "󰶢",
},
{
	title: "md-transfer_right",
	icon: "󰔰",
},
{
	title: "md-transfer_up",
	icon: "󰶣",
},
{
	title: "md-transit_connection",
	icon: "󰴼",
},
{
	title: "md-transit_connection_horizontal",
	icon: "󱕆",
},
{
	title: "md-transit_connection_variant",
	icon: "󰴽",
},
{
	title: "md-transit_detour",
	icon: "󰾋",
},
{
	title: "md-transit_skip",
	icon: "󱔕",
},
{
	title: "md-transit_transfer",
	icon: "󰚮",
},
{
	title: "md-transition",
	icon: "󰤕",
},
{
	title: "md-transition_masked",
	icon: "󰤖",
},
{
	title: "md-translate",
	icon: "󰗊",
},
{
	title: "md-translate_off",
	icon: "󰸆",
},
{
	title: "md-transmission_tower",
	icon: "󰴾",
},
{
	title: "md-transmission_tower_export",
	icon: "󱤬",
},
{
	title: "md-transmission_tower_import",
	icon: "󱤭",
},
{
	title: "md-transmission_tower_off",
	icon: "󱧝",
},
{
	title: "md-trash_can",
	icon: "󰩹",
},
{
	title: "md-trash_can_outline",
	icon: "󰩺",
},
{
	title: "md-tray",
	icon: "󱊔",
},
{
	title: "md-tray_alert",
	icon: "󱊕",
},
{
	title: "md-tray_arrow_down",
	icon: "󰄠",
},
{
	title: "md-tray_arrow_up",
	icon: "󰄝",
},
{
	title: "md-tray_full",
	icon: "󱊖",
},
{
	title: "md-tray_minus",
	icon: "󱊗",
},
{
	title: "md-tray_plus",
	icon: "󱊘",
},
{
	title: "md-tray_remove",
	icon: "󱊙",
},
{
	title: "md-treasure_chest",
	icon: "󰜦",
},
{
	title: "md-tree",
	icon: "󰔱",
},
{
	title: "md-tree_outline",
	icon: "󰹩",
},
{
	title: "md-trello",
	icon: "󰔲",
},
{
	title: "md-trending_down",
	icon: "󰔳",
},
{
	title: "md-trending_neutral",
	icon: "󰔴",
},
{
	title: "md-trending_up",
	icon: "󰔵",
},
{
	title: "md-triangle",
	icon: "󰔶",
},
{
	title: "md-triangle_outline",
	icon: "󰔷",
},
{
	title: "md-triangle_small_down",
	icon: "󱨉",
},
{
	title: "md-triangle_small_up",
	icon: "󱨊",
},
{
	title: "md-triangle_wave",
	icon: "󱑼",
},
{
	title: "md-triforce",
	icon: "󰯙",
},
{
	title: "md-trophy",
	icon: "󰔸",
},
{
	title: "md-trophy_award",
	icon: "󰔹",
},
{
	title: "md-trophy_broken",
	icon: "󰶤",
},
{
	title: "md-trophy_outline",
	icon: "󰔺",
},
{
	title: "md-trophy_variant",
	icon: "󰔻",
},
{
	title: "md-trophy_variant_outline",
	icon: "󰔼",
},
{
	title: "md-truck",
	icon: "󰔽",
},
{
	title: "md-truck_alert",
	icon: "󱧞",
},
{
	title: "md-truck_alert_outline",
	icon: "󱧟",
},
{
	title: "md-truck_cargo_container",
	icon: "󱣘",
},
{
	title: "md-truck_check",
	icon: "󰳔",
},
{
	title: "md-truck_check_outline",
	icon: "󱊚",
},
{
	title: "md-truck_delivery",
	icon: "󰔾",
},
{
	title: "md-truck_delivery_outline",
	icon: "󱊛",
},
{
	title: "md-truck_fast",
	icon: "󰞈",
},
{
	title: "md-truck_fast_outline",
	icon: "󱊜",
},
{
	title: "md-truck_flatbed",
	icon: "󱢑",
},
{
	title: "md-truck_minus",
	icon: "󱦮",
},
{
	title: "md-truck_minus_outline",
	icon: "󱦽",
},
{
	title: "md-truck_outline",
	icon: "󱊝",
},
{
	title: "md-truck_plus",
	icon: "󱦭",
},
{
	title: "md-truck_plus_outline",
	icon: "󱦼",
},
{
	title: "md-truck_remove",
	icon: "󱦯",
},
{
	title: "md-truck_remove_outline",
	icon: "󱦾",
},
{
	title: "md-truck_snowflake",
	icon: "󱦦",
},
{
	title: "md-truck_trailer",
	icon: "󰜧",
},
{
	title: "md-trumpet",
	icon: "󱂖",
},
{
	title: "md-tshirt_crew",
	icon: "󰩻",
},
{
	title: "md-tshirt_crew_outline",
	icon: "󰔿",
},
{
	title: "md-tshirt_v",
	icon: "󰩼",
},
{
	title: "md-tshirt_v_outline",
	icon: "󰕀",
},
{
	title: "md-tsunami",
	icon: "󱪁",
},
{
	title: "md-tumble_dryer",
	icon: "󰤗",
},
{
	title: "md-tumble_dryer_alert",
	icon: "󱆺",
},
{
	title: "md-tumble_dryer_off",
	icon: "󱆻",
},
{
	title: "md-tune",
	icon: "󰘮",
},
{
	title: "md-tune_variant",
	icon: "󱕂",
},
{
	title: "md-tune_vertical",
	icon: "󰙪",
},
{
	title: "md-tune_vertical_variant",
	icon: "󱕃",
},
{
	title: "md-tunnel",
	icon: "󱠽",
},
{
	title: "md-tunnel_outline",
	icon: "󱠾",
},
{
	title: "md-turbine",
	icon: "󱪂",
},
{
	title: "md-turkey",
	icon: "󱜛",
},
{
	title: "md-turnstile",
	icon: "󰳕",
},
{
	title: "md-turnstile_outline",
	icon: "󰳖",
},
{
	title: "md-turtle",
	icon: "󰳗",
},
{
	title: "md-twitch",
	icon: "󰕃",
},
{
	title: "md-twitter",
	icon: "󰕄",
},
{
	title: "md-two_factor_authentication",
	icon: "󰦯",
},
{
	title: "md-typewriter",
	icon: "󰼭",
},
{
	title: "md-ubisoft",
	icon: "󰯚",
},
{
	title: "md-ubuntu",
	icon: "󰕈",
},
{
	title: "md-ufo",
	icon: "󱃄",
},
{
	title: "md-ufo_outline",
	icon: "󱃅",
},
{
	title: "md-ultra_high_definition",
	icon: "󰟹",
},
{
	title: "md-umbraco",
	icon: "󰕉",
},
{
	title: "md-umbrella",
	icon: "󰕊",
},
{
	title: "md-umbrella_beach",
	icon: "󱢊",
},
{
	title: "md-umbrella_beach_outline",
	icon: "󱢋",
},
{
	title: "md-umbrella_closed",
	icon: "󰦰",
},
{
	title: "md-umbrella_closed_outline",
	icon: "󱏢",
},
{
	title: "md-umbrella_closed_variant",
	icon: "󱏡",
},
{
	title: "md-umbrella_outline",
	icon: "󰕋",
},
{
	title: "md-undo",
	icon: "󰕌",
},
{
	title: "md-undo_variant",
	icon: "󰕍",
},
{
	title: "md-unfold_less_horizontal",
	icon: "󰕎",
},
{
	title: "md-unfold_less_vertical",
	icon: "󰝠",
},
{
	title: "md-unfold_more_horizontal",
	icon: "󰕏",
},
{
	title: "md-unfold_more_vertical",
	icon: "󰝡",
},
{
	title: "md-ungroup",
	icon: "󰕐",
},
{
	title: "md-unicode",
	icon: "󰻐",
},
{
	title: "md-unicorn",
	icon: "󱗂",
},
{
	title: "md-unicorn_variant",
	icon: "󱗃",
},
{
	title: "md-unicycle",
	icon: "󱗥",
},
{
	title: "md-unity",
	icon: "󰚯",
},
{
	title: "md-unreal",
	icon: "󰦱",
},
{
	title: "md-update",
	icon: "󰚰",
},
{
	title: "md-upload",
	icon: "󰕒",
},
{
	title: "md-upload_lock",
	icon: "󱍳",
},
{
	title: "md-upload_lock_outline",
	icon: "󱍴",
},
{
	title: "md-upload_multiple",
	icon: "󰠽",
},
{
	title: "md-upload_network",
	icon: "󰛶",
},
{
	title: "md-upload_network_outline",
	icon: "󰳘",
},
{
	title: "md-upload_off",
	icon: "󱃆",
},
{
	title: "md-upload_off_outline",
	icon: "󱃇",
},
{
	title: "md-upload_outline",
	icon: "󰸇",
},
{
	title: "md-usb",
	icon: "󰕓",
},
{
	title: "md-usb_flash_drive",
	icon: "󱊞",
},
{
	title: "md-usb_flash_drive_outline",
	icon: "󱊟",
},
{
	title: "md-usb_port",
	icon: "󱇰",
},
{
	title: "md-vacuum",
	icon: "󱦡",
},
{
	title: "md-vacuum_outline",
	icon: "󱦢",
},
{
	title: "md-valve",
	icon: "󱁦",
},
{
	title: "md-valve_closed",
	icon: "󱁧",
},
{
	title: "md-valve_open",
	icon: "󱁨",
},
{
	title: "md-van_passenger",
	icon: "󰟺",
},
{
	title: "md-van_utility",
	icon: "󰟻",
},
{
	title: "md-vanish",
	icon: "󰟼",
},
{
	title: "md-vanish_quarter",
	icon: "󱕔",
},
{
	title: "md-vanity_light",
	icon: "󱇡",
},
{
	title: "md-variable",
	icon: "󰫧",
},
{
	title: "md-variable_box",
	icon: "󱄑",
},
{
	title: "md-vector_arrange_above",
	icon: "󰕔",
},
{
	title: "md-vector_arrange_below",
	icon: "󰕕",
},
{
	title: "md-vector_bezier",
	icon: "󰫨",
},
{
	title: "md-vector_circle",
	icon: "󰕖",
},
{
	title: "md-vector_circle_variant",
	icon: "󰕗",
},
{
	title: "md-vector_combine",
	icon: "󰕘",
},
{
	title: "md-vector_curve",
	icon: "󰕙",
},
{
	title: "md-vector_difference",
	icon: "󰕚",
},
{
	title: "md-vector_difference_ab",
	icon: "󰕛",
},
{
	title: "md-vector_difference_ba",
	icon: "󰕜",
},
{
	title: "md-vector_ellipse",
	icon: "󰢓",
},
{
	title: "md-vector_intersection",
	icon: "󰕝",
},
{
	title: "md-vector_line",
	icon: "󰕞",
},
{
	title: "md-vector_link",
	icon: "󰿨",
},
{
	title: "md-vector_point",
	icon: "󰕟",
},
{
	title: "md-vector_polygon",
	icon: "󰕠",
},
{
	title: "md-vector_polygon_variant",
	icon: "󱡖",
},
{
	title: "md-vector_polyline",
	icon: "󰕡",
},
{
	title: "md-vector_polyline_edit",
	icon: "󱈥",
},
{
	title: "md-vector_polyline_minus",
	icon: "󱈦",
},
{
	title: "md-vector_polyline_plus",
	icon: "󱈧",
},
{
	title: "md-vector_polyline_remove",
	icon: "󱈨",
},
{
	title: "md-vector_radius",
	icon: "󰝊",
},
{
	title: "md-vector_rectangle",
	icon: "󰗆",
},
{
	title: "md-vector_selection",
	icon: "󰕢",
},
{
	title: "md-vector_square",
	icon: "󰀁",
},
{
	title: "md-vector_square_close",
	icon: "󱡗",
},
{
	title: "md-vector_square_edit",
	icon: "󱣙",
},
{
	title: "md-vector_square_minus",
	icon: "󱣚",
},
{
	title: "md-vector_square_open",
	icon: "󱡘",
},
{
	title: "md-vector_square_plus",
	icon: "󱣛",
},
{
	title: "md-vector_square_remove",
	icon: "󱣜",
},
{
	title: "md-vector_triangle",
	icon: "󰕣",
},
{
	title: "md-vector_union",
	icon: "󰕤",
},
{
	title: "md-vhs",
	icon: "󰨛",
},
{
	title: "md-vibrate",
	icon: "󰕦",
},
{
	title: "md-vibrate_off",
	icon: "󰳙",
},
{
	title: "md-video",
	icon: "󰕧",
},
{
	title: "md-video_2d",
	icon: "󱨜",
},
{
	title: "md-video_3d",
	icon: "󰟽",
},
{
	title: "md-video_3d_off",
	icon: "󱏙",
},
{
	title: "md-video_3d_variant",
	icon: "󰻑",
},
{
	title: "md-video_4k_box",
	icon: "󰠾",
},
{
	title: "md-video_account",
	icon: "󰤙",
},
{
	title: "md-video_box",
	icon: "󰃽",
},
{
	title: "md-video_box_off",
	icon: "󰃾",
},
{
	title: "md-video_check",
	icon: "󱁩",
},
{
	title: "md-video_check_outline",
	icon: "󱁪",
},
{
	title: "md-video_high_definition",
	icon: "󱔮",
},
{
	title: "md-video_image",
	icon: "󰤚",
},
{
	title: "md-video_input_antenna",
	icon: "󰠿",
},
{
	title: "md-video_input_component",
	icon: "󰡀",
},
{
	title: "md-video_input_hdmi",
	icon: "󰡁",
},
{
	title: "md-video_input_scart",
	icon: "󰾌",
},
{
	title: "md-video_input_svideo",
	icon: "󰡂",
},
{
	title: "md-video_marker",
	icon: "󱦩",
},
{
	title: "md-video_marker_outline",
	icon: "󱦪",
},
{
	title: "md-video_minus",
	icon: "󰦲",
},
{
	title: "md-video_minus_outline",
	icon: "󰊺",
},
{
	title: "md-video_off",
	icon: "󰕨",
},
{
	title: "md-video_off_outline",
	icon: "󰯛",
},
{
	title: "md-video_outline",
	icon: "󰯜",
},
{
	title: "md-video_plus",
	icon: "󰦳",
},
{
	title: "md-video_plus_outline",
	icon: "󰇓",
},
{
	title: "md-video_stabilization",
	icon: "󰤛",
},
{
	title: "md-video_switch",
	icon: "󰕩",
},
{
	title: "md-video_switch_outline",
	icon: "󰞐",
},
{
	title: "md-video_vintage",
	icon: "󰨜",
},
{
	title: "md-video_wireless",
	icon: "󰻒",
},
{
	title: "md-video_wireless_outline",
	icon: "󰻓",
},
{
	title: "md-view_agenda",
	icon: "󰕪",
},
{
	title: "md-view_agenda_outline",
	icon: "󱇘",
},
{
	title: "md-view_array",
	icon: "󰕫",
},
{
	title: "md-view_array_outline",
	icon: "󱒅",
},
{
	title: "md-view_carousel",
	icon: "󰕬",
},
{
	title: "md-view_carousel_outline",
	icon: "󱒆",
},
{
	title: "md-view_column",
	icon: "󰕭",
},
{
	title: "md-view_column_outline",
	icon: "󱒇",
},
{
	title: "md-view_comfy",
	icon: "󰹪",
},
{
	title: "md-view_comfy_outline",
	icon: "󱒈",
},
{
	title: "md-view_compact",
	icon: "󰹫",
},
{
	title: "md-view_compact_outline",
	icon: "󰹬",
},
{
	title: "md-view_dashboard",
	icon: "󰕮",
},
{
	title: "md-view_dashboard_edit",
	icon: "󱥇",
},
{
	title: "md-view_dashboard_edit_outline",
	icon: "󱥈",
},
{
	title: "md-view_dashboard_outline",
	icon: "󰨝",
},
{
	title: "md-view_dashboard_variant",
	icon: "󰡃",
},
{
	title: "md-view_dashboard_variant_outline",
	icon: "󱒉",
},
{
	title: "md-view_day",
	icon: "󰕯",
},
{
	title: "md-view_day_outline",
	icon: "󱒊",
},
{
	title: "md-view_gallery",
	icon: "󱢈",
},
{
	title: "md-view_gallery_outline",
	icon: "󱢉",
},
{
	title: "md-view_grid",
	icon: "󰕰",
},
{
	title: "md-view_grid_outline",
	icon: "󱇙",
},
{
	title: "md-view_grid_plus",
	icon: "󰾍",
},
{
	title: "md-view_grid_plus_outline",
	icon: "󱇚",
},
{
	title: "md-view_headline",
	icon: "󰕱",
},
{
	title: "md-view_list",
	icon: "󰕲",
},
{
	title: "md-view_list_outline",
	icon: "󱒋",
},
{
	title: "md-view_module",
	icon: "󰕳",
},
{
	title: "md-view_module_outline",
	icon: "󱒌",
},
{
	title: "md-view_parallel",
	icon: "󰜨",
},
{
	title: "md-view_parallel_outline",
	icon: "󱒍",
},
{
	title: "md-view_quilt",
	icon: "󰕴",
},
{
	title: "md-view_quilt_outline",
	icon: "󱒎",
},
{
	title: "md-view_sequential",
	icon: "󰜩",
},
{
	title: "md-view_sequential_outline",
	icon: "󱒏",
},
{
	title: "md-view_split_horizontal",
	icon: "󰯋",
},
{
	title: "md-view_split_vertical",
	icon: "󰯌",
},
{
	title: "md-view_stream",
	icon: "󰕵",
},
{
	title: "md-view_stream_outline",
	icon: "󱒐",
},
{
	title: "md-view_week",
	icon: "󰕶",
},
{
	title: "md-view_week_outline",
	icon: "󱒑",
},
{
	title: "md-vimeo",
	icon: "󰕷",
},
{
	title: "md-violin",
	icon: "󰘏",
},
{
	title: "md-virtual_reality",
	icon: "󰢔",
},
{
	title: "md-virus",
	icon: "󱎶",
},
{
	title: "md-virus_off",
	icon: "󱣡",
},
{
	title: "md-virus_off_outline",
	icon: "󱣢",
},
{
	title: "md-virus_outline",
	icon: "󱎷",
},
{
	title: "md-vlc",
	icon: "󰕼",
},
{
	title: "md-voicemail",
	icon: "󰕽",
},
{
	title: "md-volcano",
	icon: "󱪃",
},
{
	title: "md-volcano_outline",
	icon: "󱪄",
},
{
	title: "md-volleyball",
	icon: "󰦴",
},
{
	title: "md-volume_high",
	icon: "󰕾",
},
{
	title: "md-volume_low",
	icon: "󰕿",
},
{
	title: "md-volume_medium",
	icon: "󰖀",
},
{
	title: "md-volume_minus",
	icon: "󰝞",
},
{
	title: "md-volume_mute",
	icon: "󰝟",
},
{
	title: "md-volume_off",
	icon: "󰖁",
},
{
	title: "md-volume_plus",
	icon: "󰝝",
},
{
	title: "md-volume_source",
	icon: "󱄠",
},
{
	title: "md-volume_variant_off",
	icon: "󰸈",
},
{
	title: "md-volume_vibrate",
	icon: "󱄡",
},
{
	title: "md-vote",
	icon: "󰨟",
},
{
	title: "md-vote_outline",
	icon: "󰨠",
},
{
	title: "md-vpn",
	icon: "󰖂",
},
{
	title: "md-vuejs",
	icon: "󰡄",
},
{
	title: "md-vuetify",
	icon: "󰹭",
},
{
	title: "md-walk",
	icon: "󰖃",
},
{
	title: "md-wall",
	icon: "󰟾",
},
{
	title: "md-wall_fire",
	icon: "󱨑",
},
{
	title: "md-wall_sconce",
	icon: "󰤜",
},
{
	title: "md-wall_sconce_flat",
	icon: "󰤝",
},
{
	title: "md-wall_sconce_flat_outline",
	icon: "󱟉",
},
{
	title: "md-wall_sconce_flat_variant",
	icon: "󰐜",
},
{
	title: "md-wall_sconce_flat_variant_outline",
	icon: "󱟊",
},
{
	title: "md-wall_sconce_outline",
	icon: "󱟋",
},
{
	title: "md-wall_sconce_round",
	icon: "󰝈",
},
{
	title: "md-wall_sconce_round_outline",
	icon: "󱟌",
},
{
	title: "md-wall_sconce_round_variant",
	icon: "󰤞",
},
{
	title: "md-wall_sconce_round_variant_outline",
	icon: "󱟍",
},
{
	title: "md-wallet",
	icon: "󰖄",
},
{
	title: "md-wallet_giftcard",
	icon: "󰖅",
},
{
	title: "md-wallet_membership",
	icon: "󰖆",
},
{
	title: "md-wallet_outline",
	icon: "󰯝",
},
{
	title: "md-wallet_plus",
	icon: "󰾎",
},
{
	title: "md-wallet_plus_outline",
	icon: "󰾏",
},
{
	title: "md-wallet_travel",
	icon: "󰖇",
},
{
	title: "md-wallpaper",
	icon: "󰸉",
},
{
	title: "md-wan",
	icon: "󰖈",
},
{
	title: "md-wardrobe",
	icon: "󰾐",
},
{
	title: "md-wardrobe_outline",
	icon: "󰾑",
},
{
	title: "md-warehouse",
	icon: "󰾁",
},
{
	title: "md-washing_machine",
	icon: "󰜪",
},
{
	title: "md-washing_machine_alert",
	icon: "󱆼",
},
{
	title: "md-washing_machine_off",
	icon: "󱆽",
},
{
	title: "md-watch",
	icon: "󰖉",
},
{
	title: "md-watch_export",
	icon: "󰖊",
},
{
	title: "md-watch_export_variant",
	icon: "󰢕",
},
{
	title: "md-watch_import",
	icon: "󰖋",
},
{
	title: "md-watch_import_variant",
	icon: "󰢖",
},
{
	title: "md-watch_variant",
	icon: "󰢗",
},
{
	title: "md-watch_vibrate",
	icon: "󰚱",
},
{
	title: "md-watch_vibrate_off",
	icon: "󰳚",
},
{
	title: "md-water",
	icon: "󰖌",
},
{
	title: "md-water_alert",
	icon: "󱔂",
},
{
	title: "md-water_alert_outline",
	icon: "󱔃",
},
{
	title: "md-water_boiler",
	icon: "󰾒",
},
{
	title: "md-water_boiler_alert",
	icon: "󱆳",
},
{
	title: "md-water_boiler_off",
	icon: "󱆴",
},
{
	title: "md-water_check",
	icon: "󱔄",
},
{
	title: "md-water_check_outline",
	icon: "󱔅",
},
{
	title: "md-water_circle",
	icon: "󱠆",
},
{
	title: "md-water_minus",
	icon: "󱔆",
},
{
	title: "md-water_minus_outline",
	icon: "󱔇",
},
{
	title: "md-water_off",
	icon: "󰖍",
},
{
	title: "md-water_off_outline",
	icon: "󱔈",
},
{
	title: "md-water_opacity",
	icon: "󱡕",
},
{
	title: "md-water_outline",
	icon: "󰸊",
},
{
	title: "md-water_percent",
	icon: "󰖎",
},
{
	title: "md-water_percent_alert",
	icon: "󱔉",
},
{
	title: "md-water_plus",
	icon: "󱔊",
},
{
	title: "md-water_plus_outline",
	icon: "󱔋",
},
{
	title: "md-water_polo",
	icon: "󱊠",
},
{
	title: "md-water_pump",
	icon: "󰖏",
},
{
	title: "md-water_pump_off",
	icon: "󰾓",
},
{
	title: "md-water_remove",
	icon: "󱔌",
},
{
	title: "md-water_remove_outline",
	icon: "󱔍",
},
{
	title: "md-water_sync",
	icon: "󱟆",
},
{
	title: "md-water_thermometer",
	icon: "󱪅",
},
{
	title: "md-water_thermometer_outline",
	icon: "󱪆",
},
{
	title: "md-water_well",
	icon: "󱁫",
},
{
	title: "md-water_well_outline",
	icon: "󱁬",
},
{
	title: "md-waterfall",
	icon: "󱡉",
},
{
	title: "md-watering_can",
	icon: "󱒁",
},
{
	title: "md-watering_can_outline",
	icon: "󱒂",
},
{
	title: "md-watermark",
	icon: "󰘒",
},
{
	title: "md-wave",
	icon: "󰼮",
},
{
	title: "md-waveform",
	icon: "󱑽",
},
{
	title: "md-waves",
	icon: "󰞍",
},
{
	title: "md-waves_arrow_left",
	icon: "󱡙",
},
{
	title: "md-waves_arrow_right",
	icon: "󱡚",
},
{
	title: "md-waves_arrow_up",
	icon: "󱡛",
},
{
	title: "md-waze",
	icon: "󰯞",
},
{
	title: "md-weather_cloudy",
	icon: "󰖐",
},
{
	title: "md-weather_cloudy_alert",
	icon: "󰼯",
},
{
	title: "md-weather_cloudy_arrow_right",
	icon: "󰹮",
},
{
	title: "md-weather_cloudy_clock",
	icon: "󱣶",
},
{
	title: "md-weather_fog",
	icon: "󰖑",
},
{
	title: "md-weather_hail",
	icon: "󰖒",
},
{
	title: "md-weather_hazy",
	icon: "󰼰",
},
{
	title: "md-weather_hurricane",
	icon: "󰢘",
},
{
	title: "md-weather_lightning",
	icon: "󰖓",
},
{
	title: "md-weather_lightning_rainy",
	icon: "󰙾",
},
{
	title: "md-weather_night",
	icon: "󰖔",
},
{
	title: "md-weather_night_partly_cloudy",
	icon: "󰼱",
},
{
	title: "md-weather_partly_cloudy",
	icon: "󰖕",
},
{
	title: "md-weather_partly_lightning",
	icon: "󰼲",
},
{
	title: "md-weather_partly_rainy",
	icon: "󰼳",
},
{
	title: "md-weather_partly_snowy",
	icon: "󰼴",
},
{
	title: "md-weather_partly_snowy_rainy",
	icon: "󰼵",
},
{
	title: "md-weather_pouring",
	icon: "󰖖",
},
{
	title: "md-weather_rainy",
	icon: "󰖗",
},
{
	title: "md-weather_snowy",
	icon: "󰖘",
},
{
	title: "md-weather_snowy_heavy",
	icon: "󰼶",
},
{
	title: "md-weather_snowy_rainy",
	icon: "󰙿",
},
{
	title: "md-weather_sunny",
	icon: "󰖙",
},
{
	title: "md-weather_sunny_alert",
	icon: "󰼷",
},
{
	title: "md-weather_sunny_off",
	icon: "󱓤",
},
{
	title: "md-weather_sunset",
	icon: "󰖚",
},
{
	title: "md-weather_sunset_down",
	icon: "󰖛",
},
{
	title: "md-weather_sunset_up",
	icon: "󰖜",
},
{
	title: "md-weather_tornado",
	icon: "󰼸",
},
{
	title: "md-weather_windy",
	icon: "󰖝",
},
{
	title: "md-weather_windy_variant",
	icon: "󰖞",
},
{
	title: "md-web",
	icon: "󰖟",
},
{
	title: "md-web_box",
	icon: "󰾔",
},
{
	title: "md-web_cancel",
	icon: "󱞐",
},
{
	title: "md-web_check",
	icon: "󰞉",
},
{
	title: "md-web_clock",
	icon: "󱉊",
},
{
	title: "md-web_minus",
	icon: "󱂠",
},
{
	title: "md-web_off",
	icon: "󰪎",
},
{
	title: "md-web_plus",
	icon: "󰀳",
},
{
	title: "md-web_refresh",
	icon: "󱞑",
},
{
	title: "md-web_remove",
	icon: "󰕑",
},
{
	title: "md-web_sync",
	icon: "󱞒",
},
{
	title: "md-webcam",
	icon: "󰖠",
},
{
	title: "md-webcam_off",
	icon: "󱜷",
},
{
	title: "md-webhook",
	icon: "󰘯",
},
{
	title: "md-webpack",
	icon: "󰜫",
},
{
	title: "md-webrtc",
	icon: "󱉈",
},
{
	title: "md-wechat",
	icon: "󰘑",
},
{
	title: "md-weight",
	icon: "󰖡",
},
{
	title: "md-weight_gram",
	icon: "󰴿",
},
{
	title: "md-weight_kilogram",
	icon: "󰖢",
},
{
	title: "md-weight_lifter",
	icon: "󱅝",
},
{
	title: "md-weight_pound",
	icon: "󰦵",
},
{
	title: "md-whatsapp",
	icon: "󰖣",
},
{
	title: "md-wheel_barrow",
	icon: "󱓲",
},
{
	title: "md-wheelchair",
	icon: "󱪇",
},
{
	title: "md-wheelchair_accessibility",
	icon: "󰖤",
},
{
	title: "md-whistle",
	icon: "󰦶",
},
{
	title: "md-whistle_outline",
	icon: "󱊼",
},
{
	title: "md-white_balance_auto",
	icon: "󰖥",
},
{
	title: "md-white_balance_incandescent",
	icon: "󰖦",
},
{
	title: "md-white_balance_iridescent",
	icon: "󰖧",
},
{
	title: "md-white_balance_sunny",
	icon: "󰖨",
},
{
	title: "md-widgets",
	icon: "󰜬",
},
{
	title: "md-widgets_outline",
	icon: "󱍕",
},
{
	title: "md-wifi",
	icon: "󰖩",
},
{
	title: "md-wifi_alert",
	icon: "󱚵",
},
{
	title: "md-wifi_arrow_down",
	icon: "󱚶",
},
{
	title: "md-wifi_arrow_left",
	icon: "󱚷",
},
{
	title: "md-wifi_arrow_left_right",
	icon: "󱚸",
},
{
	title: "md-wifi_arrow_right",
	icon: "󱚹",
},
{
	title: "md-wifi_arrow_up",
	icon: "󱚺",
},
{
	title: "md-wifi_arrow_up_down",
	icon: "󱚻",
},
{
	title: "md-wifi_cancel",
	icon: "󱚼",
},
{
	title: "md-wifi_check",
	icon: "󱚽",
},
{
	title: "md-wifi_cog",
	icon: "󱚾",
},
{
	title: "md-wifi_lock",
	icon: "󱚿",
},
{
	title: "md-wifi_lock_open",
	icon: "󱛀",
},
{
	title: "md-wifi_marker",
	icon: "󱛁",
},
{
	title: "md-wifi_minus",
	icon: "󱛂",
},
{
	title: "md-wifi_off",
	icon: "󰖪",
},
{
	title: "md-wifi_plus",
	icon: "󱛃",
},
{
	title: "md-wifi_refresh",
	icon: "󱛄",
},
{
	title: "md-wifi_remove",
	icon: "󱛅",
},
{
	title: "md-wifi_settings",
	icon: "󱛆",
},
{
	title: "md-wifi_star",
	icon: "󰸋",
},
{
	title: "md-wifi_strength_1",
	icon: "󰤟",
},
{
	title: "md-wifi_strength_1_alert",
	icon: "󰤠",
},
{
	title: "md-wifi_strength_1_lock",
	icon: "󰤡",
},
{
	title: "md-wifi_strength_1_lock_open",
	icon: "󱛋",
},
{
	title: "md-wifi_strength_2",
	icon: "󰤢",
},
{
	title: "md-wifi_strength_2_alert",
	icon: "󰤣",
},
{
	title: "md-wifi_strength_2_lock",
	icon: "󰤤",
},
{
	title: "md-wifi_strength_2_lock_open",
	icon: "󱛌",
},
{
	title: "md-wifi_strength_3",
	icon: "󰤥",
},
{
	title: "md-wifi_strength_3_alert",
	icon: "󰤦",
},
{
	title: "md-wifi_strength_3_lock",
	icon: "󰤧",
},
{
	title: "md-wifi_strength_3_lock_open",
	icon: "󱛍",
},
{
	title: "md-wifi_strength_4",
	icon: "󰤨",
},
{
	title: "md-wifi_strength_4_alert",
	icon: "󰤩",
},
{
	title: "md-wifi_strength_4_lock",
	icon: "󰤪",
},
{
	title: "md-wifi_strength_4_lock_open",
	icon: "󱛎",
},
{
	title: "md-wifi_strength_alert_outline",
	icon: "󰤫",
},
{
	title: "md-wifi_strength_lock_open_outline",
	icon: "󱛏",
},
{
	title: "md-wifi_strength_lock_outline",
	icon: "󰤬",
},
{
	title: "md-wifi_strength_off",
	icon: "󰤭",
},
{
	title: "md-wifi_strength_off_outline",
	icon: "󰤮",
},
{
	title: "md-wifi_strength_outline",
	icon: "󰤯",
},
{
	title: "md-wifi_sync",
	icon: "󱛇",
},
{
	title: "md-wikipedia",
	icon: "󰖬",
},
{
	title: "md-wind_power",
	icon: "󱪈",
},
{
	title: "md-wind_power_outline",
	icon: "󱪉",
},
{
	title: "md-wind_turbine",
	icon: "󰶥",
},
{
	title: "md-wind_turbine_alert",
	icon: "󱦫",
},
{
	title: "md-wind_turbine_check",
	icon: "󱦬",
},
{
	title: "md-window_close",
	icon: "󰖭",
},
{
	title: "md-window_closed",
	icon: "󰖮",
},
{
	title: "md-window_closed_variant",
	icon: "󱇛",
},
{
	title: "md-window_maximize",
	icon: "󰖯",
},
{
	title: "md-window_minimize",
	icon: "󰖰",
},
{
	title: "md-window_open",
	icon: "󰖱",
},
{
	title: "md-window_open_variant",
	icon: "󱇜",
},
{
	title: "md-window_restore",
	icon: "󰖲",
},
{
	title: "md-window_shutter",
	icon: "󱄜",
},
{
	title: "md-window_shutter_alert",
	icon: "󱄝",
},
{
	title: "md-window_shutter_cog",
	icon: "󱪊",
},
{
	title: "md-window_shutter_open",
	icon: "󱄞",
},
{
	title: "md-window_shutter_settings",
	icon: "󱪋",
},
{
	title: "md-windsock",
	icon: "󱗺",
},
{
	title: "md-wiper",
	icon: "󰫩",
},
{
	title: "md-wiper_wash",
	icon: "󰶦",
},
{
	title: "md-wiper_wash_alert",
	icon: "󱣟",
},
{
	title: "md-wizard_hat",
	icon: "󱑷",
},
{
	title: "md-wordpress",
	icon: "󰖴",
},
{
	title: "md-wrap",
	icon: "󰖶",
},
{
	title: "md-wrap_disabled",
	icon: "󰯟",
},
{
	title: "md-wrench",
	icon: "󰖷",
},
{
	title: "md-wrench_clock",
	icon: "󱦣",
},
{
	title: "md-wrench_outline",
	icon: "󰯠",
},
{
	title: "md-xamarin",
	icon: "󰡅",
},
{
	title: "md-xml",
	icon: "󰗀",
},
{
	title: "md-xmpp",
	icon: "󰟿",
},
{
	title: "md-yahoo",
	icon: "󰭏",
},
{
	title: "md-yeast",
	icon: "󰗁",
},
{
	title: "md-yin_yang",
	icon: "󰚀",
},
{
	title: "md-yoga",
	icon: "󱅼",
},
{
	title: "md-youtube",
	icon: "󰗃",
},
{
	title: "md-youtube_gaming",
	icon: "󰡈",
},
{
	title: "md-youtube_studio",
	icon: "󰡇",
},
{
	title: "md-youtube_subscription",
	icon: "󰵀",
},
{
	title: "md-youtube_tv",
	icon: "󰑈",
},
{
	title: "md-yurt",
	icon: "󱔖",
},
{
	title: "md-z_wave",
	icon: "󰫪",
},
{
	title: "md-zend",
	icon: "󰫫",
},
{
	title: "md-zigbee",
	icon: "󰵁",
},
{
	title: "md-zip_box",
	icon: "󰗄",
},
{
	title: "md-zip_box_outline",
	icon: "󰿺",
},
{
	title: "md-zip_disk",
	icon: "󰨣",
},
{
	title: "md-zodiac_aquarius",
	icon: "󰩽",
},
{
	title: "md-zodiac_aries",
	icon: "󰩾",
},
{
	title: "md-zodiac_cancer",
	icon: "󰩿",
},
{
	title: "md-zodiac_capricorn",
	icon: "󰪀",
},
{
	title: "md-zodiac_gemini",
	icon: "󰪁",
},
{
	title: "md-zodiac_leo",
	icon: "󰪂",
},
{
	title: "md-zodiac_libra",
	icon: "󰪃",
},
{
	title: "md-zodiac_pisces",
	icon: "󰪄",
},
{
	title: "md-zodiac_sagittarius",
	icon: "󰪅",
},
{
	title: "md-zodiac_scorpio",
	icon: "󰪆",
},
{
	title: "md-zodiac_taurus",
	icon: "󰪇",
},
{
	title: "md-zodiac_virgo",
	icon: "󰪈",
},
{
	title: "oct-accessibility",
	icon: "",
},
{
	title: "oct-accessibility_inset",
	icon: "",
},
{
	title: "oct-alert",
	icon: "",
},
{
	title: "oct-alert_fill",
	icon: "",
},
{
	title: "oct-apps",
	icon: "",
},
{
	title: "oct-archive",
	icon: "",
},
{
	title: "oct-arrow_both",
	icon: "",
},
{
	title: "oct-arrow_down",
	icon: "",
},
{
	title: "oct-arrow_down_left",
	icon: "",
},
{
	title: "oct-arrow_down_right",
	icon: "",
},
{
	title: "oct-arrow_left",
	icon: "",
},
{
	title: "oct-arrow_right",
	icon: "",
},
{
	title: "oct-arrow_switch",
	icon: "",
},
{
	title: "oct-arrow_up",
	icon: "",
},
{
	title: "oct-arrow_up_left",
	icon: "",
},
{
	title: "oct-arrow_up_right",
	icon: "",
},
{
	title: "oct-beaker",
	icon: "",
},
{
	title: "oct-bell",
	icon: "",
},
{
	title: "oct-bell_fill",
	icon: "",
},
{
	title: "oct-bell_slash",
	icon: "",
},
{
	title: "oct-blocked",
	icon: "",
},
{
	title: "oct-bold",
	icon: "",
},
{
	title: "oct-book",
	icon: "",
},
{
	title: "oct-bookmark",
	icon: "",
},
{
	title: "oct-bookmark_fill",
	icon: "",
},
{
	title: "oct-bookmark_slash",
	icon: "",
},
{
	title: "oct-bookmark_slash_fill",
	icon: "",
},
{
	title: "oct-briefcase",
	icon: "",
},
{
	title: "oct-broadcast",
	icon: "",
},
{
	title: "oct-browser",
	icon: "",
},
{
	title: "oct-bug",
	icon: "",
},
{
	title: "oct-cache",
	icon: "",
},
{
	title: "oct-calendar",
	icon: "",
},
{
	title: "oct-check",
	icon: "",
},
{
	title: "oct-check_circle",
	icon: "",
},
{
	title: "oct-check_circle_fill",
	icon: "",
},
{
	title: "oct-checkbox",
	icon: "",
},
{
	title: "oct-checklist",
	icon: "",
},
{
	title: "oct-chevron_down",
	icon: "",
},
{
	title: "oct-chevron_left",
	icon: "",
},
{
	title: "oct-chevron_right",
	icon: "",
},
{
	title: "oct-chevron_up",
	icon: "",
},
{
	title: "oct-circle",
	icon: "",
},
{
	title: "oct-circle_slash",
	icon: "",
},
{
	title: "oct-clock",
	icon: "",
},
{
	title: "oct-clock_fill",
	icon: "",
},
{
	title: "oct-cloud",
	icon: "",
},
{
	title: "oct-cloud_offline",
	icon: "",
},
{
	title: "oct-code",
	icon: "",
},
{
	title: "oct-code_of_conduct",
	icon: "",
},
{
	title: "oct-code_review",
	icon: "",
},
{
	title: "oct-code_square",
	icon: "",
},
{
	title: "oct-codescan",
	icon: "",
},
{
	title: "oct-codescan_checkmark",
	icon: "",
},
{
	title: "oct-codespaces",
	icon: "",
},
{
	title: "oct-columns",
	icon: "",
},
{
	title: "oct-command_palette",
	icon: "",
},
{
	title: "oct-comment",
	icon: "",
},
{
	title: "oct-comment_discussion",
	icon: "",
},
{
	title: "oct-commit",
	icon: "",
},
{
	title: "oct-container",
	icon: "",
},
{
	title: "oct-copilot",
	icon: "",
},
{
	title: "oct-copilot_error",
	icon: "",
},
{
	title: "oct-copilot_warning",
	icon: "",
},
{
	title: "oct-copy",
	icon: "",
},
{
	title: "oct-cpu",
	icon: "",
},
{
	title: "oct-credit_card",
	icon: "",
},
{
	title: "oct-cross_reference",
	icon: "",
},
{
	title: "oct-dash",
	icon: "",
},
{
	title: "oct-database",
	icon: "",
},
{
	title: "oct-dependabot",
	icon: "",
},
{
	title: "oct-desktop_download",
	icon: "",
},
{
	title: "oct-device_camera",
	icon: "",
},
{
	title: "oct-device_camera_video",
	icon: "",
},
{
	title: "oct-device_desktop",
	icon: "",
},
{
	title: "oct-device_mobile",
	icon: "",
},
{
	title: "oct-diamond",
	icon: "",
},
{
	title: "oct-diff",
	icon: "",
},
{
	title: "oct-diff_added",
	icon: "",
},
{
	title: "oct-diff_ignored",
	icon: "",
},
{
	title: "oct-diff_modified",
	icon: "",
},
{
	title: "oct-diff_removed",
	icon: "",
},
{
	title: "oct-diff_renamed",
	icon: "",
},
{
	title: "oct-discussion_closed",
	icon: "",
},
{
	title: "oct-discussion_duplicate",
	icon: "",
},
{
	title: "oct-discussion_outdated",
	icon: "",
},
{
	title: "oct-dot",
	icon: "",
},
{
	title: "oct-dot_fill",
	icon: "",
},
{
	title: "oct-download",
	icon: "",
},
{
	title: "oct-duplicate",
	icon: "",
},
{
	title: "oct-ellipsis",
	icon: "",
},
{
	title: "oct-eye",
	icon: "",
},
{
	title: "oct-eye_closed",
	icon: "",
},
{
	title: "oct-feed_discussion",
	icon: "",
},
{
	title: "oct-feed_forked",
	icon: "",
},
{
	title: "oct-feed_heart",
	icon: "",
},
{
	title: "oct-feed_merged",
	icon: "",
},
{
	title: "oct-feed_person",
	icon: "",
},
{
	title: "oct-feed_repo",
	icon: "",
},
{
	title: "oct-feed_rocket",
	icon: "",
},
{
	title: "oct-feed_star",
	icon: "",
},
{
	title: "oct-feed_tag",
	icon: "",
},
{
	title: "oct-feed_trophy",
	icon: "",
},
{
	title: "oct-file",
	icon: "",
},
{
	title: "oct-file_added",
	icon: "",
},
{
	title: "oct-file_badge",
	icon: "",
},
{
	title: "oct-file_binary",
	icon: "",
},
{
	title: "oct-file_code",
	icon: "",
},
{
	title: "oct-file_diff",
	icon: "",
},
{
	title: "oct-file_directory",
	icon: "",
},
{
	title: "oct-file_directory_fill",
	icon: "",
},
{
	title: "oct-file_directory_open_fill",
	icon: "",
},
{
	title: "oct-file_media",
	icon: "",
},
{
	title: "oct-file_moved",
	icon: "",
},
{
	title: "oct-file_removed",
	icon: "",
},
{
	title: "oct-file_submodule",
	icon: "",
},
{
	title: "oct-file_symlink_directory",
	icon: "",
},
{
	title: "oct-file_symlink_file",
	icon: "",
},
{
	title: "oct-file_zip",
	icon: "",
},
{
	title: "oct-filter",
	icon: "",
},
{
	title: "oct-fiscal_host",
	icon: "",
},
{
	title: "oct-flame",
	icon: "",
},
{
	title: "oct-fold",
	icon: "",
},
{
	title: "oct-fold_down",
	icon: "",
},
{
	title: "oct-fold_up",
	icon: "",
},
{
	title: "oct-gear",
	icon: "",
},
{
	title: "oct-gift",
	icon: "",
},
{
	title: "oct-git_branch",
	icon: "",
},
{
	title: "oct-git_commit",
	icon: "",
},
{
	title: "oct-git_compare",
	icon: "",
},
{
	title: "oct-git_merge",
	icon: "",
},
{
	title: "oct-git_merge_queue",
	icon: "",
},
{
	title: "oct-git_pull_request",
	icon: "",
},
{
	title: "oct-git_pull_request_closed",
	icon: "",
},
{
	title: "oct-git_pull_request_draft",
	icon: "",
},
{
	title: "oct-globe",
	icon: "",
},
{
	title: "oct-goal",
	icon: "",
},
{
	title: "oct-grabber",
	icon: "",
},
{
	title: "oct-graph",
	icon: "",
},
{
	title: "oct-hash",
	icon: "",
},
{
	title: "oct-heading",
	icon: "",
},
{
	title: "oct-heart",
	icon: "♥",
},
{
	title: "oct-heart_fill",
	icon: "",
},
{
	title: "oct-history",
	icon: "",
},
{
	title: "oct-home",
	icon: "",
},
{
	title: "oct-home_fill",
	icon: "",
},
{
	title: "oct-horizontal_rule",
	icon: "",
},
{
	title: "oct-hourglass",
	icon: "",
},
{
	title: "oct-hubot",
	icon: "",
},
{
	title: "oct-id_badge",
	icon: "",
},
{
	title: "oct-image",
	icon: "",
},
{
	title: "oct-inbox",
	icon: "",
},
{
	title: "oct-infinity",
	icon: "",
},
{
	title: "oct-info",
	icon: "",
},
{
	title: "oct-issue_closed",
	icon: "",
},
{
	title: "oct-issue_draft",
	icon: "",
},
{
	title: "oct-issue_opened",
	icon: "",
},
{
	title: "oct-issue_reopened",
	icon: "",
},
{
	title: "oct-issue_tracked_by",
	icon: "",
},
{
	title: "oct-issue_tracks",
	icon: "",
},
{
	title: "oct-italic",
	icon: "",
},
{
	title: "oct-iterations",
	icon: "",
},
{
	title: "oct-kebab_horizontal",
	icon: "",
},
{
	title: "oct-key",
	icon: "",
},
{
	title: "oct-key_asterisk",
	icon: "",
},
{
	title: "oct-law",
	icon: "",
},
{
	title: "oct-light_bulb",
	icon: "",
},
{
	title: "oct-link",
	icon: "",
},
{
	title: "oct-link_external",
	icon: "",
},
{
	title: "oct-list_ordered",
	icon: "",
},
{
	title: "oct-list_unordered",
	icon: "",
},
{
	title: "oct-location",
	icon: "",
},
{
	title: "oct-lock",
	icon: "",
},
{
	title: "oct-log",
	icon: "",
},
{
	title: "oct-logo_gist",
	icon: "",
},
{
	title: "oct-logo_github",
	icon: "",
},
{
	title: "oct-mail",
	icon: "",
},
{
	title: "oct-mark_github",
	icon: "",
},
{
	title: "oct-markdown",
	icon: "",
},
{
	title: "oct-megaphone",
	icon: "",
},
{
	title: "oct-mention",
	icon: "",
},
{
	title: "oct-meter",
	icon: "",
},
{
	title: "oct-milestone",
	icon: "",
},
{
	title: "oct-mirror",
	icon: "",
},
{
	title: "oct-moon",
	icon: "",
},
{
	title: "oct-mortar_board",
	icon: "",
},
{
	title: "oct-move_to_bottom",
	icon: "",
},
{
	title: "oct-move_to_end",
	icon: "",
},
{
	title: "oct-move_to_start",
	icon: "",
},
{
	title: "oct-move_to_top",
	icon: "",
},
{
	title: "oct-multi_select",
	icon: "",
},
{
	title: "oct-mute",
	icon: "",
},
{
	title: "oct-no_entry",
	icon: "",
},
{
	title: "oct-north_star",
	icon: "",
},
{
	title: "oct-note",
	icon: "",
},
{
	title: "oct-number",
	icon: "",
},
{
	title: "oct-organization",
	icon: "",
},
{
	title: "oct-package",
	icon: "",
},
{
	title: "oct-package_dependencies",
	icon: "",
},
{
	title: "oct-package_dependents",
	icon: "",
},
{
	title: "oct-paintbrush",
	icon: "",
},
{
	title: "oct-paper_airplane",
	icon: "",
},
{
	title: "oct-paperclip",
	icon: "",
},
{
	title: "oct-passkey_fill",
	icon: "",
},
{
	title: "oct-paste",
	icon: "",
},
{
	title: "oct-pencil",
	icon: "",
},
{
	title: "oct-people",
	icon: "",
},
{
	title: "oct-person",
	icon: "",
},
{
	title: "oct-person_add",
	icon: "",
},
{
	title: "oct-person_fill",
	icon: "",
},
{
	title: "oct-pin",
	icon: "",
},
{
	title: "oct-play",
	icon: "",
},
{
	title: "oct-plug",
	icon: "",
},
{
	title: "oct-plus",
	icon: "",
},
{
	title: "oct-plus_circle",
	icon: "",
},
{
	title: "oct-project",
	icon: "",
},
{
	title: "oct-project_roadmap",
	icon: "",
},
{
	title: "oct-project_symlink",
	icon: "",
},
{
	title: "oct-project_template",
	icon: "",
},
{
	title: "oct-pulse",
	icon: "",
},
{
	title: "oct-question",
	icon: "",
},
{
	title: "oct-quote",
	icon: "",
},
{
	title: "oct-read",
	icon: "",
},
{
	title: "oct-rel_file_path",
	icon: "",
},
{
	title: "oct-reply",
	icon: "",
},
{
	title: "oct-repo",
	icon: "",
},
{
	title: "oct-repo_clone",
	icon: "",
},
{
	title: "oct-repo_deleted",
	icon: "",
},
{
	title: "oct-repo_forked",
	icon: "",
},
{
	title: "oct-repo_locked",
	icon: "",
},
{
	title: "oct-repo_pull",
	icon: "",
},
{
	title: "oct-repo_push",
	icon: "",
},
{
	title: "oct-repo_template",
	icon: "",
},
{
	title: "oct-report",
	icon: "",
},
{
	title: "oct-rocket",
	icon: "",
},
{
	title: "oct-rows",
	icon: "",
},
{
	title: "oct-rss",
	icon: "",
},
{
	title: "oct-ruby",
	icon: "",
},
{
	title: "oct-screen_full",
	icon: "",
},
{
	title: "oct-screen_normal",
	icon: "",
},
{
	title: "oct-search",
	icon: "",
},
{
	title: "oct-server",
	icon: "",
},
{
	title: "oct-share",
	icon: "",
},
{
	title: "oct-share_android",
	icon: "",
},
{
	title: "oct-shield",
	icon: "",
},
{
	title: "oct-shield_check",
	icon: "",
},
{
	title: "oct-shield_lock",
	icon: "",
},
{
	title: "oct-shield_slash",
	icon: "",
},
{
	title: "oct-shield_x",
	icon: "",
},
{
	title: "oct-sidebar_collapse",
	icon: "",
},
{
	title: "oct-sidebar_expand",
	icon: "",
},
{
	title: "oct-sign_in",
	icon: "",
},
{
	title: "oct-sign_out",
	icon: "",
},
{
	title: "oct-single_select",
	icon: "",
},
{
	title: "oct-skip",
	icon: "",
},
{
	title: "oct-skip_fill",
	icon: "",
},
{
	title: "oct-sliders",
	icon: "",
},
{
	title: "oct-smiley",
	icon: "",
},
{
	title: "oct-sort_asc",
	icon: "",
},
{
	title: "oct-sort_desc",
	icon: "",
},
{
	title: "oct-sparkle_fill",
	icon: "",
},
{
	title: "oct-sponsor_tiers",
	icon: "",
},
{
	title: "oct-square",
	icon: "",
},
{
	title: "oct-square_fill",
	icon: "",
},
{
	title: "oct-squirrel",
	icon: "",
},
{
	title: "oct-stack",
	icon: "",
},
{
	title: "oct-star",
	icon: "",
},
{
	title: "oct-star_fill",
	icon: "",
},
{
	title: "oct-stop",
	icon: "",
},
{
	title: "oct-stopwatch",
	icon: "",
},
{
	title: "oct-strikethrough",
	icon: "",
},
{
	title: "oct-sun",
	icon: "",
},
{
	title: "oct-sync",
	icon: "",
},
{
	title: "oct-tab",
	icon: "",
},
{
	title: "oct-tab_external",
	icon: "",
},
{
	title: "oct-table",
	icon: "",
},
{
	title: "oct-tag",
	icon: "",
},
{
	title: "oct-tasklist",
	icon: "",
},
{
	title: "oct-telescope",
	icon: "",
},
{
	title: "oct-telescope_fill",
	icon: "",
},
{
	title: "oct-terminal",
	icon: "",
},
{
	title: "oct-three_bars",
	icon: "",
},
{
	title: "oct-thumbsdown",
	icon: "",
},
{
	title: "oct-thumbsup",
	icon: "",
},
{
	title: "oct-tools",
	icon: "",
},
{
	title: "oct-trash",
	icon: "",
},
{
	title: "oct-triangle_down",
	icon: "",
},
{
	title: "oct-triangle_left",
	icon: "",
},
{
	title: "oct-triangle_right",
	icon: "",
},
{
	title: "oct-triangle_up",
	icon: "",
},
{
	title: "oct-trophy",
	icon: "",
},
{
	title: "oct-typography",
	icon: "",
},
{
	title: "oct-unfold",
	icon: "",
},
{
	title: "oct-unlink",
	icon: "",
},
{
	title: "oct-unlock",
	icon: "",
},
{
	title: "oct-unmute",
	icon: "",
},
{
	title: "oct-unread",
	icon: "",
},
{
	title: "oct-unverified",
	icon: "",
},
{
	title: "oct-upload",
	icon: "",
},
{
	title: "oct-verified",
	icon: "",
},
{
	title: "oct-versions",
	icon: "",
},
{
	title: "oct-video",
	icon: "",
},
{
	title: "oct-webhook",
	icon: "",
},
{
	title: "oct-workflow",
	icon: "",
},
{
	title: "oct-x",
	icon: "",
},
{
	title: "oct-x_circle",
	icon: "",
},
{
	title: "oct-x_circle_fill",
	icon: "",
},
{
	title: "oct-zap",
	icon: "⚡",
},
{
	title: "oct-zoom_in",
	icon: "",
},
{
	title: "oct-zoom_out",
	icon: "",
},
{
	title: "pl-branch",
	icon: "",
},
{
	title: "pl-current_line",
	icon: "",
},
{
	title: "pl-hostname",
	icon: "",
},
{
	title: "pl-left_hard_divider",
	icon: "",
},
{
	title: "pl-left_soft_divider",
	icon: "",
},
{
	title: "pl-line_number",
	icon: "",
},
{
	title: "pl-readonly",
	icon: "",
},
{
	title: "pl-right_hard_divider",
	icon: "",
},
{
	title: "pl-right_soft_divider",
	icon: "",
},
{
	title: "ple-backslash_separator",
	icon: "",
},
{
	title: "ple-backslash_separator_redundant",
	icon: "",
},
{
	title: "ple-column_number",
	icon: "",
},
{
	title: "ple-current_column",
	icon: "",
},
{
	title: "ple-flame_thick",
	icon: "",
},
{
	title: "ple-flame_thick_mirrored",
	icon: "",
},
{
	title: "ple-flame_thin",
	icon: "",
},
{
	title: "ple-flame_thin_mirrored",
	icon: "",
},
{
	title: "ple-forwardslash_separator",
	icon: "",
},
{
	title: "ple-forwardslash_separator_redundant",
	icon: "",
},
{
	title: "ple-honeycomb",
	icon: "",
},
{
	title: "ple-honeycomb_outline",
	icon: "",
},
{
	title: "ple-ice_waveform",
	icon: "",
},
{
	title: "ple-ice_waveform_mirrored",
	icon: "",
},
{
	title: "ple-left_half_circle_thick",
	icon: "",
},
{
	title: "ple-left_half_circle_thin",
	icon: "",
},
{
	title: "ple-left_hard_divider_inverse",
	icon: "",
},
{
	title: "ple-lego_block_facing",
	icon: "",
},
{
	title: "ple-lego_block_sideways",
	icon: "",
},
{
	title: "ple-lego_separator",
	icon: "",
},
{
	title: "ple-lego_separator_thin",
	icon: "",
},
{
	title: "ple-lower_left_triangle",
	icon: "",
},
{
	title: "ple-lower_right_triangle",
	icon: "",
},
{
	title: "ple-pixelated_squares_big",
	icon: "",
},
{
	title: "ple-pixelated_squares_big_mirrored",
	icon: "",
},
{
	title: "ple-pixelated_squares_small",
	icon: "",
},
{
	title: "ple-pixelated_squares_small_mirrored",
	icon: "",
},
{
	title: "ple-right_half_circle_thick",
	icon: "",
},
{
	title: "ple-right_half_circle_thin",
	icon: "",
},
{
	title: "ple-right_hard_divider_inverse",
	icon: "",
},
{
	title: "ple-trapezoid_top_bottom",
	icon: "",
},
{
	title: "ple-trapezoid_top_bottom_mirrored",
	icon: "",
},
{
	title: "ple-upper_left_triangle",
	icon: "",
},
{
	title: "ple-upper_right_triangle",
	icon: "",
},
{
	title: "pom-away",
	icon: "",
},
{
	title: "pom-clean_code",
	icon: "",
},
{
	title: "pom-external_interruption",
	icon: "",
},
{
	title: "pom-internal_interruption",
	icon: "",
},
{
	title: "pom-long_pause",
	icon: "",
},
{
	title: "pom-pair_programming",
	icon: "",
},
{
	title: "pom-pomodoro_done",
	icon: "",
},
{
	title: "pom-pomodoro_estimated",
	icon: "",
},
{
	title: "pom-pomodoro_squashed",
	icon: "",
},
{
	title: "pom-pomodoro_ticking",
	icon: "",
},
{
	title: "pom-short_pause",
	icon: "",
},
{
	title: "seti-apple",
	icon: "",
},
{
	title: "seti-argdown",
	icon: "",
},
{
	title: "seti-asm",
	icon: "",
},
{
	title: "seti-audio",
	icon: "",
},
{
	title: "seti-babel",
	icon: "",
},
{
	title: "seti-bazel",
	icon: "",
},
{
	title: "seti-bicep",
	icon: "",
},
{
	title: "seti-bower",
	icon: "",
},
{
	title: "seti-bsl",
	icon: "",
},
{
	title: "seti-c",
	icon: "",
},
{
	title: "seti-c_sharp",
	icon: "",
},
{
	title: "seti-cake",
	icon: "",
},
{
	title: "seti-cake_php",
	icon: "",
},
{
	title: "seti-checkbox",
	icon: "",
},
{
	title: "seti-checkbox_unchecked",
	icon: "",
},
{
	title: "seti-cjsx",
	icon: "",
},
{
	title: "seti-clock",
	icon: "",
},
{
	title: "seti-clojure",
	icon: "",
},
{
	title: "seti-code_climate",
	icon: "",
},
{
	title: "seti-code_search",
	icon: "",
},
{
	title: "seti-coffee",
	icon: "",
},
{
	title: "seti-coldfusion",
	icon: "",
},
{
	title: "seti-config",
	icon: "",
},
{
	title: "seti-cpp",
	icon: "",
},
{
	title: "seti-crystal",
	icon: "",
},
{
	title: "seti-crystal_embedded",
	icon: "",
},
{
	title: "seti-css",
	icon: "",
},
{
	title: "seti-csv",
	icon: "",
},
{
	title: "seti-cu",
	icon: "",
},
{
	title: "seti-d",
	icon: "",
},
{
	title: "seti-dart",
	icon: "",
},
{
	title: "seti-db",
	icon: "",
},
{
	title: "seti-default",
	icon: "",
},
{
	title: "seti-deprecation_cop",
	icon: "",
},
{
	title: "seti-docker",
	icon: "",
},
{
	title: "seti-editorconfig",
	icon: "",
},
{
	title: "seti-ejs",
	icon: "",
},
{
	title: "seti-elixir",
	icon: "",
},
{
	title: "seti-elixir_script",
	icon: "",
},
{
	title: "seti-elm",
	icon: "",
},
{
	title: "seti-error",
	icon: "",
},
{
	title: "seti-eslint",
	icon: "",
},
{
	title: "seti-ethereum",
	icon: "",
},
{
	title: "seti-f_sharp",
	icon: "",
},
{
	title: "seti-favicon",
	icon: "",
},
{
	title: "seti-firebase",
	icon: "",
},
{
	title: "seti-firefox",
	icon: "",
},
{
	title: "seti-folder",
	icon: "",
},
{
	title: "seti-font",
	icon: "",
},
{
	title: "seti-git",
	icon: "",
},
{
	title: "seti-git_folder",
	icon: "",
},
{
	title: "seti-git_ignore",
	icon: "",
},
{
	title: "seti-github",
	icon: "",
},
{
	title: "seti-gitlab",
	icon: "",
},
{
	title: "seti-go",
	icon: "",
},
{
	title: "seti-go2",
	icon: "",
},
{
	title: "seti-godot",
	icon: "",
},
{
	title: "seti-gradle",
	icon: "",
},
{
	title: "seti-grails",
	icon: "",
},
{
	title: "seti-graphql",
	icon: "",
},
{
	title: "seti-grunt",
	icon: "",
},
{
	title: "seti-gulp",
	icon: "",
},
{
	title: "seti-hacklang",
	icon: "",
},
{
	title: "seti-haml",
	icon: "",
},
{
	title: "seti-happenings",
	icon: "",
},
{
	title: "seti-haskell",
	icon: "",
},
{
	title: "seti-haxe",
	icon: "",
},
{
	title: "seti-heroku",
	icon: "",
},
{
	title: "seti-hex",
	icon: "",
},
{
	title: "seti-home",
	icon: "",
},
{
	title: "seti-html",
	icon: "",
},
{
	title: "seti-ignored",
	icon: "",
},
{
	title: "seti-illustrator",
	icon: "",
},
{
	title: "seti-image",
	icon: "",
},
{
	title: "seti-info",
	icon: "",
},
{
	title: "seti-ionic",
	icon: "",
},
{
	title: "seti-jade",
	icon: "",
},
{
	title: "seti-java",
	icon: "",
},
{
	title: "seti-javascript",
	icon: "",
},
{
	title: "seti-jenkins",
	icon: "",
},
{
	title: "seti-jinja",
	icon: "",
},
{
	title: "seti-json",
	icon: "",
},
{
	title: "seti-julia",
	icon: "",
},
{
	title: "seti-karma",
	icon: "",
},
{
	title: "seti-kotlin",
	icon: "",
},
{
	title: "seti-less",
	icon: "",
},
{
	title: "seti-license",
	icon: "",
},
{
	title: "seti-liquid",
	icon: "",
},
{
	title: "seti-livescript",
	icon: "",
},
{
	title: "seti-lock",
	icon: "",
},
{
	title: "seti-lua",
	icon: "",
},
{
	title: "seti-makefile",
	icon: "",
},
{
	title: "seti-markdown",
	icon: "",
},
{
	title: "seti-maven",
	icon: "",
},
{
	title: "seti-mdo",
	icon: "",
},
{
	title: "seti-mustache",
	icon: "",
},
{
	title: "seti-new_file",
	icon: "",
},
{
	title: "seti-nim",
	icon: "",
},
{
	title: "seti-notebook",
	icon: "",
},
{
	title: "seti-npm",
	icon: "",
},
{
	title: "seti-npm_ignored",
	icon: "",
},
{
	title: "seti-nunjucks",
	icon: "",
},
{
	title: "seti-ocaml",
	icon: "",
},
{
	title: "seti-odata",
	icon: "",
},
{
	title: "seti-pddl",
	icon: "",
},
{
	title: "seti-pdf",
	icon: "",
},
{
	title: "seti-perl",
	icon: "",
},
{
	title: "seti-photoshop",
	icon: "",
},
{
	title: "seti-php",
	icon: "",
},
{
	title: "seti-pipeline",
	icon: "",
},
{
	title: "seti-plan",
	icon: "",
},
{
	title: "seti-platformio",
	icon: "",
},
{
	title: "seti-play_arrow",
	icon: "",
},
{
	title: "seti-powershell",
	icon: "",
},
{
	title: "seti-prisma",
	icon: "",
},
{
	title: "seti-project",
	icon: "",
},
{
	title: "seti-prolog",
	icon: "",
},
{
	title: "seti-pug",
	icon: "",
},
{
	title: "seti-puppet",
	icon: "",
},
{
	title: "seti-purescript",
	icon: "",
},
{
	title: "seti-python",
	icon: "",
},
{
	title: "seti-r",
	icon: "",
},
{
	title: "seti-rails",
	icon: "",
},
{
	title: "seti-react",
	icon: "",
},
{
	title: "seti-reasonml",
	icon: "",
},
{
	title: "seti-rescript",
	icon: "",
},
{
	title: "seti-rollup",
	icon: "",
},
{
	title: "seti-ruby",
	icon: "",
},
{
	title: "seti-rust",
	icon: "",
},
{
	title: "seti-salesforce",
	icon: "",
},
{
	title: "seti-sass",
	icon: "",
},
{
	title: "seti-sbt",
	icon: "",
},
{
	title: "seti-scala",
	icon: "",
},
{
	title: "seti-search",
	icon: "",
},
{
	title: "seti-settings",
	icon: "",
},
{
	title: "seti-shell",
	icon: "",
},
{
	title: "seti-slim",
	icon: "",
},
{
	title: "seti-smarty",
	icon: "",
},
{
	title: "seti-spring",
	icon: "",
},
{
	title: "seti-stylelint",
	icon: "",
},
{
	title: "seti-stylus",
	icon: "",
},
{
	title: "seti-sublime",
	icon: "",
},
{
	title: "seti-svelte",
	icon: "",
},
{
	title: "seti-svg",
	icon: "",
},
{
	title: "seti-swift",
	icon: "",
},
{
	title: "seti-terraform",
	icon: "",
},
{
	title: "seti-tex",
	icon: "",
},
{
	title: "seti-text",
	icon: "",
},
{
	title: "seti-time_cop",
	icon: "",
},
{
	title: "seti-todo",
	icon: "",
},
{
	title: "seti-tsconfig",
	icon: "",
},
{
	title: "seti-twig",
	icon: "",
},
{
	title: "seti-typescript",
	icon: "",
},
{
	title: "seti-vala",
	icon: "",
},
{
	title: "seti-video",
	icon: "",
},
{
	title: "seti-vue",
	icon: "",
},
{
	title: "seti-wasm",
	icon: "",
},
{
	title: "seti-wat",
	icon: "",
},
{
	title: "seti-webpack",
	icon: "",
},
{
	title: "seti-wgt",
	icon: "",
},
{
	title: "seti-word",
	icon: "",
},
{
	title: "seti-xls",
	icon: "",
},
{
	title: "seti-xml",
	icon: "",
},
{
	title: "seti-yarn",
	icon: "",
},
{
	title: "seti-yml",
	icon: "",
},
{
	title: "seti-zig",
	icon: "",
},
{
	title: "seti-zip",
	icon: "",
},
{
	title: "weather-alien",
	icon: "",
},
{
	title: "weather-aliens",
	icon: "",
},
{
	title: "weather-barometer",
	icon: "",
},
{
	title: "weather-celsius",
	icon: "",
},
{
	title: "weather-cloud",
	icon: "",
},
{
	title: "weather-cloud_down",
	icon: "",
},
{
	title: "weather-cloud_refresh",
	icon: "",
},
{
	title: "weather-cloud_up",
	icon: "",
},
{
	title: "weather-cloudy",
	icon: "",
},
{
	title: "weather-cloudy_gusts",
	icon: "",
},
{
	title: "weather-cloudy_windy",
	icon: "",
},
{
	title: "weather-day_cloudy",
	icon: "",
},
{
	title: "weather-day_cloudy_gusts",
	icon: "",
},
{
	title: "weather-day_cloudy_high",
	icon: "",
},
{
	title: "weather-day_cloudy_windy",
	icon: "",
},
{
	title: "weather-day_fog",
	icon: "",
},
{
	title: "weather-day_hail",
	icon: "",
},
{
	title: "weather-day_haze",
	icon: "",
},
{
	title: "weather-day_light_wind",
	icon: "",
},
{
	title: "weather-day_lightning",
	icon: "",
},
{
	title: "weather-day_rain",
	icon: "",
},
{
	title: "weather-day_rain_mix",
	icon: "",
},
{
	title: "weather-day_rain_wind",
	icon: "",
},
{
	title: "weather-day_showers",
	icon: "",
},
{
	title: "weather-day_sleet",
	icon: "",
},
{
	title: "weather-day_sleet_storm",
	icon: "",
},
{
	title: "weather-day_snow",
	icon: "",
},
{
	title: "weather-day_snow_thunderstorm",
	icon: "",
},
{
	title: "weather-day_snow_wind",
	icon: "",
},
{
	title: "weather-day_sprinkle",
	icon: "",
},
{
	title: "weather-day_storm_showers",
	icon: "",
},
{
	title: "weather-day_sunny",
	icon: "",
},
{
	title: "weather-day_sunny_overcast",
	icon: "",
},
{
	title: "weather-day_thunderstorm",
	icon: "",
},
{
	title: "weather-day_windy",
	icon: "",
},
{
	title: "weather-degrees",
	icon: "",
},
{
	title: "weather-direction_down",
	icon: "",
},
{
	title: "weather-direction_down_left",
	icon: "",
},
{
	title: "weather-direction_down_right",
	icon: "",
},
{
	title: "weather-direction_left",
	icon: "",
},
{
	title: "weather-direction_right",
	icon: "",
},
{
	title: "weather-direction_up",
	icon: "",
},
{
	title: "weather-direction_up_left",
	icon: "",
},
{
	title: "weather-direction_up_right",
	icon: "",
},
{
	title: "weather-dust",
	icon: "",
},
{
	title: "weather-earthquake",
	icon: "",
},
{
	title: "weather-fahrenheit",
	icon: "",
},
{
	title: "weather-fire",
	icon: "",
},
{
	title: "weather-flood",
	icon: "",
},
{
	title: "weather-fog",
	icon: "",
},
{
	title: "weather-gale_warning",
	icon: "",
},
{
	title: "weather-hail",
	icon: "",
},
{
	title: "weather-horizon",
	icon: "",
},
{
	title: "weather-horizon_alt",
	icon: "",
},
{
	title: "weather-hot",
	icon: "",
},
{
	title: "weather-humidity",
	icon: "",
},
{
	title: "weather-hurricane",
	icon: "",
},
{
	title: "weather-hurricane_warning",
	icon: "",
},
{
	title: "weather-lightning",
	icon: "",
},
{
	title: "weather-lunar_eclipse",
	icon: "",
},
{
	title: "weather-meteor",
	icon: "",
},
{
	title: "weather-moon_alt_first_quarter",
	icon: "",
},
{
	title: "weather-moon_alt_full",
	icon: "",
},
{
	title: "weather-moon_alt_new",
	icon: "",
},
{
	title: "weather-moon_alt_third_quarter",
	icon: "",
},
{
	title: "weather-moon_alt_waning_crescent_1",
	icon: "",
},
{
	title: "weather-moon_alt_waning_crescent_2",
	icon: "",
},
{
	title: "weather-moon_alt_waning_crescent_3",
	icon: "",
},
{
	title: "weather-moon_alt_waning_crescent_4",
	icon: "",
},
{
	title: "weather-moon_alt_waning_crescent_5",
	icon: "",
},
{
	title: "weather-moon_alt_waning_crescent_6",
	icon: "",
},
{
	title: "weather-moon_alt_waning_gibbous_1",
	icon: "",
},
{
	title: "weather-moon_alt_waning_gibbous_2",
	icon: "",
},
{
	title: "weather-moon_alt_waning_gibbous_3",
	icon: "",
},
{
	title: "weather-moon_alt_waning_gibbous_4",
	icon: "",
},
{
	title: "weather-moon_alt_waning_gibbous_5",
	icon: "",
},
{
	title: "weather-moon_alt_waning_gibbous_6",
	icon: "",
},
{
	title: "weather-moon_alt_waxing_crescent_1",
	icon: "",
},
{
	title: "weather-moon_alt_waxing_crescent_2",
	icon: "",
},
{
	title: "weather-moon_alt_waxing_crescent_3",
	icon: "",
},
{
	title: "weather-moon_alt_waxing_crescent_4",
	icon: "",
},
{
	title: "weather-moon_alt_waxing_crescent_5",
	icon: "",
},
{
	title: "weather-moon_alt_waxing_crescent_6",
	icon: "",
},
{
	title: "weather-moon_alt_waxing_gibbous_1",
	icon: "",
},
{
	title: "weather-moon_alt_waxing_gibbous_2",
	icon: "",
},
{
	title: "weather-moon_alt_waxing_gibbous_3",
	icon: "",
},
{
	title: "weather-moon_alt_waxing_gibbous_4",
	icon: "",
},
{
	title: "weather-moon_alt_waxing_gibbous_5",
	icon: "",
},
{
	title: "weather-moon_alt_waxing_gibbous_6",
	icon: "",
},
{
	title: "weather-moon_first_quarter",
	icon: "",
},
{
	title: "weather-moon_full",
	icon: "",
},
{
	title: "weather-moon_new",
	icon: "",
},
{
	title: "weather-moon_third_quarter",
	icon: "",
},
{
	title: "weather-moon_waning_crescent_1",
	icon: "",
},
{
	title: "weather-moon_waning_crescent_2",
	icon: "",
},
{
	title: "weather-moon_waning_crescent_3",
	icon: "",
},
{
	title: "weather-moon_waning_crescent_4",
	icon: "",
},
{
	title: "weather-moon_waning_crescent_5",
	icon: "",
},
{
	title: "weather-moon_waning_crescent_6",
	icon: "",
},
{
	title: "weather-moon_waning_gibbous_1",
	icon: "",
},
{
	title: "weather-moon_waning_gibbous_2",
	icon: "",
},
{
	title: "weather-moon_waning_gibbous_3",
	icon: "",
},
{
	title: "weather-moon_waning_gibbous_4",
	icon: "",
},
{
	title: "weather-moon_waning_gibbous_5",
	icon: "",
},
{
	title: "weather-moon_waning_gibbous_6",
	icon: "",
},
{
	title: "weather-moon_waxing_crescent_1",
	icon: "",
},
{
	title: "weather-moon_waxing_crescent_2",
	icon: "",
},
{
	title: "weather-moon_waxing_crescent_3",
	icon: "",
},
{
	title: "weather-moon_waxing_crescent_4",
	icon: "",
},
{
	title: "weather-moon_waxing_crescent_5",
	icon: "",
},
{
	title: "weather-moon_waxing_crescent_6",
	icon: "",
},
{
	title: "weather-moon_waxing_gibbous_1",
	icon: "",
},
{
	title: "weather-moon_waxing_gibbous_2",
	icon: "",
},
{
	title: "weather-moon_waxing_gibbous_3",
	icon: "",
},
{
	title: "weather-moon_waxing_gibbous_4",
	icon: "",
},
{
	title: "weather-moon_waxing_gibbous_5",
	icon: "",
},
{
	title: "weather-moon_waxing_gibbous_6",
	icon: "",
},
{
	title: "weather-moonrise",
	icon: "",
},
{
	title: "weather-moonset",
	icon: "",
},
{
	title: "weather-na",
	icon: "",
},
{
	title: "weather-night_alt_cloudy",
	icon: "",
},
{
	title: "weather-night_alt_cloudy_gusts",
	icon: "",
},
{
	title: "weather-night_alt_cloudy_high",
	icon: "",
},
{
	title: "weather-night_alt_cloudy_windy",
	icon: "",
},
{
	title: "weather-night_alt_hail",
	icon: "",
},
{
	title: "weather-night_alt_lightning",
	icon: "",
},
{
	title: "weather-night_alt_partly_cloudy",
	icon: "",
},
{
	title: "weather-night_alt_rain",
	icon: "",
},
{
	title: "weather-night_alt_rain_mix",
	icon: "",
},
{
	title: "weather-night_alt_rain_wind",
	icon: "",
},
{
	title: "weather-night_alt_showers",
	icon: "",
},
{
	title: "weather-night_alt_sleet",
	icon: "",
},
{
	title: "weather-night_alt_sleet_storm",
	icon: "",
},
{
	title: "weather-night_alt_snow",
	icon: "",
},
{
	title: "weather-night_alt_snow_thunderstorm",
	icon: "",
},
{
	title: "weather-night_alt_snow_wind",
	icon: "",
},
{
	title: "weather-night_alt_sprinkle",
	icon: "",
},
{
	title: "weather-night_alt_storm_showers",
	icon: "",
},
{
	title: "weather-night_alt_thunderstorm",
	icon: "",
},
{
	title: "weather-night_clear",
	icon: "",
},
{
	title: "weather-night_cloudy",
	icon: "",
},
{
	title: "weather-night_cloudy_gusts",
	icon: "",
},
{
	title: "weather-night_cloudy_high",
	icon: "",
},
{
	title: "weather-night_cloudy_windy",
	icon: "",
},
{
	title: "weather-night_fog",
	icon: "",
},
{
	title: "weather-night_hail",
	icon: "",
},
{
	title: "weather-night_lightning",
	icon: "",
},
{
	title: "weather-night_partly_cloudy",
	icon: "",
},
{
	title: "weather-night_rain",
	icon: "",
},
{
	title: "weather-night_rain_mix",
	icon: "",
},
{
	title: "weather-night_rain_wind",
	icon: "",
},
{
	title: "weather-night_showers",
	icon: "",
},
{
	title: "weather-night_sleet",
	icon: "",
},
{
	title: "weather-night_sleet_storm",
	icon: "",
},
{
	title: "weather-night_snow",
	icon: "",
},
{
	title: "weather-night_snow_thunderstorm",
	icon: "",
},
{
	title: "weather-night_snow_wind",
	icon: "",
},
{
	title: "weather-night_sprinkle",
	icon: "",
},
{
	title: "weather-night_storm_showers",
	icon: "",
},
{
	title: "weather-night_thunderstorm",
	icon: "",
},
{
	title: "weather-rain",
	icon: "",
},
{
	title: "weather-rain_mix",
	icon: "",
},
{
	title: "weather-rain_wind",
	icon: "",
},
{
	title: "weather-raindrop",
	icon: "",
},
{
	title: "weather-raindrops",
	icon: "",
},
{
	title: "weather-refresh",
	icon: "",
},
{
	title: "weather-refresh_alt",
	icon: "",
},
{
	title: "weather-sandstorm",
	icon: "",
},
{
	title: "weather-showers",
	icon: "",
},
{
	title: "weather-sleet",
	icon: "",
},
{
	title: "weather-small_craft_advisory",
	icon: "",
},
{
	title: "weather-smog",
	icon: "",
},
{
	title: "weather-smoke",
	icon: "",
},
{
	title: "weather-snow",
	icon: "",
},
{
	title: "weather-snow_wind",
	icon: "",
},
{
	title: "weather-snowflake_cold",
	icon: "",
},
{
	title: "weather-solar_eclipse",
	icon: "",
},
{
	title: "weather-sprinkle",
	icon: "",
},
{
	title: "weather-stars",
	icon: "",
},
{
	title: "weather-storm_showers",
	icon: "",
},
{
	title: "weather-storm_warning",
	icon: "",
},
{
	title: "weather-strong_wind",
	icon: "",
},
{
	title: "weather-sunrise",
	icon: "",
},
{
	title: "weather-sunset",
	icon: "",
},
{
	title: "weather-thermometer",
	icon: "",
},
{
	title: "weather-thermometer_exterior",
	icon: "",
},
{
	title: "weather-thermometer_internal",
	icon: "",
},
{
	title: "weather-thunderstorm",
	icon: "",
},
{
	title: "weather-time_1",
	icon: "",
},
{
	title: "weather-time_10",
	icon: "",
},
{
	title: "weather-time_11",
	icon: "",
},
{
	title: "weather-time_12",
	icon: "",
},
{
	title: "weather-time_2",
	icon: "",
},
{
	title: "weather-time_3",
	icon: "",
},
{
	title: "weather-time_4",
	icon: "",
},
{
	title: "weather-time_5",
	icon: "",
},
{
	title: "weather-time_6",
	icon: "",
},
{
	title: "weather-time_7",
	icon: "",
},
{
	title: "weather-time_8",
	icon: "",
},
{
	title: "weather-time_9",
	icon: "",
},
{
	title: "weather-tornado",
	icon: "",
},
{
	title: "weather-train",
	icon: "",
},
{
	title: "weather-tsunami",
	icon: "",
},
{
	title: "weather-umbrella",
	icon: "",
},
{
	title: "weather-volcano",
	icon: "",
},
{
	title: "weather-wind_beaufort_0",
	icon: "",
},
{
	title: "weather-wind_beaufort_1",
	icon: "",
},
{
	title: "weather-wind_beaufort_10",
	icon: "",
},
{
	title: "weather-wind_beaufort_11",
	icon: "",
},
{
	title: "weather-wind_beaufort_12",
	icon: "",
},
{
	title: "weather-wind_beaufort_2",
	icon: "",
},
{
	title: "weather-wind_beaufort_3",
	icon: "",
},
{
	title: "weather-wind_beaufort_4",
	icon: "",
},
{
	title: "weather-wind_beaufort_5",
	icon: "",
},
{
	title: "weather-wind_beaufort_6",
	icon: "",
},
{
	title: "weather-wind_beaufort_7",
	icon: "",
},
{
	title: "weather-wind_beaufort_8",
	icon: "",
},
{
	title: "weather-wind_beaufort_9",
	icon: "",
},
{
	title: "weather-wind_direction",
	icon: "",
},
{
	title: "weather-wind_east",
	icon: "",
},
{
	title: "weather-wind_north",
	icon: "",
},
{
	title: "weather-wind_north_east",
	icon: "",
},
{
	title: "weather-wind_north_west",
	icon: "",
},
{
	title: "weather-wind_south",
	icon: "",
},
{
	title: "weather-wind_south_east",
	icon: "",
},
{
	title: "weather-wind_south_west",
	icon: "",
},
{
	title: "weather-wind_west",
	icon: "",
},
{
	title: "weather-windy",
	icon: "",
} 
]; 

interface Icon {
	title: string;
	icon: string;
}

export class IconSearch extends FuzzySuggestModal<Icon> {
  getItems(): Icon[] {
    return TITLE;
  }

  getItemText(icon: Icon): string {
    return icon.title + " - " + icon.icon;
  }

  onChooseItem(icon: Icon, evt: MouseEvent | KeyboardEvent) {
	this.app.workspace.getActiveViewOfType(MarkdownView).editor.replaceSelection(
		icon.icon,
		this.app.workspace.getActiveViewOfType(MarkdownView).editor.getCursor()
	);
  }
}
